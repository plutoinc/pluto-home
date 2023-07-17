import axios from "axios";
import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Input from "./Input";

interface Props {
  setIsSendSuccess: Dispatch<SetStateAction<boolean>>;
}

type FormData = {
  name: string;
  email: string;
  affiliation: string;
  message: string;
};

type ErrorMessage = string;

type FormError = {
  name?: ErrorMessage;
  email?: ErrorMessage;
  affiliation?: ErrorMessage;
  message?: ErrorMessage;
};

const checkValidEmailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email: string) {
  return checkValidEmailRegex.test(email) && email !== "" && email.length > 0;
}

const DEFAULT_STATE: FormData = {
  affiliation: "",
  email: "",
  message: "",
  name: "",
};

const ContactForm: FC<Props> = ({ setIsSendSuccess }) => {
  const [form, setForm] = useState<{ data: FormData; error?: FormError }>({
    data: DEFAULT_STATE,
  });

  const changeName = useCallback((name: string) => {
    setForm((prev) => ({ ...prev, data: { ...prev.data, name } }));
  }, []);

  const changeEmail = useCallback((email: string) => {
    setForm((prev) => ({ ...prev, data: { ...prev.data, email } }));
  }, []);

  const changeAffiliation = useCallback((affiliation: string) => {
    setForm((prev) => ({ ...prev, data: { ...prev.data, affiliation } }));
  }, []);

  const changeMessage = useCallback((message: string) => {
    setForm((prev) => ({ ...prev, data: { ...prev.data, message } }));
  }, []);

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const error: FormError = {};

      if (!form.data.name) {
        alert("Name is required");
        return;
      }

      if (!form.data.email) {
        alert("Email is required");
        return;
      }

      if (!validateEmail(form.data.email)) {
        alert("Email is invalid");
        return;
      }

      if (!form.data.affiliation) {
        alert("Affiliation is required");
        return;
      }

      if (!!Object.values(error).length) {
        setForm((prev) => ({ ...prev, error }));
        return;
      }

      const content = JSON.stringify(form);

      Promise.all([
        axios
          .post("https://api.scinapse.io/contact/feedback", {
            content,
            email: form.data.email,
          })
          .catch(console.error),
        axios
          .post(
            "https://plutolabs.freshdesk.com/api/v2/tickets",
            {
              email: form.data.email,
              subject: `[Feedback] ${content.slice(0, 100)}`,
              description: content,
              source: 9,
              status: 2,
              priority: 2,
            },
            {
              headers: { "Content-Type": "application/json" },
              auth: {
                username: process.env["NEXT_PUBLIC_FRESHDESK_API_KEY"]!,
                password: "X",
              },
            }
          )
          .catch(console.error),
      ])
        .then(() => setIsSendSuccess(true))
        .catch(console.error);
    },
    [form, setIsSendSuccess]
  );

  return (
    <div className="flex-1 tablet:min-w-[384px]">
      <form onSubmit={submit} className="flex flex-col gap-y-3">
        <Input
          label="Name"
          placeholder="Your name"
          error={form.error?.name}
          onChange={(e) => changeName(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="Your email"
          error={form.error?.email}
          onChange={(e) => changeEmail(e.target.value)}
        />
        <Input
          label="Affiliation"
          placeholder="Your affiliation"
          error={form.error?.affiliation}
          onChange={(e) => changeAffiliation(e.target.value)}
        />

        <label>
          <div className="mb-2 text-white">Message</div>
          <textarea
            placeholder="Message"
            rows={4}
            className="px-3 py-2.5 text-sm w-full rounded"
            onChange={(e) => changeMessage(e.target.value)}
          />
        </label>

        <button className="text-white p-4 bg-pluto-dark-blue rounded font-medium">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
