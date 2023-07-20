import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import MaxWidth from '@/components/common/MaxWidth';
import Image from 'next/image';
import { FC } from 'react';

interface Props {}

const HomeSection1: FC<Props> = () => {
  return (
    <div className="bg-pluto-deep-blue">
      <MaxWidth className="items-center justify-between gap-y-16 py-24 text-3xl text-white tablet:grid tablet:grid-cols-[1fr_minmax(260px,42%)] tablet:gap-x-8 tablet:py-48 tablet:text-5xl">
        <ScrollMotionInView className="leading-[1.5]">
          A <b>Rise</b> in Scientific Publications but A <b>Decline</b> in Groundbreaking Discoveries
        </ScrollMotionInView>
        <div className="flex h-[345px] min-h-[268px] items-center justify-center">
          <Image width={420} height={443} src="/assets/home/graph.webp" alt="Graph image" />
        </div>
      </MaxWidth>
    </div>
  );
};

export default HomeSection1;
