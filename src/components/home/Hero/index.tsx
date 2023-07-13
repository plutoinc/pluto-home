import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import { ArrowDownCircle } from "react-feather";

const HomeHero: FC = () => {
  return (
    <PaddingDiv className="py-16">
      <div className="space-y-[50px]">
        <div className="break-words font-extrabold text-[32px]">
          <div>Innovate</div>
          <div>Innovations</div>
        </div>
        <div>
          Discover new insights for better research and business.
          <br />
          We focus on in-depth research data and analytics from research papers.
        </div>
        <div className="flex items-center gap-x-2.5 text-[#709edb]">
          <ArrowDownCircle className="w-6" />
          <div>Scroll to discover</div>
        </div>
      </div>
      {/* Lottie image later */}
    </PaddingDiv>
  );
};

export default HomeHero;
