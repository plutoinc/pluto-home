import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import MaxWidth from '@/components/common/MaxWidth';
import { FC } from 'react';

interface Props {}

const HomeSection3: FC<Props> = () => {
  return (
    <div className="bg-pluto-deep-blue text-white">
      <MaxWidth className="space-y-8 py-16 tablet:space-y-24 tablet:py-48">
        <ScrollMotionInView className="text-3xl font-extrabold tablet:text-5xl">Pluto Technology</ScrollMotionInView>
        <ScrollMotionInView className="break-words text-lg tablet:text-5xl">
          <span className="leading-[1.5] tablet:font-extrabold">
            Our tool extracts valuable information such as related topics, companies, and patent data from each paper.
          </span>{' '}
          <span className="leading-[1.5] text-white text-opacity-80">
            Through our database, we provide a more comprehensive research experience.
          </span>
        </ScrollMotionInView>
        <video src="/assets/home/video/pluto-technology.mp4" autoPlay muted loop />
      </MaxWidth>
    </div>
  );
};

export default HomeSection3;
