import MaxWidth from "@/components/common/MaxWidth";
import ScrollToDiscover from "@/components/common/ScrollToDiscover";
import { useSequenceAnimation } from "@/components/hooks/useSequenceAnimation";
import { FC, useEffect, useRef } from "react";

interface Props {}

const AboutHero: FC<Props> = () => {
  const animate = useSequenceAnimation();

  const titleRef = useRef(null);
  const aboutUsRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollToDiscoverRef = useRef(null);

  useEffect(() => {
    animate([
      { ref: titleRef },
      { ref: descriptionRef, withNav: true, option: { at: 0.5 } },
      { ref: aboutUsRef, withNav: true, option: { at: 0.5 } },
      { ref: scrollToDiscoverRef },
    ]);
  }, [animate]);

  console.log(descriptionRef);

  return (
    <div className="bg-gradient-to-b from-pluto-deep-blue from-0% to-100% to-pluto-dark-blue text-[#F2F6FD]">
      <MaxWidth className="space-y-12 py-16 tablet:py-24">
        <div className="space-y-6">
          <div
            className="tracking-[2px] font-semibold opacity-50"
            ref={aboutUsRef}
          >
            ABOUT US
          </div>
          <div
            className="text-white font-extrabold text-3xl tablet:text-[50px] desktop:-tracking-[2px] leading-[1.2] max-w-[500px]"
            ref={titleRef}
          >
            A researcher-oriented research ecosystem.
          </div>
          <div
            className="text-white text-lg font-medium max-w-[500px]"
            ref={descriptionRef}
          >
            Discover new insights for better research and business.
            <br />
            We focus on in-depth research data and analytics from research
            papers.
          </div>
        </div>
        <div ref={scrollToDiscoverRef}>
          <ScrollToDiscover />
        </div>
      </MaxWidth>
    </div>
  );
};

export default AboutHero;
