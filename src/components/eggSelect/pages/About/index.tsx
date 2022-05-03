import React from 'react';
import { First } from './First';
import { Second } from './Second';

export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-40 md:flex-row">
        <p className="p-40 md:p-20 font-extrabold md:tracking-widest text-gray-300/25 lg:text-[200px]  text-9xl ">
          About Leah
        </p>
        <p>
          My diverse experience enables me to gain actionable insights by
          comparing trends and identifying technology potential across different
          sectors, in turn providing myself with tools and knowledge for growth.
          -Lingoda -Hobbis/Photography -Zion
        </p>
      </div>
      <First />
      <Second />
    </>
  );
};
