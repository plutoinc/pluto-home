import MaxWidth from "@/components/common/MaxWidth";
import { FC, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import * as lottieData from "../../../../public/lottie.json";
import ScrollToDiscover from "@/components/common/ScrollToDiscover";
import { useSequenceAnimation } from "@/components/hooks/useSequenceAnimation";

const HomeHero: FC = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollToDiscoverRef = useRef(null);

  const sequenceAnimate = useSequenceAnimation();

  useEffect(() => {
    sequenceAnimate([
      { node: titleRef },
      { node: descriptionRef },
      { node: scrollToDiscoverRef },
    ]);
  }, [sequenceAnimate]);

  return (
    <div className="h-[800px] relative flex tablet:items-center w-full overflow-hidden">
      <MaxWidth className="space-y-12 py-16 tablet:py-48 min-h-0">
        <h1
          className="break-words font-extrabold text-3xl tablet:text-5xl !leading-[1.3]"
          ref={titleRef}
        >
          Innovate
          <br />
          Innovations
        </h1>
        <div className="tablet:w-1/2 tablet:text-xl" ref={descriptionRef}>
          Discover new insights for better research and business.
          <br />
          We focus on in-depth research data and analytics from research papers.
        </div>
        <div ref={scrollToDiscoverRef}>
          <ScrollToDiscover />
        </div>
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
