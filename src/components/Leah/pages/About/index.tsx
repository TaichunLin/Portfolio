import React from 'react';
import { First } from './First';
import { Second } from './Second';

export const About = () => {
  return (
    <div className="flex flex-col 2xl:px-10 ">
      <div className="flex flex-col items-center justify-center h-screen p-40 md:flex-row">
        <p className="md:p-10 font-extrabold md:tracking-widest text-gray-300/25 lg:text-[200px] 2xl:text-[300px] text-9xl md:w-1/2 ">
          About Leah
        </p>
        <p className="2xl:pr-20">
          My diverse experience enables me to gain actionable insights by
          comparing trends and identifying technology potential across different
          sectors, in turn providing me with tools and knowledge for growth.
        </p>
      </div>
      <First />
      <Second />
    </div>
  );
};
