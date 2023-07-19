import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import MaxWidth from "@/components/common/MaxWidth";
import { FC } from "react";

interface Props {}

const VisionMission: FC<Props> = () => {
  return (
    <MaxWidth className="py-24">
      <ScrollMotionInView>
        <div className="tracking-[2px] font-semibold leading-[30px] mb-6">
          MISSION
        </div>
        <span className="text-4xl tablet:text-5xl font-medium !leading-[1.3]">
          We innovate the research process by presenting a new paradigm of
          scientific development.
        </span>
      </ScrollMotionInView>
    </MaxWidth>
  );
};

export default VisionMission;
