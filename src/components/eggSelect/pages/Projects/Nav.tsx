import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { SideProjects } from '../../model/Projects';

interface Props {}

const NavLinks = styled(Link)`
  ${tw`p-3 font-bold`}
  &.active {
    color: #f3f4f6;
    background-color: #d1d5db;
  }
`;

const NavLinkWrapper = styled.div`
  &:hover {
    color: #d1d5db;
  }
`;

const NavItem = styled.li`
  ${tw`flex items-center justify-center p-4 text-gray-500 cursor-pointer h-14`}
`;

export const Nav: React.FC<Props> = () => {
  return (
    <div className="lg:fixed lg:right-60 lg:top-1/3">
      <ul className="flex flex-col items-center justify-center mt-2 text-center ">
        {SideProjects.map((project) => (
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
    </div>
  );
};
