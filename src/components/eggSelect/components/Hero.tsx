import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-gray-100">
        <div className="lg:w-[1033px] md:w-[692px] w-screen px-6">
          <h1 className="mb-2 text-3xl font-black text-gray-700 lg:text-9xl md:text-7xl sm:text-5xl ">
            Taichun Lin
          </h1>
          <p className="mb-10 text-gray-700 lg:text-5xl md:text-3xl sm:text-2xl">
            Frontend Developer
          </p>
          <p className="w-2/3 text-gray-300 lg:w-1/2 lg:text-xl md:text-xl sm:text-lg mb-14">
            A versatile fast learner who is receptive to the new concepts and
            enjoy dabbling in the unexplored spaces between the technology and
            other fileds.
          </p>
        </div>
        {/* <Link
          to="/#"
          className="flex items-center px-10 py-6 text-3xl transition duration-300 ease-in-out bg-gray-300 rounded-full hover:bg-gray-300 animate-bounce "
        >
          Order Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link> */}
      </div>
    </>
  );
};
