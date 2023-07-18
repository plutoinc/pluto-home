import Link from "next/link";
import { FC } from "react";
import LinkedInIcon from "../../icons/LinkedInIcon";
import MediumLogoIcon from "../../icons/MediumLogoIcon";
import PlutoLogoIcon from "../../icons/PlutoLogoIcon";
import ScinapseLogoIcon from "../../icons/ScinapseLogoIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { HOME_PATH } from "@/routes";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <div className="bg-pluto-deep-blue">
      <div className="max-w-7xl mx-auto tablet:px-24 tablet:py-12 space-y-8 p-8">
        <div className="flex flex-col items-center space-y-8 tablet:flex-row tablet:justify-between tablet:space-y-0 tablet:items-center">
          <div className="flex items-centers gap-x-6">
            <Link href="https://twitter.com/pluto_corp" target="_blank">
              <TwitterIcon className="w-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/pluto-network/"
              target="_blank"
            >
              <LinkedInIcon className="w-8" />
            </Link>
            <Link href="https://medium.com/pluto-inc" target="_blank">
              <MediumLogoIcon className="w-8" />
            </Link>
            <Link href="https://www.scinapse.io/" target="_blank">
              <ScinapseLogoIcon className="w-8" />
            </Link>
          </div>

          <Link href={{ pathname: HOME_PATH }}>
            <PlutoLogoIcon color="white" className="w-20" />
          </Link>
        </div>

        <div className="h-[1px] bg-[#113769]" />

        <div className="text-sm text-[#b4caea] text-center space-y-6 tablet:flex tablet:items-center tablet:space-y-0 tablet:justify-between">
          <div>© 2023 Pluto Labs, Inc. All rights reserved.</div>
          <div className="flex flex-col gap-y-1.5 items-center space-x-1 tablet:flex-row">
            <div>support@pluto.im</div>
            <div className="hidden tablet:block">|</div>
            <div>
              14-6 Teheran-ro 78-gil, Gangnam-gu, Seoul, 06194, Republic of
              Korea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
