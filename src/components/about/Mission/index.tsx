import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const VisionMission: FC<Props> = () => {
  return (
    <MaxWidth className="py-24">
      <div className="tracking-[2px] font-semibold leading-[30px] mb-6">
        MISSION
      </div>
      <span className="text-4xl tablet:text-5xl font-medium !leading-[1.3]">
        We innovate the research process by presenting a new paradigm of
        scientific development.
      </span>
    </MaxWidth>
  );
};

export default VisionMission;
