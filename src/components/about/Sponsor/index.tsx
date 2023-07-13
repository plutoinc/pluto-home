import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const Sponsor: FC<Props> = () => {
  return (
    <PaddingDiv className="space-y-8 py-16 bg-white">
      <div className="text-3xl font-bold">Backed by</div>
      <div>포스코 캐피탈 등등</div>
    </PaddingDiv>
  );
};

export default Sponsor;
