import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection2: FC<Props> = () => {
  return (
    <PaddingDiv className="space-y-12 text-2xl py-24">
      <div>
        We solve the challenge of overwhelming amounts of research papers,
        difficulties in finding gaps and generating innovative ideas, and
        staying up-to-date with the latest developments by providing valuable
        insights through aggregating and analyzing academic papers, instead of a
        mere search and listing service.
      </div>
      <div>Scientists have observed a deceleration in scientific progress</div>
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
    </PaddingDiv>
  );
};

export default HomeSection2;
