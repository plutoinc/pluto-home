import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import ScrollToDiscover from "../../common/ScrollToDiscover";

const HomeHero: FC = () => {
  return (
    <PaddingDiv className="py-16 tablet:py-48 h-[800px] flex tablet:items-center">
      <MaxWidth className="space-y-12">
        <div className="break-words font-extrabold text-3xl tablet:text-5xl">
          <div>Innovate</div>
          <div>Innovations</div>
        </div>
        <div className="tablet:w-1/2 tablet:text-xl">
          Discover new insights for better research and business.
          <br />
          We focus on in-depth research data and analytics from research papers.
        </div>
        <ScrollToDiscover />
      </MaxWidth>
      {/* Lottie image later */}
    </PaddingDiv>
  );
};

export default HomeHero;
