import { FC } from "react";

interface Props {
  className?: string;
}

const ChevronUpIcon: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 15L12 9L18 15"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default ChevronUpIcon;
