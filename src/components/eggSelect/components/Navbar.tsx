import React from "react";

import { Link } from "react-router-dom";

interface Props {
  toggle: () => void;
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <nav
      role="navigation"
      className="font-mono text-black bg-gray-100 flex justify-between items-center h-16 relative shadow-sm"
    >
      <Link to="/egg" className="pl-8">
        EGG
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/egg">
          Home
        </Link>
        <Link className="p-4" to="/menu">
          Menu
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
