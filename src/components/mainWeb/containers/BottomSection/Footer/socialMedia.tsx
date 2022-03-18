import React from 'react';
import { SocialIcons } from './SocialIcons';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
interface Props {}

export const SocialMedia: React.FC<Props> = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 cursor-pointer">
        <Link to="/scroll" onClick={toggleHome} className="text-2xl font-bold">
          Leah
        </Link>
      </div>
      <small className="mb-1 tracking-wide capitalize">
        copyright © {new Date().getFullYear()} leah All rights reserved.
      </small>
      <SocialIcons />
    </div>
  );
};
