import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const navLinks = [
  {
    name: 'About',
    path: '/leah/about',
  },
  {
    name: 'Projects',
    path: '/leah/projects',
  },
  {
    name: 'Contact',
    path: '/leah/contact',
  },
];

export const Dropdown: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? ' bg-gray-300/80 md:hidden pt-16 rounded-full mx-10' : 'hidden'
      }
      onClick={toggle}
    >
      {navLinks.map((NavLink) => (
        <div
          key={NavLink.name}
          className="grid items-center grid-rows-3 text-center "
        >
          <div className="">
            <Link
              to={NavLink.path}
              className="p-2 m-8 mx-1 text-2xl font-black text-gray-100 capitalize duration-200 ease-in-out border-gray-100 cursor-pointer hover:border-b-4"
            >
              {NavLink.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
