import { FC } from "react";
import { ArrowDownCircle } from "react-feather";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const ScrollButton: FC<Props> = ({ className }) => {
  return (
    <button
      className={twMerge(
        "flex items-center gap-x-2.5 text-[#709edb]",
        className
      )}
    >
      <ArrowDownCircle className="w-6" />
      <div>Scroll to discover</div>
    </button>
  );
};

export default ScrollButton;
