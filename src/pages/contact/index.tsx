import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Contact from "@/components/contact";
import { FC } from "react";

interface Props {}

const ContactPage: FC<Props> = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
