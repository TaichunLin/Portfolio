import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Projects } from '../../../model/Projects';
interface Props {}

const NavLinks = styled(Link)`
  ${tw`font-bold`}
  &.active {
    // border-bottom: 3px solid #01bf71;
    color: var(--color-bg-rgb);
  }
`;

export const Nav: React.FC<Props> = () => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <ul
      className={
        ' sticky top-0 flex items-center justify-around mt-2 text-center ' +
        (scrollNav ? 'bg-secondary-50/50' : 'bg-transparent')
      }
    >
      {Projects.map((project) => (
        <li
          key={project.name}
          className={
            ' p-4 duration-300 cursor-pointer h-14 flex items-center justify-center'
          }
        >
          <div className="hover:border-b-[3px] border-primary-50 ">
            <NavLinks
              to={project.name}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              {project.name}
            </NavLinks>
          </div>
        </li>
      ))}
    </ul>
  );
};
