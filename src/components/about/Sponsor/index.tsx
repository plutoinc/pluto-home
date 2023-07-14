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

const SponsorList: FC = () => {
  return (
    <ul className="flex items-center gap-x-16 p-2.5 animate-loop">
      <HGI />
      <PoscoCapital />
      <JBFinancialGroup />
      <SeoulIP />
      <BeHighInvestment />
      <Hashed />
      <BluePoint />
    </ul>
  );
};

const Sponsor: FC = () => {
  return (
    <div className="bg-white">
      <MaxWidth className="space-y-8 py-16">
        <div className="text-3xl font-bold tablet:font-extrabold">
          Backed by
        </div>
        <div className="flex mx-auto w-full overflow-x-hidden gap-x-16">
          <SponsorList />
          <SponsorList />
        </div>
      </MaxWidth>
    </div>
  );
};

export default Sponsor;
