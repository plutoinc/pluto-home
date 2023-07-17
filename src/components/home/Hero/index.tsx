import MaxWidth from "@/components/common/MaxWidth";
import { Motion } from "@/pages";
import { FC } from "react";
import ScrollToDiscover from "../ScrollToDiscover";
import Lottie from "lottie-react";
import * as lottieData from "../../../../public/lottie.json";

const HomeHero: FC = () => {
  return (
    <div className="py-16 tablet:py-48 h-[800px] flex tablet:items-center">
      <MaxWidth className="space-y-12">
        <Motion className="break-words font-extrabold text-3xl tablet:text-5xl !leading-[1.3]">
          Innovate
          <br />
          Innovations
        </Motion>
        <div className="tablet:w-1/2 tablet:text-xl">
          <Motion>
            Discover new insights for better research and business.
            <br />
            We focus on in-depth research data and analytics from research
            papers.
          </Motion>
        </div>
        <ScrollToDiscover />
      </MaxWidth>
      <div className="absolute -bottom-[40%] flex justify-center -left-1/2 -right-1/2 tablet:top-0 tablet:left-1/2 desktop:left-1/4">
        <Lottie
          animationData={lottieData}
          loop
          autoplay
          width={1000}
          height={1000}
          className="min-w-[600px]"
        />
      </div>
    </div>
  );
};

export default HomeHero;
