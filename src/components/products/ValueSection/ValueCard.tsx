import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard: FC<Props> = ({ title, icon, description }) => {
  return (
    <div className="w-full flex-shrink-0 snap-center flex-wrap space-y-6 rounded-3xl bg-[#f4f9ff] p-8 shadow-sm tablet:w-[calc(50%-8px)]">
      <div className="w-12">{icon}</div>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-xl leading-[1.8]">{description}</div>
    </div>
  );
};

export default ValueCard;
