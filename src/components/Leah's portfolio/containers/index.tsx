import React from 'react';
import BottomSection from './BottomSection';
import { CenterSection } from './CenterSection';
import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import TopSection from './TopSection';
interface Props {}

export const LeahsPortfolio: React.FC<Props> = () => {
  return (
    <div>
      <div className="flex flex-col bg-bg">
        <TopSection />
        <Routes>
          {/* {NavLinks.map((NavLink) => (
            <Route
              key={NavLink.name}
              path={NavLink.path}
              element={<NavLink.element />}
            />
          ))} */}
        </Routes>
        <CenterSection />
        <BottomSection />
      </div>
      <div>Leah</div>
      <div>Leah</div>
      <div>Leah</div>
      <div>Leah</div>
    </div>
  );
};
