import React from 'react';
import { Content } from '../components/Content';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center ">
        <hr className="w-1/2" />
      </div>
      <Content />
    </>
  );
};
