import { Nav } from './Nav';
import { ProjectsInfor } from './ProjectsInfor';
import { Services } from './Services';

export const ProjectsPage = () => {
  return (
    <>
      <div className="bg-orange-400 ">
        <Nav />
      </div>
      <ProjectsInfor />
    </>
  );
};
