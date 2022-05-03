import React from 'react';
import tw from 'twin.macro';
import { ButtonSoft } from '../../../button/ButtonSoft';
import { SideProjects } from '../../model/Projects';
import { Services } from './Services';

interface Props {}

export const ProjectsInfor: React.FC<Props> = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1033px] ">
        {SideProjects.map((project) => (
          <div
            className={
              ' py-0 ' +
              (project.lightBg
                ? 'border-2 border-dashed'
                : 'border-8 border-double')
            }
            id={project.id}
            key={project.name}
          >
            <div className="flex items-center justify-center px-6 mx-auto h-screen max-w-[1033px] ">
              <div
                className={
                  'w-full h-full flex flex-col items-center justify-center sm:flex-row  ' +
                  (project.imgStart && 'sm:flex-row-reverse')
                }
              >
                <div className="px-4 mb-4 sm:w-full ">
                  <div className="w-full pb-14 tp-0">
                    <p className="mb-4 font-extrabold uppercase text-md text-primary-50">
                      {project.topLine}
                    </p>
                    <h1
                      className={
                        'text-3xl sm:text-5xl mb-12 font-black leading-none text-shadow-lg ' +
                        (project.lightBg ? 'text-black' : 'text-white')
                      }
                    >
                      {project.headline}
                    </h1>
                    <p
                      className={
                        'max-w-md text-lg mb-9 ' +
                        (project.lightBg ? 'text-black' : 'text-white')
                      }
                    >
                      {project.descr}
                    </p>
                    <ButtonSoft
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      className={
                        project.lightBg
                          ? 'text-bg bg-secondary-50 hover:text-primary-50'
                          : ' text-secondary-50 bg-primary-50 hover:text-bg'
                      }
                    >
                      {project.buttonLabel}
                    </ButtonSoft>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Services />
      </div>
    </div>
  );
};
// grid-flow-col auto-cols-max
