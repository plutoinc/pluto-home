import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection1: FC<Props> = () => {
  return (
    <PaddingDiv className="bg-pluto-deep-blue py-24 text-white text-3xl tablet:text-5xl">
      <MaxWidth>
        <div className="leading-[1.5]">
          A <b>Rise</b> in Scientific
          <br />
          Publications but
          <br />A <b>Decline</b> in
          <br /> Groundbreaking
          <br />
          Discoveries
        </div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection1;
