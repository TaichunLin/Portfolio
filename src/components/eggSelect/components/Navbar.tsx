import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  toggle: () => void;
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <nav
      role="navigation"
      className="relative flex items-center justify-between h-16 font-mono text-xl font-bold text-gray-300 bg-gray-100 shadow-sm"
    >
      <Link
        to="/egg"
        className="px-3 pt-3 pb-2 ml-12 font-extrabold text-gray-100 bg-gray-300"
      >
        Leah
        <img src="" alt="" />
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="hidden pr-8 md:block">
        <Link className="p-4" to="/egg">
          Home
        </Link>
        <Link className="p-4" to="/egg/menu">
          Projects
        </Link>
        <Link className="p-4" to="/egg/about">
          About
        </Link>
        <Link className="p-4" to="/egg/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
