import FieldTrendDemoSrc from "@/assets/product/field-trend-demo.png";
import PaperCitationTrendDemoSrc from "@/assets/product/paper-citation-trend-demo.png";
import QuickFinderDemoSrc from "@/assets/product/quick-finder-demo.png";
import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

interface Props {}

const FeaturesSection: FC<Props> = () => {
  return (
    <PaddingDiv className="flex flex-col items-center py-8 max-w-7xl mx-auto space-y-8 tablet:space-y-12 desktop:space-y-8 tablet:py-24">
      <ScrollMotionInView
        style={{ lineHeight: 1.25 }}
        className="font-medium text-2xl tablet:text-4xl desktop:text-5xl desktop:px-24 desktop:pb-5"
        viewport={{ once: true, margin: "-200px" }}
      >
        Get quick access to analytic data extracted from academic papers and
        discover new insights for better research and business
      </ScrollMotionInView>

      <ScrollMotionInView viewport={{ once: true, margin: "-200px" }}>
        <FeatureCard
          direction="right"
          imageSrc={FieldTrendDemoSrc}
          title="Literature review"
          description="We significantly reduce the time spent on literature review and investigating research trends. Researchers can discover rising papers, explore trend graphs, identify influential researchers, and access other relevant information."
        />
      </ScrollMotionInView>

      <ScrollMotionInView viewport={{ once: true, margin: "-200px" }}>
        <FeatureCard
          direction="left"
          imageSrc={PaperCitationTrendDemoSrc}
          title="Scinapse offers unique and exclusive metrics & analysis"
          description="By utilizing metrics and analysis, our product provides researchers
        with valuable insights without requiring them to read through a
        large number of publications."
        />
      </ScrollMotionInView>

      <ScrollMotionInView viewport={{ once: true, margin: "-200px" }}>
        <FeatureCard
          direction="right"
          imageSrc={QuickFinderDemoSrc}
          title="Your entire research in one place"
          description="Including convenient features like favorites and collections, Scinapse tracks and organizes your search and publications you’ve read."
        />
      </ScrollMotionInView>
    </PaddingDiv>
  );
};

export default FeaturesSection;
