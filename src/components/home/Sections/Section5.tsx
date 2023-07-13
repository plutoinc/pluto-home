import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

const Cards: FC = () => {
  return (
    <div>
      <div className="bg-pluto-deep-blue rounded-t-3xl space-y-8 text-white p-12">
        <div>Scinapse</div>
        <div className="font-extrabold text-3xl">Designed for Researchers</div>
        <div className="text-lg">
          Not just a simple search engine. Intelligent data and quick access to
          state-of-the-art insights.
        </div>
        <button className="bg-white text-black font-bold w-full rounded-lg shadow p-3.5 text-sm">
          Contact us
        </button>
      </div>
      <div className="rounded-b-3xl border border-t-0 bg-blue-50">
        <div className="p-10 py-40">(싸이냅스 메인화면)</div>
      </div>
    </div>
  );
};

const HomeSection5: FC = () => {
  return (
    <PaddingDiv className="py-16 space-y-14">
      <div className="space-y-2">
        <div className="font-extrabold text-3xl">Our Partners</div>
        <div className="text-lg">
          Companies and universities of all sizes are innovating their research
          with Pluto
        </div>
      </div>
      <div>(대학교들)</div>
      <Cards />
    </PaddingDiv>
  );
};

export default HomeSection5;
