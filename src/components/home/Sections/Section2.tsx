import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection2: FC<Props> = () => {
  return (
    <PaddingDiv className="text-2xl tablet:text-3xl py-24 tablet:py-48">
      <MaxWidth className="space-y-12">
        <div className="leading-[1.5]">
          <span className="tablet:font-bold tablet:text-[#3270CD]">
            We solve the challenge of overwhelming amounts of research papers,
          </span>
          difficulties in finding gaps and generating innovative ideas, and
          staying up-to-date with the latest developments{" "}
          <span className="tablet:font-bold tablet:text-[#3270CD]">
            by providing valuable insights through aggregating and analyzing
            academic papers{" "}
          </span>
          , instead of a mere search and listing service.
        </div>
        <div className="leading-[2]">
          Scientists have observed a deceleration in scientific progress
        </div>
        <div className="space-y-8">
          <div className="bg-pluto-deep-blue text-white rounded-lg p-2">
            이미지1
          </div>
          <div className="bg-pluto-deep-blue text-white rounded-lg p-2">
            이미지2
          </div>
          <div className="bg-pluto-deep-blue text-white rounded-lg p-2">
            이미지3
          </div>
          <div className="bg-pluto-deep-blue text-white rounded-lg p-2">
            이미지4
          </div>
        </div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection2;
