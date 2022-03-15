import React from 'react';
import BottomSection from './containers/BottomSection';
import TopSection from './containers/TopSection';
import './index.css';

export const MainWeb = () => {
  return (
    <div className="flex flex-col">
      <TopSection />
      <BottomSection />
    </div>
  );
};
