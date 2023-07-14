import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import { FC, ReactNode } from "react";
import { Search, Shield, FilePlus } from "react-feather";

interface Props {
  icon: ReactNode;
  text: string;
}

const Item: FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-x-6 tablet:flex-col tablet:items-start tablet:gap-y-6">
      <div className="text-white bg-pluto-blue p-4 rounded-full">{icon}</div>
      <div className="break-words leading-8 tablet:text-xl">{text}</div>
    </div>
  );
};

const Analysis: FC = () => {
  return (
    <MaxWidth className="space-y-20 py-16 tablet:py-24">
      <div className="text-2xl tablet:text-4xl !leading-[1.5] desktop:text-5xl">
        Through analysis, as the visibility of research-related information
        increases,{" "}
        <b>
          it is expected to enable anyone to easily obtain research information
          in any field.
        </b>{" "}
        Accordingly, the following are expected to be possible:
      </div>
      <div className="space-y-14 tablet:space-y-0 tablet:grid tablet:grid-cols-3 tablet:gap-x-7">
        <Item
          icon={<Shield className="w-6" />}
          text="Verification of scientific information in the media."
        />
        <Item
          icon={<Search className="w-6" />}
          text="Tracking the flow of national research project funds."
        />
        <Item
          icon={<FilePlus className="w-6" />}
          text="Analysis of differences in research methods by country."
        />
      </div>
    </MaxWidth>
  );
};

export default Analysis;
