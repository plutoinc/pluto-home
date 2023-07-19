import { FC } from "react";
import {
  ICHMET2020,
  KoreaUniversity,
  NatureConference,
  POSTECH,
  Posco,
  SNU,
} from "./Image";

const Partner: FC = () => {
  return (
    <ul className="flex items-center gap-x-16 p-2.5 h-24 animate-loop">
      <SNU />
      <ICHMET2020 />
      <POSTECH />
      <KoreaUniversity />
      <Posco />
      <NatureConference />
    </ul>
  );
};

const OurPartners: FC = () => {
  return (
    <div
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
      className="relative flex overflow-x-hidden gap-x-16"
    >
      <Partner />
      <Partner />
    </div>
  );
};

export default OurPartners;
