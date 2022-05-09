import React, { useState } from 'react';
import { AfterCollege, Experience } from '../../model/AboutMe';
import { Dialog } from './Lingoda';
import { Pic } from './Pic';

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
      <div className="grid grid-rows-2 gap-4 m-20 divide-x xl:grid-flow-col max-w-screen divide-slate-700 h-fit">
        <div className="2xl:max-w-[400px] xl:max-w-[200px] row-span-2 p-5 my-5 font-extrabold text-7xl xl:mx-10 2xl:ml-20 xl:text-right  text-gray-300">
          Before I started coding and after
        </div>
        <div className="px-10 py-5 m-5 text-lg leading-relaxed bg-transparent text-gray-700/25 md:ml-20 md:col-span-2 md:min-w-4xl indent-8 h-fit">
          <p className="font-extrabold text-gray-300">
            Before I staretd coding
          </p>
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
              <p
                className={
                  experience.extra
                    ? 'self-start  text-gray-700 underline text-md underline-offset-1 '
                    : 'hidden'
                }
              >
                {experience.extra}
                <a
                  className="px-2 text-gray-700 bg-gray-300 rounded-full cursor-pointer"
                  href={experience.url}
                  target="_blank"
                  aria-label="business collaboration with LanfangLin Illustration"
                >
                  {experience.click}
                </a>
              </p>
            </div>
          ))}
          {/* <Pic /> */}
        </div>
        <div className="px-10 py-5 m-5 text-lg leading-relaxed bg-transparent text-gray-700/25 md:ml-20 md:col-span-2 md:min-w-4xl indent-8 h-fit lg:-mt-30">
          <p className="font-extrabold text-gray-300">Coding journey</p>
          <hr className="mb-4" />
          {AfterCollege.map((detail) => (
            <div key={detail.id} className="flex flex-col m-5 p-7">
              <p className="p-2">{detail.descr}</p>
              <p
                className="text-gray-700 underline transition-all duration-300 ease-in-out cursor-pointer text-md underline-offset-1 "
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
