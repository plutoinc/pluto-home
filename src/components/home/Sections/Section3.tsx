import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection3: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 text-white bg-pluto-deep-blue tablet:py-48">
      <MaxWidth className="space-y-8 tablet:space-y-48">
        <div className="text-3xl font-extrabold tablet:text-5xl">
          Pluto Technology
        </div>
        <div className="text-lg tablet:text-5xl break-words">
          <span className="tablet:font-extrabold leading-[1.5]">
            Our tool extracts valuable information such as related topics,
            companies, and patent data from each paper.
          </span>{" "}
          <span className="leading-[1.5]">
            Through our database, we provide a more comprehensive research
            experience.
          </span>
        </div>

        <video
          src="https://framerusercontent.com/assets/hFrgPhvwtw2XF7MhOvYCv5CNun0.mp4"
          autoPlay
          muted
        />
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection3;
