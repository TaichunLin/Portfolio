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
            <div key={NavLink.name} className="flex ">
              <div className="h-20 my-2 ">
                <Link
                  to={NavLink.path}
                  className="p-2 m-8 mx-1 text-2xl font-black text-gray-300 capitalize duration-200 ease-in-out border-gray-300 cursor-pointer hover:border-b-4 "
                >
                  {NavLink.name}
                </Link>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
