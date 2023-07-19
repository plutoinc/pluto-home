import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import MaxWidth from '@/components/common/MaxWidth';
import { FC } from 'react';
import { BeHighInvestment, BluePoint, Hashed, HGI, JBFinancialGroup, PoscoCapital, SeoulIP } from './Image';

const SponsorList: FC = () => {
  return (
    <ul className="flex min-h-0 animate-loop items-center gap-x-16 px-2.5">
      <HGI />
      <PoscoCapital />
      <JBFinancialGroup />
      <SeoulIP />
      <BeHighInvestment />
      <Hashed />
      <BluePoint />
    </ul>
  );
};

const Sponsor: FC = () => {
  return (
    <div className="bg-white">
      <MaxWidth className="space-y-8 py-[72px] tablet:space-y-16 tablet:py-24">
        <ScrollMotionInView className="text-3xl font-semibold tablet:font-extrabold">Backed by</ScrollMotionInView>
        <ScrollMotionInView
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
          }}
          className="mx-auto flex h-full max-h-24 w-full gap-x-16 overflow-hidden"
        >
          <SponsorList />
          <SponsorList />
        </ScrollMotionInView>
      </MaxWidth>
    </div>
  );
};

export default Sponsor;
