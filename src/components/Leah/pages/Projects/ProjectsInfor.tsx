import React from 'react';
import { ButtonLink } from '../../../button/ButtonSoft';
import { SideProjects } from '../../model/SideProjects';
import Furniture from '../../videos/furniture.mp4';
import mcDonald from '../../videos/mcdonald.mp4';
import door from '../../videos/door.mp4';

interface Props {}

export const ProjectsInfor: React.FC<Props> = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[1033px] ">
        {SideProjects.map((project) => (
          <div
            className={
              ' py-0 ' +
              (project.border
                ? 'border-t-2 border-dashed'
                : 'border-t-8 border-double')
            }
            id={project.id}
            key={project.name}
          >
            <div
              className="flex items-center justify-center px-6 2xl:h-screen h-full 2xl:py-1
            py-10 mx-auto max-w-[1033px] "
            >
              <div
                className={
                  'w-full h-full flex flex-col items-center justify-center sm:flex-row  ' +
                  (project.imgStart && 'sm:flex-row-reverse')
                }
              >
                <div className="px-4 sm:w-full ">
                  <div className="flex flex-col justify-center w-full ">
                    <p className="font-extrabold text-gray-700 uppercase text-md">
                      {project.topLine}
                    </p>
                    <div className="py-2 pr-40 ">
                      <p
                        className={
                          'font-extrabold text-gray-300 text-2xl sm:text-5xl mb-2 '
                        }
                      >
                        {project.headline}
                      </p>
                      <hr className="mb-8 border-4 border-solid " />
                    </div>
                    <p
                      className={
                        'max-w-2xl text-lg mb-9 leading-relaxed text-gray-700/25 indent-8 '
                      }
                    >
                      {project.descr}
                    </p>
                    <ButtonLink
                      href={project.buttonLink}
                      target="_blank"
                      aria-label={project.buttonLabel}
                      className={
                        project.button
                          ? 'w-fit text-gray-700/90 bg-gray-300 hover:text-gray-100 hover:bg-gray-700'
                          : 'hidden'
                      }
                    >
                      {project.buttonLabel}
                    </ButtonLink>
                    <div>
                      <div
                        className={
                          project.door ? 'video-responsive2' : 'hidden'
                        }
                      >
                        <iframe
                          src={door}
                          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={project.alt}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        project.furniture ? 'video-responsive ' : 'hidden'
                      }
                    >
                      <iframe
                        src={Furniture}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.alt}
                      />
                    </div>
                    <div
                      className={
                        project.mcDonald ? 'video-responsive ' : 'hidden'
                      }
                    >
                      <iframe
                        src={mcDonald}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.alt}
                      />
                    </div>

                    <a
                      href={project.buttonLink}
                      className={project.link ? '' : 'hidden'}
                    >
                      <img
                        alt="W3Schools"
                        src={project.link}
                        className="shadow-md responsive"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
