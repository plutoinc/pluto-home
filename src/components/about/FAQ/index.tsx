import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";
import { FAQ_LIST } from "./constant";
import FoldableItem from "../../common/FoldableItem";

interface Props {}

const FAQ: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 divide-y divide-blue-200 bg-white">
      {FAQ_LIST.map((faq) => (
        <FoldableItem
          key={faq.question}
          title={faq.question}
          content={faq.answer}
        />
      ))}
    </PaddingDiv>
  );
};

export default FAQ;
