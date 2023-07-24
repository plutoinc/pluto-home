import ScrollMotionInView from '@/components/common/Animation/ScrollMotionInView';
import PaddingDiv from '@/components/common/PaddingDiv';
import { FC } from 'react';
import FeatureCard from './FeatureCard';

interface Props {}

const FeaturesSection: FC<Props> = () => {
  return (
    <PaddingDiv className="mx-auto flex max-w-7xl flex-col items-center space-y-8 py-8 tablet:space-y-12 tablet:py-24 desktop:space-y-8">
      <ScrollMotionInView
        style={{ lineHeight: 1.25 }}
        className="text-2xl font-medium tablet:text-4xl desktop:px-24 desktop:pb-5 desktop:text-5xl"
        viewport={{ once: true, margin: '-200px' }}
      >
        Get quick access to analytic data extracted from academic papers and discover new insights for better research
        and business
      </ScrollMotionInView>

      <FeatureCard
        direction="right"
        imageSrc="/assets/product/field-trend-demo.png"
        title="Literature review"
        description="We significantly reduce the time spent on literature review and investigating research trends. Researchers can discover rising papers, explore trend graphs, identify influential researchers, and access other relevant information."
      />

      <FeatureCard
        direction="left"
        imageSrc="/assets/product/authorship-demo.png"
        title="Scinapse offers unique and exclusive metrics & analysis"
        description="By utilizing metrics and analysis, our product provides researchers
        with valuable insights without requiring them to read through a
        large number of publications."
      />

      <FeatureCard
        direction="right"
        imageSrc="/assets/product/quick-finder-demo.png"
        title="Your entire research in one place"
        description="Including convenient features like favorites and collections, Scinapse tracks and organizes your search and publications you’ve read."
      />
    </PaddingDiv>
  );
};

export default FeaturesSection;
