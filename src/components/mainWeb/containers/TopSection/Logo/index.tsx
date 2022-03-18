import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  toggleHome: () => void;
}

export const Logo: React.FC<Props> = ({ toggleHome }) => {
  return (
    <div className="z-50 ml-2 cursor-pointer " onClick={toggleHome}>
      <span className="relative bg-primary-50">
        <span
          className="absolute block -skew-y-3 shadow-lg bg-primary-50 -inset-5"
          aria-hidden="true"
        ></span>
        <Link
          to="/"
          className="relative text-2xl italic font-black uppercase font-cd"
        >
          Leah
        </Link>
      </span>
    </div>
  );
};
