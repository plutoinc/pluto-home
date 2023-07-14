import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import ScrollToDiscover from "@/components/home/ScrollToDiscover";
import { FC } from "react";

interface Props {}

const AboutHero: FC<Props> = () => {
  return (
    <div className="bg-gradient-to-b from-pluto-deep-blue from-0% to-100% to-pluto-dark-blue text-[#F2F6FD]">
      <MaxWidth className="space-y-12 py-16 tablet:py-24">
        <div className="space-y-6">
          <div className="tracking-[2px] font-semibold opacity-50">
            ABOUT US
          </div>
          <div className="text-white font-extrabold text-3xl tablet:text-[50px] -tracking-[2px] leading-[1.2] max-w-[500px]">
            A researcher-oriented research ecosystem.
          </div>
          <div className="text-white text-lg font-medium max-w-[500px]">
            Discover new insights for better research and business.
            <br />
            We focus on in-depth research data and analytics from research
            papers.
          </div>
        </div>
        <ScrollToDiscover />
      </MaxWidth>
    </div>
  );
};

export default AboutHero;
