import { forwardRef, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  count: string;
  about: string;
}

const StatCard = forwardRef<HTMLDivElement, Props>(
  ({ about, count, icon }, ref) => {
    return (
      <div
        className="flex flex-col items-center flex-1 px-5 space-y-4"
        ref={ref}
      >
        <div className="w-16">{icon}</div>
        <div className="text-center">
          <div className="tablet:text-4xl text-2xl font-semibold">{count}</div>
          <div className="text-sm tablet:text-2xl">{about}</div>
        </div>
      </div>
    );
  }
);

StatCard.displayName = "StatCard";

export default StatCard;
