import Image from "next/image";
import { FC } from "react";

export const SNU: FC = () => {
  return (
    <li className="w-16 flex-shrink-0 hover:scale-110 transition-transform">
      <Image
        width={1000}
        height={1000}
        alt="Seoul National University"
        src="https://framerusercontent.com/images/x10HwQaWNapJk62fGotqOqETbc.png?scale-down-to=1024"
      />
    </li>
  );
};

export const ICHMET2020: FC = () => {
  return (
    <li className="w-48 flex-shrink-0 hover:scale-110 transition-transform">
      <Image
        width={1000}
        height={1000}
        alt="ICHMET2020"
        src="https://framerusercontent.com/images/pvL841ZcndBgGgJDCJFLJdPuXyc.png?scale-down-to=1024"
      />
    </li>
  );
};

export const POSTECH: FC = () => {
  return (
    <li className="w-80 flex-shrink-0 hover:scale-110 transition-transform">
      <Image
        width={1000}
        height={1000}
        alt="POSTECH"
        src="https://framerusercontent.com/images/hNDuuk1gY4rkWSppPGRXd4db4A.png?scale-down-to=2048"
      />
    </li>
  );
};

export const KoreaUniversity: FC = () => {
  return (
    <li className="w-12 flex-shrink-0 hover:scale-110 transition-transform">
      <Image
        width={1000}
        height={1000}
        alt="Korea University"
        src="https://framerusercontent.com/images/ahiimwfMWTciQmXwGq1Cji2UUU.png?scale-down-to=4096"
      />
    </li>
  );
};

export const Posco: FC = () => {
  return (
    <li className="w-32 flex-shrink-0 hover:scale-110 transition-transform">
      <Image
        width={1000}
        height={1000}
        alt="Posco"
        src="https://framerusercontent.com/images/D0z2zH0r7ImbAaefLOnejehLxac.png?scale-down-to=1024"
      />
    </li>
  );
};

export const NatureConference: FC = () => {
  return (
    <li className="w-80 flex-shrink-0 hover:scale-110 transition-transform">
      <Image
        width={1000}
        height={1000}
        alt="Nature Conference"
        src="https://framerusercontent.com/images/rXpWJpRBKigTFmC0hRDshS8ZiXs.png?scale-down-to=1024"
      />
    </li>
  );
};
