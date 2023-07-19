import ContactUsLink from "@/components/common/ContactUsLink";
import Link from "next/link";
import { FC } from "react";
import { HEADER_MENU, HeaderMenu as HeaderMenuItem } from "../constant";

const HeaderMenuItem: FC<HeaderMenuItem> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="flex-shrink-0 text-sm font-medium leading-6 tablet:inline-block"
    >
      {label}
    </Link>
  );
};

interface Props {
  className?: string;
  isOpen: boolean;
}

const MobileHeaderRightMenu: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center gap-y-12 tablet:hidden">
      {HEADER_MENU.map((menu) => (
        <HeaderMenuItem key={menu.label} {...menu} />
      ))}
      <ContactUsLink className="w-full items-center whitespace-nowrap rounded-lg bg-pluto-deep-blue px-4 py-2.5 text-sm font-semibold text-white tablet:flex" />
    </div>
  );
};

const DesktopHeaderRightMenu: FC = () => {
  return (
    <div className="hidden tablet:flex tablet:flex-row tablet:items-center tablet:gap-x-12">
      {HEADER_MENU.map((menu) => (
        <HeaderMenuItem key={menu.label} {...menu} />
      ))}
      <ContactUsLink className="items-center whitespace-nowrap rounded-lg bg-pluto-deep-blue px-4 py-2.5 text-sm font-semibold text-white tablet:flex" />
    </div>
  );
};

const HeaderRightMenu: FC<Props> = ({ isOpen }) => {
  return (
    <>
      <DesktopHeaderRightMenu />
      <MobileHeaderRightMenu isOpen={isOpen} />
    </>
  );
};

export default HeaderRightMenu;
