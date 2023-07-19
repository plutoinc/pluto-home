import { CONTACT_PATH } from "@/routes";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
}

const ContactUsLink: FC<Props> = ({ className }) => {
  return (
    <Link href={CONTACT_PATH} className={className}>
      <div>Contact us</div>
    </Link>
  );
};

export default ContactUsLink;
