import { Nav } from './Nav';
import { ProjectsInfor } from './ProjectsInfor';
import { Services } from './Services';

import '../../index.css';

export const ProjectsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-screen sm:overflow-hidden">
          <p className="font-extrabold md:tracking-widest text-gray-300/25 md:text-[200px] mb-5 text-7xl">
            Projects
          </p>
          <p className="font-extrabold md:tracking-widest text-gray-300/25 md:text-[200px] text-7xl">
            ▼
          </p>
        </div>
        <Nav />
      </div>
      <ProjectsInfor />
    </>
  );
};
