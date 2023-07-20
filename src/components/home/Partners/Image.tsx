import Image from 'next/image';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const ImageListWrapper: FC<PropsWithChildren<HTMLAttributes<HTMLLIElement>>> = ({ children, className }) => {
  return <li className={twMerge(className, 'flex-shrink-0 transition-transform hover:scale-110')}>{children}</li>;
};

export const SNU: FC = () => {
  return (
    <ImageListWrapper className="w-16">
      <Image width={1000} height={1000} alt="Seoul National University" src="/assets/partners/snu.webp" />
    </ImageListWrapper>
  );
};

export const ICHMET2020: FC = () => {
  return (
    <ImageListWrapper className="w-48">
      <Image width={1000} height={1000} alt="ICHMET2020" src="/assets/partners/ichmet2020.webp" />
    </ImageListWrapper>
  );
};

export const POSTECH: FC = () => {
  return (
    <ImageListWrapper className="w-80">
      <Image width={1000} height={1000} alt="POSTECH" src="/assets/partners/postech.webp" />
    </ImageListWrapper>
  );
};

export const KoreaUniversity: FC = () => {
  return (
    <ImageListWrapper className="w-12">
      <Image width={1000} height={1000} alt="Korea University" src="/assets/partners/korea-univ.webp" />
    </ImageListWrapper>
  );
};

export const Posco: FC = () => {
  return (
    <ImageListWrapper className="w-32">
      <Image width={1000} height={1000} alt="Posco" src="/assets/partners/posco.webp" />
    </ImageListWrapper>
  );
};

export const NatureConference: FC = () => {
  return (
    <ImageListWrapper className="w-80">
      <Image width={1000} height={1000} alt="Nature Conference" src="/assets/partners/nature-conference.webp" />
    </ImageListWrapper>
  );
};
