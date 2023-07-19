import PlutoLogoIcon from '@/components/icons/PlutoLogoIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import MaxWidth from '../MaxWidth';
import HeaderRightMenu from './Menu';
import HeaderToggle from './Menu/Toggle';
import { HeaderMenu } from './constant';
import { HOME_PATH } from '@/routes';

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
    router.events.on('routeChangeComplete', closeMenuState);

    return () => router.events.off('routeChangeComplete', closeMenuState);
  }, [router.events]);

  return (
    <nav className="sticky z-50 block text-gray-800 shadow-sm">
      <MaxWidth
        className={twMerge(
          'flex items-center gap-12 px-6 py-6 tablet:h-20',
          isMobileMenuOpen && 'flex-col text-center tablet:flex-row'
        )}
      >
        <div className="flex w-full items-center justify-between">
          <Link href={{ pathname: HOME_PATH }}>
            <PlutoLogoIcon color="blue" className="w-24" />
          </Link>
          <HeaderToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((prev) => !prev)} />
        </div>
        <HeaderRightMenu isOpen={isMobileMenuOpen} />
      </MaxWidth>
    </nav>
  );
};

export default Header;
