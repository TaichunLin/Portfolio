import React from 'react';
import { FeatureSections } from '../../../containers/CenterSection/FeatureSections';

export const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
      <h1 className="font-black uppercase text-9xl">About Page</h1>
      <FeatureSections />
    </div>
  );
};
