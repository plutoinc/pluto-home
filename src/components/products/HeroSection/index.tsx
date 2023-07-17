import PaddingDiv from "@/components/common/PaddingDiv";
import ScrollToDiscover from "@/components/common/ScrollToDiscover";
import ScinapseIcon from "@/components/icons/ScinapseIcon";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {}

const HeroSection: FC<Props> = () => {
  return (
    <div className="bg-gradient-to-b from-pluto-deep-blue to-pluto-dark-blue mx-auto">
      <PaddingDiv
        className={twMerge(
          "h-[600px] space-y-12 max-w-7xl mx-auto",
          "tablet:h-[800px]"
        )}
      >
        <div
          className={twMerge(
            "pt-28 space-y-8",
            "tablet:w-[500px] tablet:pt-44"
          )}
        >
          <ScinapseIcon className={twMerge("w-60 tablet:w-80")} />
          <div className={twMerge("text-white", "tablet:text-2xl")}>
            We present a whole new perspective on research discovery services.
            Intelligent data and quick access to state-of-the-art insights
          </div>
        </div>

        <Link
          className={twMerge(
            "block bg-white w-full font-bold rounded-lg text-center py-4 text-pluto-deep-blue text-lg tablet:text-xl shadow-xl px-10",
            "tablet:inline-block tablet:w-fit"
          )}
          target="_blank"
          href="https://www.scinapse.io/"
        >
          Try Now
        </Link>

        <ScrollToDiscover />
      </PaddingDiv>
    </div>
  );
};

export default HeroSection;
