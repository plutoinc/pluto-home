import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import { FC } from "react";

interface Props {}

const HomeSection1: FC<Props> = () => {
  return (
    <div className="bg-pluto-deep-blue">
      <MaxWidth className="tablet:grid py-24 text-white tablet:py-48 text-3xl tablet:text-5xl tablet:grid-cols-[1fr_minmax(260px,42%)] items-center justify-between gap-y-16 tablet:gap-x-8">
        <ScrollMotionInView className="leading-[1.5]">
          A <b>Rise</b> in Scientific Publications but A <b>Decline</b> in
          Groundbreaking Discoveries
        </ScrollMotionInView>
        <div className="h-[345px] min-h-[268px] flex justify-center items-center">
          <Image
            width={420}
            height={443}
            src="https://framerusercontent.com/images/h1ikR93Tg2zccNVRe7qkR0dJs.png"
            alt="Graph image"
          />
        </div>
      </MaxWidth>
    </div>
  );
};

export default HomeSection1;
