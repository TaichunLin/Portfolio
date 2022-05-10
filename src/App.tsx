import React from 'react';
import Leah from './components/Leah';
import { MainWeb } from './components/mainWeb';
import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/mainWeb/containers/CenterSection/Counter';
import { Catelogue } from './components/catelogue';

function App() {
  return (
    <>
      <Routes>
        <Route path="/mainweb/*" element={<MainWeb />} />
        <Route path="/" element={<Catelogue />} />
        <Route path="/catelogue" element={<Catelogue />} />
        <Route path="/portfolio/" element={<Catelogue />} />
        <Route path="/counter" element={<Counter buttonText="Click Me!" />} />
        <Route path="/leah/*" element={<Leah />} />
      </Routes>
    </>
  );
}

export default App;
