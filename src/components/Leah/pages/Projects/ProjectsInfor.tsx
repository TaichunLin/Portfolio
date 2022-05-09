import React from 'react';
import tw from 'twin.macro';
import { ButtonLink } from '../../../button/ButtonSoft';
import { SideProjects } from '../../model/SideProjects';
import { Services } from './Services';
import Furniture from '../../videos/furniture.mp4';
import mcDonald from '../../videos/mcdonald.mp4';
import pic from '../../images/aboutMe.jpg';

interface Props {}

export const ProjectsInfor: React.FC<Props> = () => {
  return (
    <div className="flex justify-center">
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
            <div className="flex items-center justify-center px-6 mx-auto h-screen max-w-[1033px] ">
              <div
                className={
                  'w-full h-full flex flex-col items-center justify-center sm:flex-row  ' +
                  (project.imgStart && 'sm:flex-row-reverse')
                }
              >
                <div className="px-4 mb-4 sm:w-full ">
                  <div className="w-full pb-14 tp-0">
                    <p className="mb-4 font-extrabold text-gray-700 uppercase text-md">
                      {project.topLine}
                    </p>
                    <div className="py-4 pr-40">
                      <p
                        className={
                          'font-extrabold text-gray-300 text-2xl sm:text-5xl mb-4 '
                        }
                      >
                        {project.headline}
                      </p>
                      <hr className="mb-8 border-4 border-solid " />
                    </div>
                    <p
                      className={
                        'max-w-md text-lg mb-9 leading-relaxed text-gray-700/25 indent-8 '
                      }
                    >
                      {project.descr}
                    </p>
                    {/* <div
                      className={
                        project.furniture ? 'video-responsive ' : 'hidden'
                      }
                    >
                      <iframe
                        src={Furniture}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.alt}
                      />
                    </div> */}
                    <a href="https://www.w3schools.com">
                      <img
                        alt="W3Schools"
                        src={project.link}
                        width="200"
                        height="200"
                      />
                    </a>

                    <ButtonLink
                      href={project.buttonLink}
                      target="_blank"
                      aria-label={project.buttonLabel}
                      className={
                        project.button
                          ? 'text-secondary-50 bg-gray-300 hover:text-gray-100 hover:bg-gray-700'
                          : 'hidden'
                      }
                    >
                      {project.buttonLabel}
                    </ButtonLink>
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
