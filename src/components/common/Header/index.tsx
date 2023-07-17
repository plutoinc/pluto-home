import { HOME_PATH } from "@/routes";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import MaxWidth from "../MaxWidth";
import HeaderRightMenu from "./Menu";
import { HeaderMenu } from "./constant";
import HeaderToggle from "./Menu/Toggle";
import { useRouter } from "next/router";

const PlutoLogo: FC = () => {
  return (
    <div>
      <Link
        href={HOME_PATH}
        className="h-8 w-24 flex-1 bg-pluto-blue inline-block text-white text-center"
      >
        Pluto
      </Link>
    </div>
  );
};

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
    <div className="sticky top-0 bg-white z-50">
      <MaxWidth
        className={twMerge(
          "py-6 px-6 gap-12 flex items-center tablet:h-20",
          isMobileMenuOpen && "flex-col text-center tablet:flex-row"
        )}
      >
        <div className="flex items-center justify-between w-full">
          <PlutoLogo />
          <HeaderToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
        <HeaderRightMenu isOpen={isMobileMenuOpen} />
      </MaxWidth>
    </div>
  );
};

export default Header;
