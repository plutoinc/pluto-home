import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  imageSrc: StaticImageData;
  description: string;
  direction: "left" | "right";
}

const FeatureCard: FC<Props> = ({
  title,
  imageSrc,
  description,
  direction,
}) => {
  return (
    <ScrollMotionInView
      viewport={{ once: true, margin: "-200px" }}
      className={twMerge(
        "p-8 bg-[#f4f9ff] tablet:p-12 desktop:p-14 rounded-3xl space-y-8 desktop:flex desktop:gap-x-16 desktop:items-center desktop:space-y-0",
        direction === "right" && "flex-row-reverse"
      )}
    >
      <div className="desktop:flex-1 p-4 shadow-md rounded-2xl bg-white w-full">
        <Image src={imageSrc} alt="asd" />
      </div>

      <div className="space-y-4 desktop:flex-1">
        <div className="text-2xl font-bold tablet:text-3xl">{title}</div>
        <div style={{ lineHeight: 1.7 }} className="tablet:text-xl leading-10">
          {description}
        </div>
      </div>
    </ScrollMotionInView>
  );
};

export default FeatureCard;
