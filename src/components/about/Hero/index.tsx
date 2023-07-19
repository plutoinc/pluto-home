import { DEFAULT_DURATION } from '@/components/common/Animation/constant';
import MaxWidth from '@/components/common/MaxWidth';
import ScrollToDiscover from '@/components/common/ScrollToDiscover';
import { useSequenceAnimation } from '@/components/hooks/useSequenceAnimation';
import { FC, useEffect, useRef } from 'react';

interface Props {}

const AboutHero: FC<Props> = () => {
  const sequenceAnimate = useSequenceAnimation();

  const titleRef = useRef(null);
  const aboutUsRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollToDiscoverRef = useRef(null);

  useEffect(() => {
    sequenceAnimate([
      { ref: titleRef },
      { ref: descriptionRef, withNav: true, option: { at: DEFAULT_DURATION } },
      { ref: aboutUsRef, withNav: true, option: { at: DEFAULT_DURATION } },
      { ref: scrollToDiscoverRef },
    ]);
  }, [sequenceAnimate]);

  return (
    <div className="bg-gradient-to-b from-pluto-deep-blue from-0% to-pluto-dark-blue to-100% text-[#F2F6FD]">
      <MaxWidth className="space-y-12 py-16 tablet:py-24">
        <div className="space-y-6">
          <div className="font-semibold tracking-[2px] opacity-50" ref={aboutUsRef}>
            ABOUT US
          </div>
          <div
            className="max-w-[500px] text-3xl font-extrabold leading-[1.2] text-white tablet:text-[50px] desktop:-tracking-[2px]"
            ref={titleRef}
          >
            A researcher-oriented research ecosystem.
          </div>
          <div className="max-w-[500px] text-lg font-medium text-white" ref={descriptionRef}>
            Discover new insights for better research and business.
            <br />
            We focus on in-depth research data and analytics from research papers.
          </div>
        </div>
        <div ref={scrollToDiscoverRef}>
          <ScrollToDiscover className="text-blue-400" />
        </div>
      </MaxWidth>
    </div>
  );
};

export default AboutHero;
