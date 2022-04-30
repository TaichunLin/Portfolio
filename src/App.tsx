import React from 'react';
import Egg from './components/eggSelect';
import { MainWeb } from './components/mainWeb';
import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/mainWeb/containers/CenterSection/Counter';
import { Home } from './components/mainWeb/pages/Menupages/Home';
import { Catelogue } from './components/catelogue';

function App() {
  return (
    <>
      <Routes>
        <Route path="/mainweb" element={<MainWeb />} />
        <Route path="/" element={<Catelogue />} />
        <Route path="/catelogue" element={<Catelogue />} />
        <Route path="/portfolio/" element={<Catelogue />} />
        <Route path="/counter" element={<Counter buttonText="Click Me!" />} />
        <Route path="/egg/*" element={<Egg />} />
      </Routes>
    </>
  );
}

export default App;
