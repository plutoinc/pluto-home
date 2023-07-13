import { FC, useState } from "react";
import { ChevronDown } from "react-feather";
import { twMerge } from "tailwind-merge";
import { FaqType } from "./constant";

const FAQItem: FC<FaqType> = ({ answer, question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <button
        className="w-full flex items-center text-left leading-[1.5] font-bold text-lg justify-between"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div>{question}</div>
        <ChevronDown
          className={twMerge(
            "flex-shrink-0 w-6 transition-all",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={twMerge(
          "text-[#596576] break-words py-4 space-y-4",
          !isOpen && "hidden"
        )}
      >
        {answer.map((a) => (
          <div key={a}>{a}</div>
        ))}
      </div>
    </div>
  );
};

export default FAQItem;
