import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import AboutDropdown from "./AboutDropdown";
import Link from "next/link";

interface Props {}

const AboutSection: FC<Props> = () => {
  return (
    <div className="bg-[#f4f9ff] mx-auto">
      <PaddingDiv className="py-16 space-y-8 mx-auto max-w-7xl tablet:flex tablet:space-x-16 tablet:space-y-0">
        <div className="space-y-8 max-w-xs">
          <div className="text-2xl tablet:text-3xl font-bold">
            Unlock powerful insights with our technology
          </div>

          <Link
            href={{ pathname: "/about" }}
            className="px-4 py-2.5 inline-block bg-black rounded-lg text-white text-sm font-bold shadow-gray-300 shadow-lg"
          >
            About us
          </Link>
        </div>

        <div className="flex-1">
          <AboutDropdown
            title="Gain new insight"
            descriptions={[
              "Research funding trends and relevant information.",
              "Extraction of experimental data and integration of data from papers.",
              "Search for patents and relevant firms.",
              "Back your cases with integrated experimental results, funding information, patents, enterprise research, and more.",
            ]}
          />

          <AboutDropdown
            title="Cutting-edge research trends"
            description="Get quick access to the latest research trends we identify:"
            descriptions={[
              "Find rising stars in specific fields",
              "Technology commercialization stages in subunits of research fields.",
              "Detailed research of subgroup areas.",
            ]}
          />

          <AboutDropdown
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
        </div>
      </PaddingDiv>
    </div>
  );
};

export default AboutSection;
