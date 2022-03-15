import React, { useState } from 'react';

import { NavBar } from '../../components/NavBar';
import { SideBar } from '../../components/SideBar';

const TopSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen max-w-full bg-bg">
      <NavBar toggle={toggle} />
      <SideBar toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default TopSection;
