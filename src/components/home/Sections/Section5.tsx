import MaxWidth from '@/components/common/MaxWidth';
import Image from 'next/image';
import { FC } from 'react';
import OurPartners from '../Partners';
import ScinapseIcon from '@/components/icons/ScinapseIcon';
import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import ContactUsLink from '@/components/common/ContactUsLink';

const Cards: FC = () => {
  return (
    <ScrollMotionInView className="relative flex h-[850px] flex-col items-center gap-y-10 overflow-hidden rounded-3xl bg-pluto-deep-blue p-12 text-white tablet:h-[500px] tablet:flex-row tablet:items-center tablet:gap-x-8 tablet:gap-y-0">
      <div className="space-y-8 tablet:w-2/5">
        <ScinapseIcon className="w-36" />
        <div className="text-3xl font-extrabold">
          Designed for
          <br />
          Researchers
        </div>
        <div className="text-lg">
          Not just a simple search engine. Intelligent data and quick access to state-of-the-art insights.
        </div>

        <ContactUsLink className="inline-block rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-pluto-deep-blue shadow-md" />
      </div>

      <div className="absolute bottom-0 h-[389px] w-full overflow-hidden rounded-3xl rounded-t-none border bg-white tablet:relative tablet:w-[556px] tablet:translate-x-1/4 tablet:rounded-t-3xl tablet:border-none">
        <Image
          src="/assets/home/scinapse-home.webp"
          className="absolute inset-0 h-full bg-no-repeat object-cover object-center"
          alt="Scinapse main page"
          width={1000}
          height={1000}
        />
      </div>
    </ScrollMotionInView>
  );
};

const HomeSection5: FC = () => {
  return (
    <div className="bg-white">
      <MaxWidth className="space-y-14 py-16">
        <ScrollMotionInView className="space-y-14">
          <div className="space-y-2">
            <div className="text-3xl font-extrabold">Trusted by</div>
            <div className="text-lg tablet:text-2xl">
              Companies and universities of all sizes are innovating their research with Pluto
            </div>
          </div>
          <OurPartners />
        </ScrollMotionInView>
        <Cards />
      </MaxWidth>
    </div>
  );
};

export default HomeSection5;
