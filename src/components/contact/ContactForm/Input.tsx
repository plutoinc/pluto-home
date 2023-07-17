import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: FC<Props> = ({ label, error, ...props }) => {
  return (
    <label>
      <div className="text-white mb-2">{label}</div>
      <input
        {...props}
        autoComplete="off"
        className={twMerge("py-2.5 px-3 text-sm w-full rounded border")}
        type="text"
      />
    </label>
  );
};

export default Input;
