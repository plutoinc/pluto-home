import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import ValueCard from "./ValueCard";
import PapersIcon from "@/components/icons/PapersIcon";
import CompassIcon from "@/components/icons/CompassIcon";
import UserCheckIcon from "@/components/icons/UserCheckIcon";
import PaperInfoIcon from "@/components/icons/PaperInfoIcon";
import TrendGraphIcon from "@/components/icons/TrendGraphIcon";

interface Props {}

const ValueSection: FC<Props> = () => {
  return (
    <PaddingDiv className="flex flex-col items-center py-8 tablet:max-w-7xl mx-auto space-y-8 tablet:space-y-12 desktop:space-y-8 tablet:py-24">
      <div className="flex max-w-full gap-x-4 items-stretch overflow-x-scroll snap-x">
        <ValueCard
          icon={<PapersIcon />}
          title="Easy literature review"
          description="We provide analytical results for your search queries, allowing you to gain insights into the current state of a field and adjust your research questions accordingly."
        />

        <ValueCard
          icon={<CompassIcon />}
          title="Discover new experts"
          description="We identify the researchers behind each paper so you can easily find, analyze and connect with leading experts in your field with our Author Explorer."
        />

        <ValueCard
          icon={<UserCheckIcon />}
          title="Measure the influence"
          description="Our tool uses citation analysis and author contribution/article type data to provide a precise measure of the influence of authors and academic papers."
        />

        <ValueCard
          icon={<PaperInfoIcon />}
          title="Uncover relevant information"
          description="Our tool extracts information such as related topics, companies, and patent information from each paper, enabling you to gain valuable insights into the broader context of the research."
        />

        <ValueCard
          icon={<TrendGraphIcon />}
          title="Stay ahead of the game"
          description="With our data extraction and trend analysis, you'll always have the edge in your research."
        />

        <ValueCard
          icon={<TrendGraphIcon />}
          title="Research Efficiently"
          description="Our product significantly reduces the time spent investigating previous research in your field."
        />
      </div>
    </PaddingDiv>
  );
};

export default ValueSection;
