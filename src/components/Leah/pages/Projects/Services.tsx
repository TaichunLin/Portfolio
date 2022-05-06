import React from 'react';
import { SideProjects } from '../../model/SideProjects';

interface Props {}

export const Services: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col justify-center h-auto bg-secondary-100"
      id="services"
    >
      <h1 className="text-5xl text-center mt-14 sm:text-7xl">Our Services</h1>
      <div
        className={`grid max-w-full  mx-auto py-0 px-5 my-0 grid-cols-1 sm:grid-cols-${Math.floor(
          SideProjects.length / 2,
        )} sm:px-12 lg:grid-cols-${SideProjects.length}`}
      >
        {SideProjects.map((project) => (
          <div
            key={project.id}
            className=" flex flex-col shadow-md items-center  m-5 transition duration-200 ease-in-out bg-bg rounded-lg cursor-pointer hover:scale-[1.02] p-7 "
          >
            <div className={'mb-2 h-40 w-40'}>???</div>
            <p className="mb-3 font-bold sm:text-4xl">{project.name}</p>
            <p className="text-center ">{project.descr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// <ServicesCard>
//   <ServicesIcon src={Icon1} />
//   <ServicesH2>Reduce expenses</ServicesH2>
//   <ServiceP>
//     at e, nulla, aut expedita pariatur exercitationem, cupiditate
//   </ServiceP>
// </ServicesCard>;
