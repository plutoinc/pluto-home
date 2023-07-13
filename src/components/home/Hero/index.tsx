import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import ScrollButton from "../ScrollButton";

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
        <ScrollButton />
      </div>
      {/* Lottie image later */}
    </PaddingDiv>
  );
};

export default HomeHero;
