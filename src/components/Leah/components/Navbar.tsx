import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';

interface Props {}
const socialInfos = [
  {
    name: 'Github',
    icon: FaGithub,
    href: 'https://github.com/TaichunLin',
  },
  {
    name: 'Linkedin',
    icon: FaLinkedin,
    href: 'http://www.linkedin.com/in/helloleah23',
  },
];
const Navbar: React.FC<Props> = () => {
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown: () => void = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky top-0 z-50">
      <nav
        role="navigation"
        className={
          'flex items-center justify-between h-16 font-mono text-xl font-bold text-gray-300  shadow-sm ' +
          (scrollNav ? 'bg-transparent' : 'bg-gray-100')
        }
      >
        <div className="flex items-center space-x-2 ">
          <Link
            to="/leah"
            className="px-3 pt-3 pb-2 ml-3 font-extrabold text-gray-100 bg-gray-300 md:ml-12 hover:bg-gray-700"
          >
            Leah
          </Link>
          {socialInfos.map((socialInfo) => (
            <div key={socialInfo.name} className="">
              <a
                className="text-3xl hover:text-gray-700"
                href={socialInfo.href}
                target="_blank"
                aria-label={socialInfo.name}
              >
                <socialInfo.icon />
              </a>
            </div>
          ))}
        </div>

        <div className="hidden bg-red-500 md:block">
          <div className="fixed top-1 right-36">
            <div className="flex items-center justify-center p-2 transition duration-1000 ease-in-out bg-gray-300 rounded-full w-14 h-14 hover:border-double hover:border-8 ">
              <p className="p-2 font-medium text-gray-300 transition duration-1000 ease-in-out rounded-full cursor-cell hover:text-gray-300 hover:border-x-8">
                helloleah23@gmail.com
              </p>
            </div>
          </div>
          <div className="fixed top-1 right-36">
            <div className="flex items-center justify-center p-2 overflow-hidden font-medium text-gray-100 transition duration-300 ease-in-out rounded-full w-14 h-14 hover:overflow-visible hover:bg-gray-100 hover:border-8 hover:border-double hover:text-gray-300">
              <p>helloleah23@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleDropdown}>
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
        <div className="hidden pr-8 mr-72 md:block">
          <div className="flex flex-row">
            <Link className="px-1 lg:p-4 hover:text-gray-700" to="/leah/about">
              About
            </Link>
            <Link
              className="px-1 lg:p-4 hover:text-gray-700"
              to="/leah/projects"
            >
              Projects
            </Link>
            <Link
              className="px-1 lg:p-4 hover:text-gray-700"
              to="/leah/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Dropdown toggle={toggleDropdown} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
