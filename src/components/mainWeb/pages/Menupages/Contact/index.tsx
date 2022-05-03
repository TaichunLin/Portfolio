import { Mailer } from '../../../../EmailJs/Mailer';
import React from 'react';

export const Contact = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center justify-center w-1/2 my-20 ">
        <div className="w-full min-h-screen p-8">
          <div className="mx-auto overflow-hidden shadow-xl rounded-3xl w-max">
            <div className="relative mb-3 bg-gray-700 h-28 rounded-bl-4xl" />
            <Mailer />
          </div>
        </div>
      </div>
    </div>
  );
};
