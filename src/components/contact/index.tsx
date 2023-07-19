import { FC, useState } from "react";
import PaddingDiv from "../common/PaddingDiv";
import ContactForm from "./ContactForm";
import HeaderSection from "./HeaderSection";

interface Props {}

const Contact: FC<Props> = () => {
  const [isSendSuccess, setIsSendSuccess] = useState(false);

  return (
    <div className="bg-gradient-to-b flex-1 text-gray-700 from-pluto-deep-blue to-blue-100">
      <div className="max-w-7xl mx-auto">
        <PaddingDiv className="tablet:flex tablet:gap-x-36 tablet:space-y-0 space-y-16 py-16 tablet:py-24">
          <div className="space-y-6 flex-1">
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
