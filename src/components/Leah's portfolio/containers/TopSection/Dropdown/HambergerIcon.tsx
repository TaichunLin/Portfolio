import React from 'react';

import { MenuAlt3Icon } from '@heroicons/react/solid';

interface Props {
  toggleDropdown: () => void;
}

export const HambergerIcon: React.FC<Props> = ({ toggleDropdown }) => {
  return (
    <div className="flex items-center justify-end w-full md:hidden">
      <div className="w-10 h-10" onClick={toggleDropdown}>
        <MenuAlt3Icon />
      </div>
    </div>
  );
};
