import React from 'react';
import { Left } from './Left';
import { Right } from './Right';
import AboutContent from './AboutContent';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

function About() {
  return (
      <div className="App">
        <header className="App-header">
        <div className='left'>
          <Left />
        </div>
        <div className='right'>
        <Navbar/>
        <AboutContent/>
        <Footer/>
        </div>
        </header>
      </div>
  );
}

export default About;