import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import { ChevronDown } from "react-feather";

const FEATURES = [
  "Stay informed on the latest developments",
  "Discover new experts",
  "Understand funding patterns",
  "Compare research capabilities",
  "Measure research impact",
  "Stay ahead of the curve",
] as const;

const HomeSection4: FC = () => {
  return (
    <PaddingDiv className="py-16 space-y-8 bg-[#e5f1ff]">
      <div className="text-3xl font-extrabold">
        Experience true research with us
      </div>
      <button className="w-full text-sm font-bold text-white p-3.5 bg-pluto-deep-blue rounded-lg shadow-sm">
        Discover more
      </button>
      <div className="divide-y divide-blue-200">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="break-words flex items-center gap-x-5 justify-between font-bold py-3"
          >
            <div>{feature}</div>
            <ChevronDown className="w-5 flex-shrink-0" />
          </div>
        ))}
      </div>
    </PaddingDiv>
  );
};

export default HomeSection4;
