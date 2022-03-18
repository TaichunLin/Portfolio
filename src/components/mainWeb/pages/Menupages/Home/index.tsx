import React from 'react';
import { HeroSection } from '../../../containers/CenterSection/HeroSection';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-800">
        <h1 className="font-black uppercase text-9xl">Home Page</h1>
        <HeroSection />
      </div>
    </>
  );
};
