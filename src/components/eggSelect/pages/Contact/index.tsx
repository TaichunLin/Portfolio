import React from 'react';
import { Mailer } from '../../../EmailJs/Mailer';

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex justify-center w-screen h-72">
        <p className="font-extrabold md:tracking-widest text-gray-300/25 md:text-[200px] text-9xl ">
          Contacts
        </p>
      </div>
      <div className="w-max lg:w-[600px] mb-20">
        <Mailer />
      </div>
    </div>
  );
};
