import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import FoldableItem from "@/components/common/FoldableItem";
import MaxWidth from "@/components/common/MaxWidth";
import Link from "next/link";
import { PRODUCT_PATH } from "@/routes";

const FEATURES = [
  {
    title: "Stay informed on the latest developments",
    content:
      "Our technology makes it easy for you to understand current research issues and the development status of each technology.",
  },
  {
    title: "Discover new experts",
    content:
      "We help you find leading researchers in your field by identifying their research interests, influential power, and professional networks.",
  },
  {
    title: "Understand funding patterns",
    content:
      "Our tool tracks the flow of funds for each research topic, giving you insights into where funding is going and why.",
  },
  {
    title: "Compare research capabilities",
    content:
      "We provide a comprehensive platform for comparing research capabilities across countries, institutions, and individual researchers.",
  },
  {
    title: "Measure research impact",
    content:
      "Our technology allows you to measure the impact of research outputs and individual researchers, giving you a clear understanding of their influence within the field.",
  },
  {
    title: "Stay ahead of the curve",
    content:
      "We use advanced algorithms to sense rising research topics and up-and-coming scientists, keeping you ahead of the curve.",
  },
];

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
