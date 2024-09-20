'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Nav = () => (
  <div className="flex bg-customGray justify-center text-white sticky top-0 z-[10]">
    <div className="flex max-w-maxc0width justify-center w-full align-center">
      <NavLink text={'Home'} link={'/'} />
      <NavLink text={'About Us'} link={'/about'} />
      <NavLink text={'The Book'} link={'/book'} />
    </div>
  </div>
);

const NavLink = ({ text, link }) => {
  const pathname = usePathname();

  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`p-5 px-0 md:px-12 w-full md:w-auto text-center ${
        isActive ? 'bg-customBlue' : ''
      } hover:bg-customBlue`}
    >
      {text}
    </Link>
  );
};
