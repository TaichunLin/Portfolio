import React from 'react';
import { First } from './First';
import { Second } from './Second';

export const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center h-screen p-40 md:flex-row">
        <p className="md:p-10 font-extrabold md:tracking-widest text-gray-300/25 lg:text-[200px]  text-9xl md:w-1/2 ">
          About Leah
        </p>
        <p className="">
          My diverse experience enables me to gain actionable insights by
          comparing trends and identifying technology potential across different
          sectors, in turn providing myself with tools and knowledge for growth.
          -Lingoda -Hobbis/Photography -Zion
        </p>
      </div>
      <First />
      <Second />
    </div>
  );
};
