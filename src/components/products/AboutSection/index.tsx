import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import PaddingDiv from "@/components/common/PaddingDiv";
import { ABOUT_PATH } from "@/routes";
import Link from "next/link";
import { FC } from "react";
import Disclosure from "../../common/Disclosure";

interface Props {}

const AboutSection: FC<Props> = () => {
  return (
    <div className="bg-[#f4f9ff] mx-auto">
      <PaddingDiv className="py-16 space-y-8 mx-auto max-w-7xl tablet:flex tablet:space-x-16 tablet:space-y-0">
        <ScrollMotionInView className="space-y-8 max-w-xs">
          <div className="text-2xl tablet:text-3xl font-bold">
            Unlock powerful insights with our technology
          </div>

          <Link
            href={{ pathname: ABOUT_PATH }}
            className="px-4 py-2.5 inline-block bg-black rounded-lg text-white text-sm font-bold shadow-gray-300 shadow-lg"
          >
            About us
          </Link>
        </ScrollMotionInView>

        <ScrollMotionInView className="flex-1">
          <Disclosure
            type="list"
            title="Gain new insight"
            descriptions={[
              "Research funding trends and relevant information.",
              "Extraction of experimental data and integration of data from papers.",
              "Search for patents and relevant firms.",
              "Back your cases with integrated experimental results, funding information, patents, enterprise research, and more.",
            ]}
          />

          <Disclosure
            type="list"
            title="Cutting-edge research trends"
            description="Get quick access to the latest research trends we identify:"
            descriptions={[
              "Find rising stars in specific fields",
              "Technology commercialization stages in subunits of research fields.",
              "Detailed research of subgroup areas.",
            ]}
          />

          <Disclosure
            type="list"
            title="Multi-dimensional analysis of researchers & publications"
            description="Author's contribution-weighted research field, impact in their research field, and yearly achievement tracking."
            descriptions={[
              "Each author's research performance analysis on a yearly basis.",
              "Identify each author's specific research field and their impact on the field.",
              "Patents and business enterprises related to each author are also provided.",
              "Research performance analysis of each research institution.",
              "Comparative analysis across institutions.",
            ]}
          />
        </ScrollMotionInView>
      </PaddingDiv>
    </div>
  );
};

export default AboutSection;
