import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import FoldableItem from "@/components/home/FoldableItem";
import MaxWidth from "@/components/common/MaxWidth";
import Link from "next/link";
import { PRODUCT_PATH } from "@/routes";
import { FEATURES } from "./constant";

const HomeSection4: FC = () => {
  return (
    <PaddingDiv className="py-16 bg-[#e5f1ff] tablet:py-48">
      <MaxWidth className="space-y-8 tablet:flex tablet:gap-x-12 tablet:items-start tablet:space-y-0">
        <div className="space-y-8 tablet:w-2/5">
          <div className="text-3xl font-extrabold">
            Experience true research with us
          </div>
          <Link
            href={PRODUCT_PATH}
            className="w-full text-sm font-bold text-white p-3.5 bg-pluto-deep-blue rounded-lg shadow-sm block text-center"
          >
            Discover more
          </Link>
        </div>
        <div className="divide-y divide-blue-200 w-full">
          {FEATURES.map(({ title, content }, index) => (
            <FoldableItem key={index} title={title} content={content} />
          ))}
        </div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection4;
