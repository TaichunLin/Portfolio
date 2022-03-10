import React from 'react';
import { Toggle } from './components/practice/Toggle';
import { FeatureSections } from './components/practice/FeatureSections';
import Header from './components/practice/TypeScript/Header';
import { LayoutForTeatComponent } from './components/practice/LayoutForTeatComponent';
import Egg from './components/eggSelect';
import { MainWeb } from './components/mainWeb';

function App() {
  return (
    <>
      <MainWeb />
      <Egg />
      <LayoutForTeatComponent>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl">
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
        <Toggle />
        <FeatureSections />
        <Header buttonText="Click Me!" />
      </LayoutForTeatComponent>
    </>
  );
}

export default App;
