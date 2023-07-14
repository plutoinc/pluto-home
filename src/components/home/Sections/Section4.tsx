import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import FoldableItem from "@/components/home/FoldableItem";
import MaxWidth from "@/components/common/MaxWidth";
import Link from "next/link";
import { PRODUCT_PATH } from "@/routes";
import { FEATURES } from "./constant";

const HomeSection4: FC = () => {
  return (
    <div className="bg-[#e5f1ff]">
      <MaxWidth className="space-y-8 tablet:flex tablet:gap-x-12 tablet:items-start tablet:space-y-0 py-16 tablet:py-20">
        <div className="space-y-8 tablet:w-2/5">
          <div className="text-3xl font-extrabold">
            Experience true research with us
          </div>
          <Link
            href={PRODUCT_PATH}
            className="text-sm h-10 text-white px-2.5 bg-pluto-deep-blue rounded-lg shadow text-center font-extrabold inline-flex items-center"
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
    </div>
  );
};

export default HomeSection4;
