// App.tsx

import React from 'react';
import './App.css';
import { Left } from './components/Left';
import { Right } from './components/Right';
import { Footer } from './components/Footer';

function App() {
  return (
      <div className="App">
        <header className="App-header">
        <div className='left'>
          <Left />
        </div>
        <div className='right'>
          <Right />
        </div>
        </header>
      </div>
  );
}

export default App;
