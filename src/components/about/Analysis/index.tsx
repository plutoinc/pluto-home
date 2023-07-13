import PaddingDiv from "@/components/common/PaddingDiv";
import { FC, ReactNode } from "react";
import { Search, Shield, FilePlus } from "react-feather";

interface Props {
  icon: ReactNode;
  text: string;
}

const Item: FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-x-6">
      <div className="text-white bg-pluto-blue p-4 rounded-full">{icon}</div>
      <div className="break-words leading-8">{text}</div>
    </div>
  );
};

const Analysis: FC = () => {
  return (
    <PaddingDiv className="py-16 space-y-20">
      <div className="text-2xl">
        Through analysis, as the visibility of research-related information
        increases,{" "}
        <b>
          it is expected to enable anyone to easily obtain research information
          in any field.
        </b>{" "}
        Accordingly, the following are expected to be possible:
      </div>
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
    </PaddingDiv>
  );
};

export default Analysis;
