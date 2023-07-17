import PlutoLogoIcon from "@/components/icons/PlutoLogoIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import MaxWidth from "../MaxWidth";
import HeaderRightMenu from "./Menu";
import HeaderToggle from "./Menu/Toggle";
import { HeaderMenu } from "./constant";
import { HOME_PATH } from "@/routes";

const HeaderMenu: FC<HeaderMenu> = ({ href, label }) => {
  return (
    <Link href={href} className="text-sm font-medium leading-6">
      {label}
    </Link>
  );
};

const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuState = () => {
      setIsMobileMenuOpen(false);
    };
    router.events.on("routeChangeComplete", closeMenuState);

    return () => router.events.off("routeChangeComplete", closeMenuState);
  }, [router.events]);

  return (
    <nav className="sticky z-50 block">
      <MaxWidth
        className={twMerge(
          "py-6 px-6 gap-12 flex items-center tablet:h-20",
          isMobileMenuOpen && "flex-col text-center tablet:flex-row"
        )}
      >
        <div className="flex items-center justify-between w-full">
          <Link href={{ pathname: HOME_PATH }}>
            <PlutoLogoIcon color="blue" className="w-24" />
          </Link>
          <HeaderToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
        <HeaderRightMenu isOpen={isMobileMenuOpen} />
      </MaxWidth>
    </nav>
  );
};

export default Header;
