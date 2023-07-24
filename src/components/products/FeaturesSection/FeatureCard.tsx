import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import Image from 'next/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  imageSrc: string;
  description: string;
  direction: 'left' | 'right';
}

const FeatureCard: FC<Props> = ({ title, imageSrc, description, direction }) => {
  return (
    <ScrollMotionInView
      viewport={{ once: true, margin: '-200px' }}
      className={twMerge(
        'space-y-8 rounded-3xl bg-[#f4f9ff] p-8 tablet:p-12 desktop:flex desktop:items-center desktop:gap-x-16 desktop:space-y-0 desktop:p-14',
        direction === 'right' && 'flex-row-reverse'
      )}
    >
      <div className="w-full rounded-2xl bg-white p-4 shadow-md desktop:flex-1">
        <Image src={imageSrc} alt={title} width={1000} height={1000} />
      </div>

      <div className="space-y-4 desktop:flex-1">
        <div className="text-2xl font-bold tablet:text-3xl">{title}</div>
        <div style={{ lineHeight: 1.7 }} className="leading-10 tablet:text-xl">
          {description}
        </div>
      </div>
    </ScrollMotionInView>
  );
};

export default FeatureCard;
