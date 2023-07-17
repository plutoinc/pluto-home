import ContactUsButton from "@/components/home/ContactUsButton";
import Link from "next/link";
import { FC } from "react";
import { HEADER_MENU, HeaderMenu as HeaderMenuItem } from "../constant";

const HeaderMenuItem: FC<HeaderMenuItem> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium leading-6 tablet:inline-block flex-shrink-0"
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
    <div className="flex gap-y-12 items-center flex-col w-full text-black tablet:hidden">
      {HEADER_MENU.map((menu) => (
        <HeaderMenuItem key={menu.label} {...menu} />
      ))}
      <ContactUsButton className="bg-pluto-deep-blue whitespace-nowrap tablet:flex items-center" />
    </div>
  );
};

const DesktopHeaderRightMenu: FC = () => {
  return (
    <div className="text-black hidden tablet:flex tablet:items-center tablet:flex-row tablet:gap-x-12">
      {HEADER_MENU.map((menu) => (
        <HeaderMenuItem key={menu.label} {...menu} />
      ))}
      <ContactUsButton className="bg-pluto-deep-blue whitespace-nowrap tablet:flex items-center" />
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
