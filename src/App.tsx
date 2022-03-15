import React from 'react';
import { Toggle } from './components/practice/Toggle';
import { FeatureSections } from './components/practice/FeatureSections';
import Header from './components/practice/TypeScript/Header';
import Egg from './components/eggSelect';
import { MainWeb } from './components/mainWeb';

function App() {
  return (
    <div className="box-border w-full h-full m-0">
      <MainWeb />
      <div className="p-8 m-8 bg-white" />
      <Egg />
      <Toggle />
      <FeatureSections />
      <Header buttonText="Click Me!" />
    </div>
  );
}

export default App;
