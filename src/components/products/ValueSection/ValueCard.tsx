import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard: FC<Props> = ({ title, icon, description }) => {
  return (
    <div className="p-8 flex-wrap tablet:w-1/2 tablet:snap-start w-full snap-center flex-shrink-0 bg-[#f4f9ff] rounded-3xl space-y-6">
      <div className="w-12">{icon}</div>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-xl">{description}</div>
    </div>
  );
};

export default ValueCard;
