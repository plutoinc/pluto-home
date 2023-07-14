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
    <ul className="flex items-center gap-x-16 px-2.5 animate-loop min-h-0">
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
      <MaxWidth className="py-[72px] tablet:py-24 space-y-8 tablet:space-y-16">
        <div className="text-3xl font-semibold tablet:font-extrabold">
          Backed by
        </div>
        <div className="flex mx-auto w-full overflow-hidden gap-x-16 max-h-24 h-full">
          <SponsorList />
          <SponsorList />
        </div>
      </MaxWidth>
    </div>
  );
};

export default Sponsor;
