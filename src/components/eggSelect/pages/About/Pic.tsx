import { useState } from 'react';
import { Lingoda } from '../../model/AboutMe';

interface Props {}

export const Pic: React.FC<Props> = () => {
  return (
    <div className="w-full p-10 bg-gray-700 rounded-lg shadow-xl min-h-1/2">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10">
          <span className="mb-5 text-2xl font-black text-gray-100">
            {' '}
            Ｍy photography ☺
          </span>
          <hr />
        </div>
        <p className="text-gray-100 underline transition-all duration-300 ease-in-out text-md underline-offset-1">
          ✨ business collaboration with {''}
          <a
            className="bg-gray-700 cursor-pointer"
            href="https://www.pinkoi.com/store/lanfanglinillustration"
            target="_blank"
            aria-label="business collaboration with LanfangLin Illustration"
          >
            LanfangLin Illustration
          </a>
        </p>
        {/* <div className="w-2/3 mb-10 text-sm transition duration-200 ease-in-out ">
          <div className="flex flex-col overflow-scroll bg-gray-300 rounded-lg h-96 scroll-smooth snap-y snap-mandatory">
            {Lingoda.map((feedback) => (
              <div
                key={feedback.id}
                className=" flex flex-col shadow-md m-5 transition duration-200 ease-in-out  bg-gray-700/70 rounded-lg cursor-pointer hover:scale-[1.02] p-7 w-fit flex-shrink-0 snap-always snap-center"
              >
                <p className="text-left text-gray-100">{feedback.descr}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
