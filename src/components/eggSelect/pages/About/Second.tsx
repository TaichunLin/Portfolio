import React, { useState } from 'react';
import { AfterCollege, Experience } from '../../model/AboutMe';
import { Dialog } from './Lingoda';

interface Props {}

export const Second: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="grid grid-rows-3 gap-4 m-20 divide-x md:grid-flow-col max-w-screen divide-slate-700">
        <div className="md:max-w-[400px] row-span-3 p-5 my-5 font-extrabold text-7xl md:ml-20 md:text-right  text-gray-300">
          College and after
        </div>
        <div className="px-10 py-5 m-5 text-lg leading-relaxed bg-transparent text-gray-700/25 md:ml-20 md:col-span-2 md:min-w-4xl indent-8 bg-slate-400">
          <p className="font-extrabold text-gray-300">in college</p>
          <hr className="mb-4" />
          {Experience.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col items-center rounded-lg lg:mx-5 p-7"
            >
              <p className="mb-3 font-bold sm:text-4xl">
                {experience.headline}
              </p>
              <p className="p-2">{experience.descr}</p>
            </div>
          ))}
        </div>
        <div className="px-10 py-5 m-5 text-lg leading-relaxed bg-transparent text-gray-700/25 md:ml-20 md:col-span-2 md:min-w-4xl indent-8 h-fit">
          <p className="font-extrabold text-gray-300">after college</p>
          <hr className="mb-4" />
          {AfterCollege.map((detail) => (
            <div key={detail.id} className="flex flex-col m-5 p-7">
              <p className="p-2">{detail.descr}</p>
              <p
                className="underline transition-all duration-300 ease-in-out cursor-pointer text-md underline-offset-1 "
                onClick={openModal}
              >
                {detail.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <Dialog closeModal={closeModal} />}
    </div>
  );
};
