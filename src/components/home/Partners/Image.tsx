import Image from "next/image";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const ImageListWrapper: FC<
  PropsWithChildren<HTMLAttributes<HTMLLIElement>>
> = ({ children, className }) => {
  return (
    <li
      className={twMerge(
        className,
        "flex-shrink-0 hover:scale-110 transition-transform"
      )}
    >
      {children}
    </li>
  );
};

export const SNU: FC = () => {
  return (
    <ImageListWrapper className="w-16">
      <Image
        width={1000}
        height={1000}
        alt="Seoul National University"
        src="/partners/snu.webp"
      />
    </ImageListWrapper>
  );
};

export const ICHMET2020: FC = () => {
  return (
    <ImageListWrapper className="w-48">
      <Image
        width={1000}
        height={1000}
        alt="ICHMET2020"
        src="/partners/ichmet2020.webp"
      />
    </ImageListWrapper>
  );
};

export const POSTECH: FC = () => {
  return (
    <ImageListWrapper className="w-80">
      <Image
        width={1000}
        height={1000}
        alt="POSTECH"
        src="/partners/postech.webp"
      />
    </ImageListWrapper>
  );
};

export const KoreaUniversity: FC = () => {
  return (
    <ImageListWrapper className="w-12">
      <Image
        width={1000}
        height={1000}
        alt="Korea University"
        src="/partners/korea-univ.webp"
      />
    </ImageListWrapper>
  );
};

export const Posco: FC = () => {
  return (
    <ImageListWrapper className="w-32">
      <Image
        width={1000}
        height={1000}
        alt="Posco"
        src="/partners/posco.webp"
      />
    </ImageListWrapper>
  );
};

export const NatureConference: FC = () => {
  return (
    <ImageListWrapper className="w-80">
      <Image
        width={1000}
        height={1000}
        alt="Nature Conference"
        src="/partners/nature-conference.webp"
      />
    </ImageListWrapper>
  );
};
