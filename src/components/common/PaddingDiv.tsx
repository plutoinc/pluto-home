import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const PaddingDiv: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={twMerge("px-8 tablet:px-24", className)}>
      {children}
    </div>
  );
};

export default PaddingDiv;
