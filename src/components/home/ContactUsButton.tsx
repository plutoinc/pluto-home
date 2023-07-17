import { CONTACT_PATH } from "@/routes";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const ContactUsButton: FC<Props> = ({ className }) => {
  return (
    <Link
      href={CONTACT_PATH}
      className={twMerge(
        "bg-pluto-dark-blue justify-center text-white font-bold w-full rounded-lg shadow px-4 text-sm tablet:w-fit h-10 flex items-center",
        className
      )}
    >
      <div>Contact us</div>
    </Link>
  );
};

export default ContactUsButton;
