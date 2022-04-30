import React from 'react';
import BottomSection from './containers/BottomSection';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CenterSection } from './containers/CenterSection';
import TopSection from './containers/TopSection';
import './index.css';

import { NavLinks } from './model/NavLinks';
import { Home } from './pages/Menupages/Home';

export const MainWeb = () => {
  return (
    <div className="flex flex-col my-0 bg-bg">
      <TopSection />
      <Routes>
        <Route
          path="*"
          element={
            <main className="h-screen p-10 center">
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}

        <Route path="/" element={<Home />} />

        {NavLinks.map((NavLink) => (
          <Route
            key={NavLink.name}
            path={NavLink.path}
            element={<NavLink.element />}
          />
        ))}
      </Routes>
      <CenterSection />
      <BottomSection />
    </div>
  );
};
