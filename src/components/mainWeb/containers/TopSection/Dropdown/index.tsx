import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../../model/NavLinks';

interface Props {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

export const Dropdown: React.FC<Props> = ({
  isDropdownOpen,
  toggleDropdown,
}) => {
  return (
    <div
      className={
        isDropdownOpen
          ? 'grid text-center items-center bg-secondary-50 md:hidden ' +
            `grid-rows-${NavLinks.length}`
          : 'hidden'
      }
      onClick={toggleDropdown}
    >
      {NavLinks.map((NavLink) => (
        <div key={NavLink.name} className="border-b-2 border-bg/50">
          <Link to={NavLink.path} className="p-4 capitalize text-bg ">
            {NavLink.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
