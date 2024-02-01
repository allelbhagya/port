import React from 'react';
import { Left } from './Left';
import { Right } from './Right';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import AboutContent from './AboutContent';
import WorkContent from './WorkContent';

function Work() {
  return (
      <div className="App">
        <header className="App-header">
        <div className='left'>
          <Left />
        </div>
        <div className='right'>
        <Navbar/>
        <WorkContent/>
        <Footer/>
        </div>
        </header>
      </div>
  );
}

export default Work;