import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import Image from "next/image";
import { FC } from "react";

interface Props {}

const HomeSection1: FC<Props> = () => {
  return (
    <PaddingDiv className="bg-pluto-deep-blue py-24 text-white text-3xl tablet:text-5xl">
      <MaxWidth className="tablet:grid tablet:grid-cols-[1fr_minmax(260px,42%)] items-center justify-between gap-y-16 tablet:gap-x-8">
        <div className="leading-[1.5]">
          A <b>Rise</b> in Scientific Publications but A <b>Decline</b> in
          Groundbreaking Discoveries
        </div>
        <div className="h-[345px] min-h-[268px] flex justify-center items-center">
          <Image
            width={420}
            height={443}
            src="https://framerusercontent.com/images/h1ikR93Tg2zccNVRe7qkR0dJs.png"
            alt="Graph image"
          />
        </div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection1;
