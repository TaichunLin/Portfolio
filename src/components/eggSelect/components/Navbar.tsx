import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';

interface Props {
  toggle: () => void;
}
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
const Navbar: React.FC<Props> = ({ toggle }) => {
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
        'sticky top-0 flex items-center justify-between h-16 font-mono text-xl font-bold text-gray-300 shadow-sm ' +
        (scrollNav ? 'bg-transparent' : 'bg-gray-100')
      }
    >
      <div className="flex items-center space-x-2 ">
        <Link
          to="/egg"
          className="px-3 pt-3 pb-2 ml-12 font-extrabold text-gray-100 bg-gray-300"
        >
          Leah
          <img src="" alt="" />
        </Link>
        {socialInfos.map((socialInfo) => (
          <div key={socialInfo.name} className="">
            <a
              className="text-3xl"
              href={socialInfo.href}
              target="_blank"
              aria-label={socialInfo.name}
            >
              <socialInfo.icon />
            </a>
          </div>
        ))}
      </div>

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
        <Link className="p-4" to="/egg/projects">
          Projects
        </Link>
        <Link className="p-4" to="/egg/about">
          About
        </Link>
        <Link className="p-4" to="/egg/contact">
          Contact
        </Link>
        <span className="px-4 -mb-2 font-normal ">
          {' '}
          - helloleah23@gmail.com
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
