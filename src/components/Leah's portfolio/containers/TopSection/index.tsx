import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { HambergerIcon } from './Dropdown/HambergerIcon';
import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from '@heroicons/react/outline';
import { animateScroll as scroll } from 'react-scroll';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';

const TopSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isHomeOpen, setIsHomeOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleSidebar: () => void = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleHome: () => void = () => {
    setIsHomeOpen(!isHomeOpen);
  };
  const toggleDropdown: () => void = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUp = () => {
    scroll.scrollToTop();
  };
  const toggleDown = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="max-w-full ">
      <NavBar toggleSidebar={toggleSidebar} toggleHome={toggleHome}>
        <HambergerIcon toggleDropdown={toggleDropdown} />
      </NavBar>
      <Dropdown
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />
      <SideBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="fixed z-50 m-2 cursor-pointer bottom-16 w-14 h-14 right-4 text-secondary-50/70">
        <div onClick={toggleUp}>
          <ArrowCircleUpIcon />
        </div>
        <div onClick={toggleDown}>
          <ArrowCircleDownIcon />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
