import React from 'react';
import Egg from './components/eggSelect';
import { MainWeb } from './components/mainWeb';

function App() {
  return (
    <>
      <div className="box-border w-full h-full m-0">
        <MainWeb />
        <div className="p-8 m-8 bg-white" />
        <Egg />
      </div>
    </>
  );
}

export default App;
