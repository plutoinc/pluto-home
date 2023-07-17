import Disclosure from "@/components/common/Disclosure";
import MaxWidth from "@/components/common/MaxWidth";
import { FC } from "react";
import DesktopFAQ from "./DesktopFAQ";
import { FAQ_LIST } from "./constant";

interface Props {}

const FAQ: FC<Props> = () => {
  return (
    <div className="bg-white tablet:bg-[#F4F9FF]">
      <MaxWidth className="py-16 tablet:py-24 ">
        <div className="desktop:hidden">
          {FAQ_LIST.map((faq) => (
            <Disclosure
              key={faq.question}
              type="div"
              title={faq.question}
              descriptions={faq.answer}
            />
          ))}
        </div>
        <DesktopFAQ />
      </MaxWidth>
    </div>
  );
};

export default FAQ;
