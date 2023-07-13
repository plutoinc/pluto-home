import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const HomeSection3: FC<Props> = () => {
  return (
    <PaddingDiv className="py-16 text-white bg-pluto-deep-blue space-y-8">
      <div className="text-3xl font-extrabold">Pluto Technology</div>
      <div className="text-lg">
        Our tool extracts valuable information such as related topics,
        companies, and patent data from each paper. Our database enables precise
        entity recognition, not limited to bibliographic data. Additionally, we
        crawl and link other data sources, such as grants and chemicals,
        providing a more comprehensive research experience.
      </div>

      <div>(대충 비디오)</div>
    </PaddingDiv>
  );
};

export default HomeSection3;
