import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../../../mainWeb/model/NavLinks';

import { Logo } from '../Logo';

interface Props {
  toggleSidebar: () => void;
  toggleHome: () => void;
}

export const NavBar: React.FC<Props> = ({
  toggleHome,
  children,
  toggleSidebar,
}) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <nav
      role="navigation"
      className={
        'flex items-center w-screen h-20 px-6 pt-2 shadow-sm' +
        (scrollNav ? 'bg-red' : 'bg-transparent ')
      }
    >
      <Logo toggleHome={toggleHome} />
      {children}
      <ul className="items-center justify-end hidden w-full md:flex">
        <li
          className="p-5 mx-1 font-bold capitalize duration-200 ease-in-out cursor-pointer hover:border-b-4 border-primary-50 active:transition active:bg-white "
          onClick={toggleSidebar}
        >
          toggleSidebar
        </li>
        {NavLinks.map((NavLink) => (
          <div key={NavLink.name}>
            <Link
              to={NavLink.path}
              className="p-5 mx-1 font-bold capitalize duration-200 ease-in-out cursor-pointer hover:border-b-4 border-primary-50 active:transition active:bg-white"
            >
              {NavLink.name}
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};
