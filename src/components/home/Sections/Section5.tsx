import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import Image from "next/image";
import { FC } from "react";
import ContactUsButton from "../ContactUsButton";
import OurPartners from "../PartnerImages";

const Cards: FC = () => {
  return (
    <div className="tablet:max-h-[500px] p-12 flex tablet:gap-y-0 gap-y-10 tablet:flex-row flex-col overflow-hidden items-center relative tablet:gap-x-8 bg-pluto-deep-blue rounded-3xl text-white tablet:items-center">
      <div className="tablet:w-2/5 space-y-8">
        <div className="text-3xl">Scinapse</div>
        <div className="font-extrabold text-3xl">
          Designed for
          <br />
          Researchers
        </div>
        <div className="text-lg">
          Not just a simple search engine. Intelligent data and quick access to
          state-of-the-art insights.
        </div>
        <ContactUsButton className="bg-white text-black" />
      </div>
      <div className="tablet:w-[556px] h-[389px] tablet:translate-x-1/4 relative overflow-hidden rounded-3xl bg-white w-full">
        <Image
          src="https://framerusercontent.com/images/jIoRwB41bckHO8BWLN0CJwa0.png"
          className="bg-no-repeat absolute inset-0 object-cover object-center w-full h-full"
          alt="Scinapse main page"
          width={556}
          height={389}
        />
      </div>
    </div>
  );
};

const HomeSection5: FC = () => {
  return (
    <PaddingDiv className="py-16 bg-white">
      <MaxWidth className="space-y-14">
        <div className="space-y-2">
          <div className="font-extrabold text-3xl">Our Partners</div>
          <div className="text-lg tablet:text-2xl">
            Companies and universities of all sizes are innovating their
            research with Pluto
          </div>
        </div>
        <OurPartners />
        <Cards />
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection5;
