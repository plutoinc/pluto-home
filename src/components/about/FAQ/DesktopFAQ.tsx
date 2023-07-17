import { FC, useState } from "react";
import { FAQ_LIST } from "./constant";
import { twMerge } from "tailwind-merge";

interface QuestionProps {
  question: string;
  isSelected: boolean;
  onClickItem: () => void;
}

const Question: FC<QuestionProps> = ({ question, isSelected, onClickItem }) => {
  return (
    <button
      className={twMerge(
        "text-lg py-4 px-5 rounded-xl bg w-full inline-block text-left",
        isSelected
          ? "bg-white text-black border font-semibold border-pluto-blue"
          : "bg-[#E4EFFB] text-[#596576]"
      )}
      onClick={onClickItem}
    >
      {question}
    </button>
  );
};

const DesktopFAQ: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="gap-x-20 hidden desktop:flex">
      <div className="space-y-6 shrink-0 w-[298px]">
        {FAQ_LIST.map(({ question }, i) => (
          <Question
            key={question}
            question={question}
            isSelected={selectedIndex === i}
            onClickItem={() => setSelectedIndex(i)}
          />
        ))}
      </div>
      <div className="space-y-6 text-[#596576]">
        {FAQ_LIST[selectedIndex].answer.map((answer) => (
          <div key={answer} className="leading-8">
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopFAQ;
