import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import FoldableItem from "@/components/common/FoldableItem";
import MaxWidth from "@/components/common/MaxWidth";

const FEATURES = [
  {
    title: "Stay informed on the latest developments",
    content:
      "Our technology makes it easy for you to understand current research issues and the development status of each technology.",
  },
  { title: "Discover new experts", content: "" },
  { title: "Understand funding patterns", content: "" },
  { title: "Compare research capabilities", content: "" },
  { title: "Measure research impact", content: "" },
  { title: "Stay ahead of the curve", content: "" },
];

const HomeSection4: FC = () => {
  return (
    <PaddingDiv className="py-16 bg-[#e5f1ff] tablet:py-48">
      <MaxWidth className="space-y-8 tablet:flex tablet:gap-x-12 tablet:items-start tablet:space-y-0">
        <div className="space-y-8 tablet:w-2/5">
          <div className="text-3xl font-extrabold">
            Experience true research with us
          </div>
          <button className="w-full text-sm font-bold text-white p-3.5 bg-pluto-deep-blue rounded-lg shadow-sm">
            Discover more
          </button>
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
