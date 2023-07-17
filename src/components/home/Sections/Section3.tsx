import MaxWidth from "@/components/common/MaxWidth";
import { FC } from "react";

interface Props {}

const HomeSection3: FC<Props> = () => {
  return (
    <div className="text-white bg-pluto-deep-blue">
      <MaxWidth className="space-y-8 tablet:py-48 py-16 tablet:space-y-24">
        <div className="text-3xl font-extrabold tablet:text-5xl">
          Pluto Technology
        </div>
        <div className="text-lg tablet:text-5xl break-words">
          <span className="tablet:font-extrabold leading-[1.5]">
            Our tool extracts valuable information such as related topics,
            companies, and patent data from each paper.
          </span>{" "}
          <span className="leading-[1.5] text-white text-opacity-80">
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
    </div>
  );
};

export default HomeSection3;
