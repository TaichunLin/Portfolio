import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  isOpen: boolean;
  toggle: () => void;
}
export const Dropdown: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500 md:hidden'
          : 'hidden'
      }
      onClick={toggle}
    >
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
  );
};
