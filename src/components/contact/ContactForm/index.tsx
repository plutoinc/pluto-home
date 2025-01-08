import axios from 'axios';
import { Dispatch, FC, FormEvent, SetStateAction, useCallback, useState } from 'react';
import Input from './Input';

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
  return checkValidEmailRegex.test(email) && email !== '' && email.length > 0;
}

const DEFAULT_STATE: FormData = {
  affiliation: '',
  email: '',
  message: '',
  name: '',
};

const ContactForm: FC<Props> = ({ setIsSendSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

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
        alert('Name is required');
        return;
      }

      if (!form.data.email) {
        alert('Email is required');
        return;
      }

      if (!validateEmail(form.data.email)) {
        alert('Email is invalid');
        return;
      }

      if (!form.data.affiliation) {
        alert('Affiliation is required');
        return;
      }

      if (!!Object.values(error).length) {
        setForm((prev) => ({ ...prev, error }));
        return;
      }

      setIsLoading(true);

      const content = JSON.stringify(form);

      Promise.all([
        axios
          .post('https://api.scinapse.io/contact/feedback', {
            content,
            email: form.data.email,
          })
          .catch(console.error),
        axios
          .post(
            'https://plutolabs.freshdesk.com/api/v2/tickets',
            {
              email: form.data.email,
              subject: `[Feedback] ${content.slice(0, 100)}`,
              description: content,
              source: 9,
              status: 2,
              priority: 2,
            },
            {
              headers: { 'Content-Type': 'application/json' },
              auth: {
                username: process.env['NEXT_PUBLIC_FRESHDESK_API_KEY']!,
                password: 'X',
              },
            }
          )
          .catch(console.error),
      ])
        .then(() => {
          setIsSendSuccess(true);
          setForm({ data: DEFAULT_STATE, error: undefined });
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
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
          value={form.data.name}
          onChange={(e) => changeName(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="Your email"
          value={form.data.email}
          error={form.error?.email}
          onChange={(e) => changeEmail(e.target.value)}
        />
        <Input
          label="Affiliation"
          placeholder="Your affiliation"
          value={form.data.affiliation}
          error={form.error?.affiliation}
          onChange={(e) => changeAffiliation(e.target.value)}
        />

        <label>
          <div className="mb-2 text-white">Message</div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded px-3 py-2.5 text-sm"
            value={form.data.message}
            onChange={(e) => changeMessage(e.target.value)}
          />
        </label>
        <button
          className="flex items-center justify-center gap-x-2 rounded bg-pluto-dark-blue p-4 font-semibold text-white disabled:bg-opacity-80"
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

const Spinner: FC = () => {
  return (
    <svg
      className="animate-spin text-gray-300"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="text-pluto-dark-blue"
      ></path>
    </svg>
  );
};
