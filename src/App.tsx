import React from 'react';
import { initialize } from "aurelia-pal-browser";


import './App.css';
import { FrameworkList } from './components/FrameworkList';
import { NewFramework } from './components/NewFramework';

initialize();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NewFramework></NewFramework>
        <FrameworkList></FrameworkList>
      </header>
    </div>
  );
}

export default App;
