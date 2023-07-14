import { FC } from "react";
import { ArrowDownCircle } from "react-feather";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const ScrollButton: FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-x-2.5 text-[#709edb] text-sm",
        className
      )}
    >
      <ArrowDownCircle className="w-6 animate-bounce" />
      <div>Scroll to discover</div>
    </div>
  );
};

export default ScrollButton;
