import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {}

const footerLinks = [
  {
    name: 'About Me',
    link: [
      {
        title: 'Our Aim',
        path: '/',
      },
      {
        title: 'sit amet',
        path: '/',
      },
    ],
  },
  {
    name: 'Contact',
    link: [
      {
        title: 'Our Aim',
        path: '/',
      },
      {
        title: 'sit amet',
        path: '/',
      },
      {
        title: 'Lorem',
        path: '/',
      },
    ],
  },
  {
    name: 'Social Media',
    link: [
      {
        title: 'Our Aim',
        path: '/',
      },
      {
        title: 'sit amet',
        path: '/',
      },
      {
        title: 'Lorem',
        path: '/',
      },
    ],
  },
  {
    name: 'Terms & Policies',
    link: [
      {
        title: 'Our Aim',
        path: '/',
      },
      {
        title: 'sit amet',
        path: '/',
      },
      {
        title: 'Lorem',
        path: '/',
      },
      {
        title: 'sit amet',
        path: '/',
      },
    ],
  },
];

export const Links: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-2 gap-0 sm:gap-4 sm:pt-4 sm:grid-cols-4 ">
      {footerLinks.map((footerLink) => (
        <div
          key={footerLink.name}
          className="flex flex-col pt-8 pb-2 m-0 text-center sm:pl-1 sm:text-left sm:m-2 md:m-6 "
        >
          <h1 className="mb-4 text-lg font-bold capitalize text-primary-50">
            {footerLink.name}
          </h1>

          {footerLink.link.map((item, index) => (
            <Link
              key={index}
              className="flex flex-col duration-300 ease-out delay-100 hover:uppercase hover:text-bg"
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
// ease-out hover:duration-1000 hover:ease-out hover:transition
