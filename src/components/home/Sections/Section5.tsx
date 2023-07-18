import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import { FC } from "react";
import ContactUsLink from "../ContactUsButton";
import OurPartners from "../Partners";
import ScinapseIcon from "@/components/icons/ScinapseIcon";

const Cards: FC = () => {
  return (
    <div className="tablet:h-[500px] h-[850px] p-12 flex tablet:gap-y-0 gap-y-10 tablet:flex-row flex-col overflow-hidden items-center relative tablet:gap-x-8 bg-pluto-deep-blue rounded-3xl text-white tablet:items-center">
      <div className="tablet:w-2/5 space-y-8">
        <ScinapseIcon className="w-36" />
        <div className="font-extrabold text-3xl">
          Designed for
          <br />
          Researchers
        </div>
        <div className="text-lg">
          Not just a simple search engine. Intelligent data and quick access to
          state-of-the-art insights.
        </div>

        <ContactUsLink className="bg-white inline-block px-4 py-2.5 text-sm rounded-lg font-bold text-pluto-deep-blue shadow-md" />
      </div>

      <div className="tablet:w-[556px] h-[389px] tablet:translate-x-1/4 tablet:relative overflow-hidden rounded-3xl bg-white w-full absolute bottom-0 rounded-t-none tablet:rounded-t-3xl border tablet:border-none">
        <Image
          src="https://framerusercontent.com/images/jIoRwB41bckHO8BWLN0CJwa0.png"
          className="bg-no-repeat absolute object-cover object-center h-full inset-0"
          alt="Scinapse main page"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

const HomeSection5: FC = () => {
  return (
    <div className="bg-white">
      <MaxWidth className="space-y-14 py-16">
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
    </div>
  );
};

export default HomeSection5;
