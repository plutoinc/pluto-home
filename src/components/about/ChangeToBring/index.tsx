import PaddingDiv from "@/components/common/PaddingDiv";
import { FC, ReactNode } from "react";
import { Clock, Cpu, FileText, RefreshCcw } from "react-feather";

interface CardProps {
  icon: ReactNode;
  content: string;
}

const Card: FC<CardProps> = ({ content, icon }) => {
  return (
    <div className="rounded-xl space-y-6 bg-[#0c2448] p-6 bg-opacity-40">
      <div className="bg-white rounded-full inline-block p-3">{icon}</div>
      <div className="break-words text-xl">{content}</div>
    </div>
  );
};

const ChangeToBring: FC = () => {
  return (
    <PaddingDiv className="py-16 space-y-8 bg-gradient-to-b from-0% to-100% from-pluto-dark-blue to-pluto-deep-blue text-white">
      <div className="text-2xl font-medium">
        What kind of changes are we trying to bring about based on this tool?
      </div>
      <Card
        icon={<Clock className="text-pluto-deep-blue w-6" />}
        content="To significantly reduce the time researchers spend reading papers."
      />
      <Card
        icon={<Cpu className="text-pluto-deep-blue w-6" />}
        content="To enable researchers to spend more time on experiments and creative activities."
      />
      <Card
        icon={<FileText className="text-pluto-deep-blue w-6" />}
        content="To provide industry insights by analyzing the additional information in research papers besides research-related information."
      />
      <Card
        icon={<RefreshCcw className="text-pluto-deep-blue w-6" />}
        content="To enhance the usability of research data itself to a new level."
      />
    </PaddingDiv>
  );
};

export default ChangeToBring;
