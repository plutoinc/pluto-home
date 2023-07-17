import { FC } from "react";
import PaddingDiv from "../../common/PaddingDiv";

interface Props {}

const HeaderSection: FC<Props> = () => {
  return (
    <div className="flex-1 space-y-6">
      <div className="font-semibold text-[#f2f6fd] text-opacity-30 tracking-widest">
        {"LET'S CONNECT"}
      </div>

      <div className="text-3xl tablet:text-5xl font-bold text-white">
        Contact us
      </div>

      <div className="text-lg text-white font-medium leading-relaxed">
        Discover new insights for better research and business. We focus on
        in-depth research data and analytics from research papers.
      </div>
    </div>
  );
};

export default HeaderSection;
