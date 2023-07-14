import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import PaddingDiv from "./PaddingDiv";

const MaxWidth: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <PaddingDiv
      className={twMerge("max-w-[1200px] mx-auto w-full", className)}
      {...props}
    >
      {children}
    </PaddingDiv>
  );
};

export default MaxWidth;
