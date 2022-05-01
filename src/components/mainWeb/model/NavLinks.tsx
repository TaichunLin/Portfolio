import { AboutMe } from '../pages/Menupages/AboutMe/index';
import { Contact } from '../pages/Menupages/Contact/index';
import { ProjectsPage } from '../pages/Menupages/Project/index';

export const NavLinks = [
  {
    name: 'about me',
    path: '/about-me',
    link: '/mainweb/about-me',
    element: AboutMe,
  },
  {
    name: 'contact',
    path: '/contact',
    link: '/mainweb/contact',
    element: Contact,
  },
  {
    name: 'projects',
    path: '/projects',
    link: '/mainweb/projects',
    element: ProjectsPage,
  },
];
