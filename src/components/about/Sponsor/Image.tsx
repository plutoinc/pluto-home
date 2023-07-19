import Image from "next/image";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const ImageListWrapper: FC<
  PropsWithChildren<HTMLAttributes<HTMLLIElement>>
> = ({ children, className }) => {
  return <li className={twMerge(className, "flex-shrink-0")}>{children}</li>;
};

export const HGI: FC = () => {
  return (
    <ImageListWrapper className="w-48">
      <Image
        width={1000}
        height={1000}
        alt="HGI"
        src="https://framerusercontent.com/images/abePkh5RY6DYdcafEQif1Jr9M.png"
      />
    </ImageListWrapper>
  );
};

export const PoscoCapital: FC = () => {
  return (
    <ImageListWrapper className="w-36">
      <Image
        width={1000}
        height={1000}
        alt="Posco capital"
        src="https://framerusercontent.com/images/LcOTRSGdfmU3Pv4081YNYZgTpI.png"
      />
    </ImageListWrapper>
  );
};

export const JBFinancialGroup: FC = () => {
  return (
    <ImageListWrapper className="w-[439px]">
      <Image
        width={1000}
        height={1000}
        alt="JB Financial Group"
        src="https://framerusercontent.com/images/ADPvVMmqS9jpWAlWKdWxlYRPDQ.png"
      />
    </ImageListWrapper>
  );
};

export const SeoulIP: FC = () => {
  return (
    <ImageListWrapper className="w-64">
      <Image
        width={1000}
        height={1000}
        alt="SEOUL IP"
        src="https://framerusercontent.com/images/kVxuAhJG49OK5HuFGn64kP7E8Rs.png"
      />
    </ImageListWrapper>
  );
};

export const BeHighInvestment: FC = () => {
  return (
    <ImageListWrapper className="w-[426px]">
      <Image
        width={1000}
        height={1000}
        alt="BEHIGH INVESTMENT"
        src="https://framerusercontent.com/images/y4Gfo0hrIh02ut1Z6oWlfLhhmm0.png"
      />
    </ImageListWrapper>
  );
};

export const Hashed: FC = () => {
  return (
    <ImageListWrapper className="w-48">
      <Image
        width={1000}
        height={1000}
        alt="#Hashed"
        src="https://framerusercontent.com/images/abePkh5RY6DYdcafEQif1Jr9M.png"
      />
    </ImageListWrapper>
  );
};

export const BluePoint: FC = () => {
  return (
    <ImageListWrapper className="w-[233px]">
      <Image
        width={1000}
        height={1000}
        alt="#Hashed"
        src="https://framerusercontent.com/images/EWCClBvfljEHsagrfaUtGhgfhGc.png"
      />
    </ImageListWrapper>
  );
};
