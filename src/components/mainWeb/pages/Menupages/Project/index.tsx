import { Nav } from './Nav';
import { ProjectsInfor } from './ProjectsInfor';
import { Services } from './Services';

export const ProjectsPage = () => {
  return (
    <>
      <Nav />
      {/* <div className="flex flex-col items-center justify-center ">
        <div className="bg-purple-300">
          <h1 className="font-black uppercase">Project Page 滑過來滑過去！</h1>
        </div>
      </div> */}
      <Services />
      <ProjectsInfor />
    </>
  );
};
