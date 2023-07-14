import { FC } from "react";
import {
  ICHMET2020,
  KoreaUniversity,
  NatureConference,
  POSTECH,
  Posco,
  SNU,
} from "./Image";

interface Props {}

const OurPartners: FC<Props> = () => {
  // Loop later

  return (
    <ul className="flex items-center gap-x-16 p-2.5 overflow-x-hidden h-24">
      <SNU />
      <ICHMET2020 />
      <POSTECH />
      <KoreaUniversity />
      <Posco />
      <NatureConference />
    </ul>
  );
};

export default OurPartners;
