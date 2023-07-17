import { FC } from "react";
import HeaderSection from "./HeaderSection";
import ContactForm from "./ContactForm";
import PaddingDiv from "../PaddingDiv";

interface Props {}

const Contact: FC<Props> = () => {
  return (
    <div className="bg-gradient-to-b from-pluto-deep-blue to-blue-100">
      <div className="max-w-7xl mx-auto">
        <PaddingDiv className="tablet:flex tablet:gap-x-16 tablet:space-y-0 space-y-16 py-16 tablet:py-24">
          <HeaderSection />
          <ContactForm />
        </PaddingDiv>
      </div>
    </div>
  );
};

export default Contact;
