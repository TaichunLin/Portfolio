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
        isOpen ? ' mb-40 flex flex-col opacity-95 md:hidden' : 'hidden'
      }
      onClick={toggle}
    >
      <div className="pt-16 mx-10 bg-gray-300 rounded-full md:hidden">
        {navLinks.map((NavLink) => (
          <div
            key={NavLink.name}
            className="grid items-center grid-rows-3 text-center "
          >
            <div className="">
              <Link
                to={NavLink.path}
                className="p-2 m-8 mx-1 text-2xl font-black text-gray-100 capitalize transition duration-200 ease-in-out border-gray-100 cursor-pointer hover:border-b-4"
              >
                {NavLink.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div
          className={isOpen ? 'relative md:hidden' : 'hidden'}
          onClick={toggle}
        >
          <div
            className={
              isOpen ? 'absolute -translate-x-1/2 left-1/2 md:hidden' : 'hidden'
            }
            onClick={toggle}
          >
            <div className="flex items-center justify-center w-20 h-20 p-6 transition duration-1000 ease-in-out bg-gray-300 rounded-full hover:border-double hover:border-8 ">
              <p className="p-6 text-2xl font-black text-gray-300 transition duration-1000 ease-in-out rounded-full cursor-cell hover:text-gray-300 hover:border-x-8">
                helloleah23@gmail.com
              </p>
            </div>
          </div>
          <div
            className={
              isOpen ? 'absolute -translate-x-1/2 left-1/2 md:hidden' : 'hidden'
            }
            onClick={toggle}
          >
            <div className="flex items-center justify-center w-20 h-20 p-6 overflow-hidden text-gray-100 transition duration-300 ease-in-out rounded-full hover:overflow-visible hover:bg-gray-100 hover:border-8 hover:border-double hover:text-gray-300 hover:w-full">
              <p className="text-2xl font-black ">helloleah23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
