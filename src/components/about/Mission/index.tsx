import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const VisionMission: FC<Props> = () => {
  return (
    <MaxWidth className="space-y-6 py-24">
      <div className="tracking-[2px] font-semibold">MISSION</div>
      <div className="text-4xl leading-[1.3] font-medium">
        We innovate the research process by presenting a new paradigm of
        scientific development.
      </div>
    </MaxWidth>
  );
};

export default VisionMission;
