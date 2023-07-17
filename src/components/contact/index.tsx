import { FC, useState } from "react";
import HeaderSection from "./HeaderSection";
import ContactForm from "./ContactForm";
import PaddingDiv from "../common/PaddingDiv";

interface Props {}

const Contact: FC<Props> = () => {
  const [isSendSuccess, setIsSendSuccess] = useState(false);

  return (
    <div className="bg-gradient-to-b flex-1 from-pluto-deep-blue to-blue-100">
      <div className="max-w-7xl mx-auto">
        <PaddingDiv className="tablet:flex tablet:gap-x-16 tablet:space-y-0 space-y-16 py-16 tablet:py-24">
          <div className="space-y-6">
            <HeaderSection />

            {isSendSuccess && (
              <div className="p-4 bg-pluto-deep-blue rounded-lg text-center text-white">
                Thank you for contacting us!
              </div>
            )}
          </div>
          <ContactForm setIsSendSuccess={setIsSendSuccess} />
        </PaddingDiv>
      </div>
    </div>
  );
};

export default Contact;
