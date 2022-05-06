import React from 'react';
import Leah from '../Leah';
import Counter from '../mainWeb/containers/CenterSection/Counter';
import { Home } from '../mainWeb/pages/Menupages/Home';
import { Link } from 'react-router-dom';
interface Props {}

const NavLinks = [
  {
    name: 'portfolio',
    path: '/mainweb',
    subRoute: 'portfolio',
    element: Home,
  },
  {
    name: 'leah',
    path: '/leah',
    subRoute: 'leah',
    element: Leah,
  },
  {
    name: 'counter',
    path: '/counter',
    subRoute: 'counter',
    element: Counter,
  },
];

export const Catelogue: React.FC<Props> = () => {
  return (
    <div>
      <div className="box-border m-0">
        <nav
          role="navigation"
          className={
            ' items-center justify-center w-screen h-screen px-6 pt-2 shadow-sm flex flex-col  md:flex'
          }
        >
          {NavLinks.map((NavLink) => (
            <div key={NavLink.name} className="flex">
              <Link
                to={NavLink.path}
                className="p-5 mx-1 my-8 font-bold capitalize duration-200 ease-in-out bg-green-200 cursor-pointer hover:border-b-4 border-primary-50 active:transition active:bg-white"
              >
                {NavLink.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
