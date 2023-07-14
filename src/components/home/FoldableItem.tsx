import { FC, useState } from "react";
import { ChevronDown } from "react-feather";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  content: string[] | string;
  className?: string;
}

const FoldableItem: FC<Props> = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge("py-4", className)}>
      <button
        className="w-full flex items-center text-left leading-[1.5] font-bold text-lg justify-between gap-x-4"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className="break-words">{title}</div>
        <ChevronDown
          className={twMerge(
            "flex-shrink-0 w-6 transition-all",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {typeof content === "string" && (
        <div className={twMerge("hidden py-4", isOpen && "block")}>
          {content}
        </div>
      )}
      {typeof content !== "string" && (
        <div
          className={twMerge(
            "text-[#596576] break-words py-4 space-y-4",
            !isOpen && "hidden"
          )}
        >
          {content.map((a) => (
            <div key={a}>{a}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoldableItem;
