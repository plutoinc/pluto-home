import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import {
  BeHighInvestment,
  BluePoint,
  HGI,
  Hashed,
  JBFinancialGroup,
  PoscoCapital,
  SeoulIP,
} from "./Image";

interface Props {}

const Sponsor: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 bg-white">
      <MaxWidth className="space-y-8">
        <div className="text-3xl font-bold tablet:font-extrabold">
          Backed by
        </div>
        <ul className="flex items-center overflow-x-hidden gap-x-16 p-2.5">
          <HGI />
          <PoscoCapital />
          <JBFinancialGroup />
          <SeoulIP />
          <BeHighInvestment />
          <Hashed />
          <BluePoint />
        </ul>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default Sponsor;
