import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const Sponsor: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 bg-white">
      <MaxWidth className="space-y-8">
        <div className="text-3xl font-bold tablet:font-extrabold">
          Backed by
        </div>
        <div>포스코 캐피탈 등등</div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default Sponsor;
