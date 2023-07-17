import FieldTrendDemoSrc from "@/assets/product/field-trend-demo.png";
import PaperCitationTrendDemoSrc from "@/assets/product/paper-citation-trend-demo.png";
import QuickFinderDemoSrc from "@/assets/product/quick-finder-demo.png";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

interface Props {}

const FeaturesSection: FC<Props> = () => {
  return (
    <PaddingDiv className="flex flex-col items-center py-8 max-w-7xl mx-auto space-y-8 tablet:space-y-12 desktop:space-y-8 tablet:py-24">
      <div
        style={{ lineHeight: 1.25 }}
        className="font-medium text-2xl tablet:text-4xl desktop:text-5xl desktop:px-24 desktop:pb-5"
      >
        Get quick access to analytic data extracted from academic papers and
        discover new insights for better research and business
      </div>

      <FeatureCard
        direction="right"
        imageSrc={FieldTrendDemoSrc}
        title="Literature review"
        description="We significantly reduce the time spent on literature review and investigating research trends. Researchers can discover rising papers, explore trend graphs, identify influential researchers, and access other relevant information."
      />

      <FeatureCard
        direction="left"
        imageSrc={PaperCitationTrendDemoSrc}
        title="Scinapse offers unique and exclusive metrics & analysis"
        description="By utilizing metrics and analysis, our product provides researchers
            with valuable insights without requiring them to read through a
            large number of publications."
      />

      <FeatureCard
        direction="right"
        imageSrc={QuickFinderDemoSrc}
        title="Your entire research in one place"
        description="Including convenient features like favorites and collections, Scinapse tracks and organizes your search and publications you’ve read."
      />
    </PaddingDiv>
  );
};

export default FeaturesSection;
