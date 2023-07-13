import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import { FAQ_LIST } from "./constant";
import FAQItem from "./FAQItem";

interface Props {}

const FAQ: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 divide-y divide-blue-200 bg-white">
      {FAQ_LIST.map((faq) => (
        <FAQItem key={faq.question} {...faq} />
      ))}
    </PaddingDiv>
  );
};

export default FAQ;
