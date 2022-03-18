import { AboutMe } from '../pages/Menupages/AboutMe/index';
import { Contact } from '../pages/Menupages/Contact/index';
import { ProjectsPage } from '../pages/Menupages/Project/index';

export const NavLinks = [
  {
    name: 'about me',
    path: '/about-me',
    subRoute: 'about-me',
    element: AboutMe,
  },
  {
    name: 'contact',
    path: '/contact',
    subRoute: 'contact',
    element: Contact,
  },
  {
    name: 'projects',
    path: '/projects',
    subRoute: 'projects',
    element: ProjectsPage,
  },
];
