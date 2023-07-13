import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection1: FC<Props> = () => {
  return (
    <PaddingDiv className="bg-pluto-deep-blue py-24 text-white text-3xl leading-[1.5]">
      <div>
        A <b>Rise</b> in Scientific
        <br />
        Publications but
        <br />A <b>Decline</b> in
        <br /> Groundbreaking
        <br />
        Discoveries
      </div>
      {/* Graph Image */}
    </PaddingDiv>
  );
};

export default HomeSection1;
