import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import MaxWidth from '@/components/common/MaxWidth';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { LOGOS } from './constant';

const ImageWrapper: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={twMerge('flex items-center justify-center', className)}>
      {children}
    </div>
  );
};

const LinkWrapper: FC<PropsWithChildren<LinkProps & { className?: string }>> = ({ children, className, ...props }) => {
  return (
    <Link
      target="_blank"
      {...props}
      className={twMerge(
        'flex h-20 w-full items-center justify-center rounded-lg bg-pluto-deep-blue text-white shadow-md shadow-gray-400 transition-transform duration-200 tablet:hover:scale-110',
        className
      )}
    >
      {children}
    </Link>
  );
};

const HomeSection2: FC = () => {
  return (
    <MaxWidth className="space-y-12 py-24 text-2xl tablet:py-48 tablet:text-3xl desktop:text-5xl">
      <ScrollMotionInView className="leading-[1.5]">
        <span className="tablet:font-bold tablet:text-[#3270CD]">
          We solve the challenge of overwhelming amounts of research papers
        </span>
        , difficulties in finding gaps and generating innovative ideas, and staying up-to-date with the latest
        developments{' '}
        <span className="tablet:font-bold tablet:text-[#3270CD]">
          by providing valuable insights through aggregating and analyzing academic papers
        </span>
        , instead of a mere search and listing service.
      </ScrollMotionInView>
      <ScrollMotionInView className="leading-[1.5]">
        Scientists have observed a deceleration in scientific progress
      </ScrollMotionInView>
      <ScrollMotionInView className="space-y-8 desktop:flex desktop:gap-x-8 desktop:space-y-0">
        {LOGOS.map((logo) => (
          <LinkWrapper key={logo.href} href={logo.href}>
            <ImageWrapper className={logo.className}>
              <Image src={logo.src} alt={logo.alt} width={1000} height={1000} />
            </ImageWrapper>
          </LinkWrapper>
        ))}
      </ScrollMotionInView>
    </MaxWidth>
  );
};

export default HomeSection2;
