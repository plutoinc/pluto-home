import { FC } from "react";
import LinkedInIcon from "../icons/LinkedInIcon";
import MediumLogoIcon from "../icons/MediumLogoIcon";
import PlutoLogoIcon from "../icons/PlutoLogoIcon";
import ScinapseLogoIcon from "../icons/ScinapseLogoIcon";
import TwitterIcon from "../icons/TwitterIcon";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <div className="p-8 bg-pluto-deep-blue space-y-8 tablet:px-24 tablet:py-12">
      <div className="flex flex-col items-center space-y-8 tablet:flex-row tablet:justify-between tablet:space-y-0 tablet:items-center">
        <div className="flex items-centers gap-x-6">
          <TwitterIcon className="w-8" />
          <LinkedInIcon className="w-8" />
          <MediumLogoIcon className="w-8" />
          <ScinapseLogoIcon className="w-8" />
        </div>

        <PlutoLogoIcon className="w-20" />
      </div>

      <div className="h-[1px] bg-[#113769]" />

      <div className="text-sm text-[#b4caea] text-center space-y-6 tablet:flex tablet:items-center tablet:space-y-0 tablet:justify-between">
        <div>© 2023 Pluto Labs, Inc. All rights reserved.</div>
        <div>support@pluto.im</div>
      </div>
    </div>
  );
};

export default Footer;
