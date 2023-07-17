import MaxWidth from "@/components/common/MaxWidth";
import { FC } from "react";
import Lottie from "lottie-react";
import * as lottieData from "../../../../public/lottie.json";
import ScrollToDiscover from "@/components/common/ScrollToDiscover";

const HomeHero: FC = () => {
  return (
    <div className="h-[800px] relative flex tablet:items-center w-full overflow-hidden">
      <MaxWidth className="space-y-12 py-16 tablet:py-48 min-h-0">
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
