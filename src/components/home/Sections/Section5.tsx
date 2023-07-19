import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import { FC } from "react";
import ContactUsButton from "../ContactUsButton";
import OurPartners from "../Partners";
import ScinapseIcon from "@/components/icons/ScinapseIcon";
import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import scinapseHomeImageSrc from "@/assets/home/scinapse-home.webp";

const Cards: FC = () => {
  return (
    <ScrollMotionInView className="tablet:h-[500px] h-[850px] p-12 flex tablet:gap-y-0 gap-y-10 tablet:flex-row flex-col overflow-hidden items-center relative tablet:gap-x-8 bg-pluto-deep-blue rounded-3xl text-white tablet:items-center">
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
        <ContactUsButton className="bg-white text-black" />
      </div>
      <div className="tablet:w-[556px] h-[389px] tablet:translate-x-1/4 tablet:relative overflow-hidden rounded-3xl bg-white w-full absolute bottom-0 rounded-t-none tablet:rounded-t-3xl border tablet:border-none">
        <Image
          src={scinapseHomeImageSrc}
          className="bg-no-repeat absolute object-cover object-center h-full inset-0"
          alt="Scinapse main page"
          width={1000}
          height={1000}
        />
      </div>
    </ScrollMotionInView>
  );
};

const HomeSection5: FC = () => {
  return (
    <div className="bg-white">
      <MaxWidth className="space-y-14 py-16">
        <ScrollMotionInView className="space-y-14">
          <div className="space-y-2">
            <div className="font-extrabold text-3xl">Our Partners</div>
            <div className="text-lg tablet:text-2xl">
              Companies and universities of all sizes are innovating their
              research with Pluto
            </div>
          </div>
          <OurPartners />
        </ScrollMotionInView>
        <Cards />
      </MaxWidth>
    </div>
  );
};

export default HomeSection5;
