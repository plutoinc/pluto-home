import { FC, FormEvent, useCallback, useState } from "react";
import Input from "./Input";

interface Props {}

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

const DEFAULT_STATE: FormData = {
  affiliation: "",
  email: "",
  message: "",
  name: "",
};

const ContactForm: FC<Props> = () => {
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
        error.name = "Name is required";
      }

      if (!form.data.email) {
        error.email = "Email is required";
      }

      if (!form.data.affiliation) {
        error.affiliation = "Affiliation is required";
      }

      if (!!Object.values(error).length) {
        setForm((prev) => ({ ...prev, error }));
        return;
      }

      setForm({ data: DEFAULT_STATE });
    },
    [form]
  );

  return (
    <div className="flex-1 min-w-[384px]">
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
            className="p-3 text-sm w-full rounded"
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
