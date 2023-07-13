import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const MaxWidth: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge("max-w-[1200px] mx-auto w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
