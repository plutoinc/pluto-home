import Footer from "@/components/Footer";
import Contact from "@/components/common/contact";
import { FC } from "react";

interface Props {}

const ContactPage: FC<Props> = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
