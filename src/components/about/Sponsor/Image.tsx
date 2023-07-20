import Image from 'next/image';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const ImageListWrapper: FC<PropsWithChildren<HTMLAttributes<HTMLLIElement>>> = ({ children, className }) => {
  return <li className={twMerge(className, 'flex-shrink-0')}>{children}</li>;
};

export const HGI: FC = () => {
  return (
    <ImageListWrapper className="w-48">
      <Image width={1000} height={1000} alt="HGI" src="/assets/sponsors/hgi.webp" />
    </ImageListWrapper>
  );
};

export const PoscoCapital: FC = () => {
  return (
    <ImageListWrapper className="w-36">
      <Image width={1000} height={1000} alt="Posco capital" src="/assets/sponsors/posco-capital.webp" />
    </ImageListWrapper>
  );
};

export const JBFinancialGroup: FC = () => {
  return (
    <ImageListWrapper className="w-[439px]">
      <Image width={1000} height={1000} alt="JB Financial Group" src="/assets/sponsors/jb-financial.webp" />
    </ImageListWrapper>
  );
};

export const SeoulIP: FC = () => {
  return (
    <ImageListWrapper className="w-64">
      <Image width={1000} height={1000} alt="SEOUL IP" src="/assets/sponsors/seoul-ip.webp" />
    </ImageListWrapper>
  );
};

export const BeHighInvestment: FC = () => {
  return (
    <ImageListWrapper className="w-[426px]">
      <Image width={1000} height={1000} alt="BEHIGH INVESTMENT" src="/assets/sponsors/behigh-investment.webp" />
    </ImageListWrapper>
  );
};

export const Hashed: FC = () => {
  return (
    <ImageListWrapper className="w-48">
      <Image width={1000} height={1000} alt="#Hashed" src="/assets/sponsors/hashed.webp" />
    </ImageListWrapper>
  );
};

export const BluePoint: FC = () => {
  return (
    <ImageListWrapper className="w-[233px]">
      <Image width={1000} height={1000} alt="Blue point" src="/assets/sponsors/bluepoint.webp" />
    </ImageListWrapper>
  );
};
