import React from 'react';
import { Mailer } from '../../../EmailJs/Mailer';

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col items-center justify-center w-screen h-40 mb-10 overflow-hidden nd:mb-0 md:h-72">
        <p className="font-extrabold tracking-widest text-gray-300/25 md:text-[200px] text-8xl ">
          Contact
        </p>
        <p className="px-4 -mt-5 font-normal tracking-widest text-gray-300">
          {' '}
          - helloleah23@gmail.com
        </p>
      </div>
      <div className="w-max lg:w-[600px] mb-20">
        <Mailer />
      </div>
    </div>
  );
};
