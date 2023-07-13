import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection6: FC<Props> = () => {
  return (
    <PaddingDiv className="space-y-8 py-16 bg-[#F0F6FF]">
      <div className="text-pluto-dark-blue font-extrabold text-3xl">
        We offer custom research analytics services
      </div>
      <div className="text-pluto-deep-blue text-lg leading-[2]">
        Based on our database, we provide premium reports:
        <ul>
          <li className="list-disc ml-4">
            Research benchmark and consultation services for the research
            institutions
          </li>
          <li className="list-disc ml-4">
            New technology trends and consultation services for the tech-based
            companies
          </li>
        </ul>
      </div>
      <button className="bg-pluto-dark-blue text-white font-bold w-full rounded-lg shadow p-3.5 text-sm">
        Contact us
      </button>
      <div>(대충 차트 이미지)</div>
    </PaddingDiv>
  );
};

export default HomeSection6;
