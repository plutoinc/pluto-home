import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import MaxWidth from '@/components/common/MaxWidth';
import { FC, useEffect, useRef } from 'react';
import ContactUsLink from '@/components/common/ContactUsLink';

interface Props {}

const HomeSection6: FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="bg-[#F0F6FF]">
      <MaxWidth className="space-y-8 py-16">
        <ScrollMotionInView className="text-3xl font-extrabold text-pluto-dark-blue tablet:text-4xl desktop:text-5xl">
          We offer custom research analytics services
        </ScrollMotionInView>
        <ScrollMotionInView className="text-lg text-pluto-deep-blue tablet:text-2xl">
          Based on our database, we provide premium reports:
          <ul className="pl-6">
            <li className="list-disc leading-[2]">
              Research benchmark and consultation services for the research institutions
            </li>
            <li className="list-disc leading-[2]">
              New technology trends and consultation services for the tech-based companies
            </li>
          </ul>
        </ScrollMotionInView>
        <ContactUsLink className="inline-block rounded-lg bg-pluto-dark-blue px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-gray-400" />
        <div className="rounded-2xl bg-white p-4">
          <video src="/assets/home/renewable_energy.mov" autoPlay muted loop ref={videoRef} />
        </div>
      </MaxWidth>
    </div>
  );
};

export default HomeSection6;
