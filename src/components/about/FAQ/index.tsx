import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import { FAQ_LIST } from "./constant";
import FoldableItem from "../../home/FoldableItem";
import MaxWidth from "@/components/common/MaxWidth";
import DesktopFAQ from "./DesktopFAQ";

interface Props {}

const FAQ: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 divide-y divide-blue-200 bg-white tablet:py-24 tablet:bg-[#F4F9FF]">
      <MaxWidth>
        {FAQ_LIST.map((faq) => (
          <FoldableItem
            key={faq.question}
            title={faq.question}
            content={faq.answer}
            className="desktop:hidden"
          />
        ))}
        <DesktopFAQ />
      </MaxWidth>
    </PaddingDiv>
  );
};

export default FAQ;
