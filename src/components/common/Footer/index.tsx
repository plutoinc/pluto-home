import Link from 'next/link';
import { FC } from 'react';
import LinkedInIcon from '../../icons/LinkedInIcon';
import MediumLogoIcon from '../../icons/MediumLogoIcon';
import PlutoLogoIcon from '../../icons/PlutoLogoIcon';
import ScinapseLogoIcon from '../../icons/ScinapseLogoIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import { HOME_PATH } from '@/routes';
import { PLUTO_BLOG_LINK } from '@/constant/link';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <div className="bg-pluto-deep-blue">
      <div className="mx-auto max-w-7xl space-y-8 p-8 tablet:px-24 tablet:py-12">
        <div className="flex flex-col items-center space-y-8 tablet:flex-row tablet:items-center tablet:justify-between tablet:space-y-0">
          <div className="items-centers flex gap-x-6">
            <Link href="https://x.com/Scinapse_" target="_blank">
              <TwitterIcon className="w-8" />
            </Link>
            <Link href="https://www.linkedin.com/company/pluto-network/" target="_blank">
              <LinkedInIcon className="w-8" />
            </Link>
            <Link href={PLUTO_BLOG_LINK} target="_blank">
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

        <div className="space-y-6 text-center text-sm text-[#b4caea] tablet:flex tablet:items-center tablet:justify-between tablet:space-y-0">
          <div>© 2023 Pluto Labs, Inc. All rights reserved.</div>
          <div className="flex flex-col items-center gap-y-1.5 space-x-1 tablet:flex-row">
            <div>support@pluto.im</div>
            <div className="hidden tablet:block">|</div>
            <div>14-6 Teheran-ro 78-gil, Gangnam-gu, Seoul, 06194, Republic of Korea</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
