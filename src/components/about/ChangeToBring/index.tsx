import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC, ReactNode } from "react";
import { Clock, Cpu, FileText, RefreshCcw, Users } from "react-feather";

interface CardProps {
  icon: ReactNode;
  content: string;
}

const Card: FC<CardProps> = ({ content, icon }) => {
  return (
    <div className="rounded-xl space-y-6 bg-[#0c2448] p-8 bg-opacity-40">
      <div className="bg-white rounded-full inline-block p-3">{icon}</div>
      <div className="break-words text-xl leading-8">{content}</div>
    </div>
  );
};

const ChangeToBring: FC = () => {
  return (
    <PaddingDiv className="py-16 bg-gradient-to-b from-0% to-100% from-pluto-dark-blue to-pluto-deep-blue text-white tablet:py-24">
      <MaxWidth className="space-y-8 tablet:space-y-24">
        <div className="text-2xl font-medium tablet:text-5xl leading-8 max-w-[72%]">
          What kind of changes are we trying to bring about based on this tool?
        </div>
        <div className="space-y-8">
          <div className="space-y-8 desktop:grid desktop:grid-cols-3 desktop:gap-x-[30px] desktop:self-stretch desktop:space-y-0">
            <Card
              icon={<Clock className="text-pluto-deep-blue w-6" />}
              content="To significantly reduce the time researchers spend reading papers."
            />
            <Card
              icon={<Cpu className="text-pluto-deep-blue w-6" />}
              content="To enable researchers to spend more time on experiments and creative activities."
            />
            <Card
              icon={<Users className="text-pluto-deep-blue w-6" />}
              content="To facilitate interdisciplinary research and accelerate collaboration among researchers by enabling quick verification of research results from other fields."
            />
          </div>
          <div className="space-y-8 desktop:grid desktop:grid-cols-2 desktop:gap-x-8 desktop:space-y-0">
            <Card
              icon={<FileText className="text-pluto-deep-blue w-6" />}
              content="To provide industry insights by analyzing the additional information in research papers besides research-related information."
            />
            <Card
              icon={<RefreshCcw className="text-pluto-deep-blue w-6" />}
              content="To enhance the usability of research data itself to a new level."
            />
          </div>
        </div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default ChangeToBring;
