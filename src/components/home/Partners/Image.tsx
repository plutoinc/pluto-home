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
        src="https://framerusercontent.com/images/x10HwQaWNapJk62fGotqOqETbc.png?scale-down-to=1024"
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
        src="https://framerusercontent.com/images/pvL841ZcndBgGgJDCJFLJdPuXyc.png?scale-down-to=1024"
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
        src="https://framerusercontent.com/images/hNDuuk1gY4rkWSppPGRXd4db4A.png?scale-down-to=2048"
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
        src="https://framerusercontent.com/images/ahiimwfMWTciQmXwGq1Cji2UUU.png?scale-down-to=4096"
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
        src="https://framerusercontent.com/images/D0z2zH0r7ImbAaefLOnejehLxac.png?scale-down-to=1024"
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
        src="https://framerusercontent.com/images/rXpWJpRBKigTFmC0hRDshS8ZiXs.png?scale-down-to=1024"
      />
    </ImageListWrapper>
  );
};
