import PaddingDiv from "@/components/common/PaddingDiv";
import CompassIcon from "@/components/icons/CompassIcon";
import PaperInfoIcon from "@/components/icons/PaperInfoIcon";
import PapersIcon from "@/components/icons/PapersIcon";
import TrendGraphIcon from "@/components/icons/TrendGraphIcon";
import UserCheckIcon from "@/components/icons/UserCheckIcon";
import { FC } from "react";
import Carousel from "./Carousel";
import ValueCard from "./ValueCard";

const ValueSection: FC = () => {
  return (
    <PaddingDiv className="flex flex-col items-center py-8 tablet:max-w-7xl mx-auto space-y-8 tablet:space-y-12 desktop:space-y-8 tablet:py-24">
      <div className="w-full">
        <Carousel
          items={[
            <ValueCard
              key={0}
              icon={<PapersIcon />}
              title="Easy literature review"
              description="We provide analytical results for your search queries, allowing you to gain insights into the current state of a field and adjust your research questions accordingly."
            />,
            <ValueCard
              key={1}
              icon={<CompassIcon />}
              title="Discover new experts"
              description="We identify the researchers behind each paper so you can easily find, analyze and connect with leading experts in your field with our Author Explorer."
            />,
            <ValueCard
              key={2}
              icon={<UserCheckIcon />}
              title="Measure the influence"
              description="Our tool uses citation analysis and author contribution/article type data to provide a precise measure of the influence of authors and academic papers."
            />,
            <ValueCard
              key={3}
              icon={<PaperInfoIcon />}
              title="Uncover relevant information"
              description="Our tool extracts information such as related topics, companies, and patent information from each paper, enabling you to gain valuable insights into the broader context of the research."
            />,
            <ValueCard
              key={4}
              icon={<TrendGraphIcon />}
              title="Stay ahead of the game"
              description="With our data extraction and trend analysis, you'll always have the edge in your research."
            />,
            <ValueCard
              key={5}
              icon={<TrendGraphIcon />}
              title="Research Efficiently"
              description="Our product significantly reduces the time spent investigating previous research in your field."
            />,
          ]}
        />
      </div>
    </PaddingDiv>
  );
};

export default ValueSection;
