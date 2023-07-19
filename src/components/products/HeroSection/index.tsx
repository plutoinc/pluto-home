import PaddingDiv from '@/components/common/PaddingDiv';
import ScrollToDiscover from '@/components/common/ScrollToDiscover';
import { useSequenceAnimation } from '@/components/hooks/useSequenceAnimation';
import ScinapseIcon from '@/components/icons/ScinapseIcon';
import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {}

const HeroSection: FC<Props> = () => {
  const sequenceAnimate = useSequenceAnimation();

  const scinapseRef = useRef(null);
  const linkRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    sequenceAnimate([{ ref: scinapseRef }, { ref: linkRef, withNav: true }, { ref: scrollRef }]);
  }, [sequenceAnimate]);

  return (
    <div className="mx-auto bg-gradient-to-b from-pluto-deep-blue to-pluto-dark-blue">
      <PaddingDiv className={twMerge('mx-auto h-[600px] max-w-7xl space-y-12', 'tablet:h-[800px]')}>
        <div ref={scinapseRef} className={twMerge('space-y-8 pt-28', 'tablet:w-[500px] tablet:pt-44')}>
          <ScinapseIcon className={twMerge('w-60 tablet:w-80')} />
          <div className={twMerge('text-white', 'tablet:text-2xl')}>
            We present a whole new perspective on research discovery services. Intelligent data and quick access to
            state-of-the-art insights
          </div>
        </div>

        <Link
          ref={linkRef}
          className={twMerge(
            'block w-full rounded-lg bg-white px-10 py-4 text-center text-lg font-bold text-pluto-deep-blue shadow-xl tablet:text-xl',
            'tablet:inline-block tablet:w-fit'
          )}
          target="_blank"
          href="https://www.scinapse.io/"
        >
          Try Now
        </Link>
        <div ref={scrollRef}>
          <ScrollToDiscover className="text-blue-400" />
        </div>
      </PaddingDiv>
    </div>
  );
};

export default HeroSection;
