import React from "react";
import "./App.css";
import { Toggle } from "./components/Toggle";
import { FeatureSections } from "./components/FeatureSections";
import Header from "./components/practice/TypeScript/Header";
import { LayoutForTeatComponent } from "./components/LayoutForTeatComponent";

function App() {
  return (
    <LayoutForTeatComponent>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <Toggle />
      <FeatureSections />
      <Header buttonText="Click Me!" />
    </LayoutForTeatComponent>
  );
}

export default App;
