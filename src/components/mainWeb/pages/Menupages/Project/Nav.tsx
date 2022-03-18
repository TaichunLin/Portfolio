import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Projects } from '../../../model/Projects';
interface Props {}

const NavLinks = styled(Link)`
  ${tw`font-bold`}
  &.active {
    color: var(--color-bg-rgb);
  }
`;

const NavLinkWrapper = styled.div`
  &:hover {
    border-bottom: 3px solid var(--color-bg-rgb);
  }
`;

const NavItem = styled.li`
  ${tw`flex items-center justify-center p-4 shadow-inner cursor-pointer h-14`}
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
        ' sticky top-0 flex items-center justify-around mt-2 text-center max-w-full ' +
        (scrollNav ? 'bg-secondary-50/50' : 'bg-transparent shadow-inner')
      }
    >
      {Projects.map((project) => (
        <NavItem>
          <NavLinkWrapper>
            <NavLinks
              key={project.name}
              to={project.name}
              smooth={true}
              duration={400}
              spy={true}
              activeClass="active"
            >
              {project.name}
            </NavLinks>
          </NavLinkWrapper>
        </NavItem>
      ))}
      <NavItem>
        <NavLinkWrapper>
          <NavLinks
            to="services"
            smooth={true}
            duration={400}
            spy={true}
            activeClass="active"
          >
            Services
          </NavLinks>
        </NavLinkWrapper>
      </NavItem>
    </ul>
  );
};
