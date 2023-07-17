import PaddingDiv from "@/components/common/PaddingDiv";
import PublicationStatsIcon from "@/components/icons/PublicationsStatIcon";
import { FC } from "react";
import StatCard from "./StatCard";
import CountryStatIcon from "@/components/icons/CountryStatIcon";
import UserStatIcon from "@/components/icons/UserStatIcon";

interface Props {}

const StatsSection: FC<Props> = () => {
  return (
    <div className="bg-[#f4f9ff] mx-auto">
      <PaddingDiv className="py-16 max-w-7xl mx-auto tablet:py-24">
        <div className="flex justify-between">
          <StatCard icon={<CountryStatIcon />} about="Countries" count="200+" />
          <StatCard
            icon={<PublicationStatsIcon />}
            about="Academic Publications"
            count="2B+"
          />
          <StatCard icon={<UserStatIcon />} about="Users" count="8M+" />
        </div>
      </PaddingDiv>
    </div>
  );
};

export default StatsSection;
