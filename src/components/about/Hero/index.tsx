import PaddingDiv from "@/components/common/PaddingDiv";
import ScrollButton from "@/components/home/ScrollButton";
import { FC } from "react";

interface Props {}

const AboutHero: FC<Props> = () => {
  return (
    <PaddingDiv className="bg-gradient-to-b from-pluto-deep-blue from-0% to-100% to-pluto-dark-blue py-16 space-y-6 text-[#F2F6FD]">
      <div className="tracking-[2px] font-semibold opacity-50">ABOUT US</div>
      <div className="text-white font-extrabold text-3xl">
        A researcher-oriented research ecosystem.
      </div>
      <div className="text-white text-lg font-medium">
        Discover new insights for better research and business.
        <br />
        We focus on in-depth research data and analytics from research papers.
      </div>
      <ScrollButton />
    </PaddingDiv>
  );
};

export default AboutHero;
