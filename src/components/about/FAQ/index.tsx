import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import { FAQ_LIST } from "./constant";
import FoldableItem from "../../home/FoldableItem";
import MaxWidth from "@/components/common/MaxWidth";
import DesktopFAQ from "./DesktopFAQ";

interface Props {}

const FAQ: FC<Props> = () => {
  return (
    <div className="bg-white tablet:bg-[#F4F9FF]">
      <MaxWidth className="py-16 tablet:py-24 ">
        <div className="divide-y divide-blue-200">
          {FAQ_LIST.map((faq) => (
            <FoldableItem
              key={faq.question}
              title={faq.question}
              content={faq.answer}
              className="desktop:hidden"
            />
          ))}
        </div>
        <DesktopFAQ />
      </MaxWidth>
    </div>
  );
};

export default FAQ;
