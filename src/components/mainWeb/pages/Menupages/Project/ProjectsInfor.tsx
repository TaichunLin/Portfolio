import React from 'react';
import tw from 'twin.macro';
import { ButtonSoft } from '../../../../button/ButtonSoft';
import { Projects } from '../../../model/Projects';

interface Props {}

const Column = tw.div`
sm:w-1/2 px-4 mb-4 
`;

export const ProjectsInfor: React.FC<Props> = () => {
  return (
    <div className="">
      {Projects.map((project) => (
        <div
          className={
            'py-0 w-screen bg-yellow-500 ' +
            (project.lightBg ? 'bg-bg' : 'bg-secondary-100')
          }
          id={project.id}
          key={project.name}
        >
          <div className="flex items-center justify-center px-6 mx-auto h-screen max-w-[1100px] ">
            <div
              className={
                'w-full h-full flex flex-col items-center justify-center sm:flex-row  ' +
                (project.imgStart && 'sm:flex-row-reverse')
              }
            >
              <Column>
                <div className="w-full max-w-xl pb-14 tp-0">
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
              </Column>
              <Column>
                <div className={'mb-2 h-full max-w-md'}>
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full pr-0 mt-2 "
                  />
                </div>
              </Column>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
// grid-flow-col auto-cols-max
