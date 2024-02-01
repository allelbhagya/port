import React from 'react';
import { Left } from './Left';
import { Right } from './Right';
import Contacts from './Contacts';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

function Contact() {
  return (
      <div className="App">
        <header className="App-header">
        <div className='left'>
          <Left />
        </div>
        <div className='right'>
            <Navbar/>
          <Contacts />
          <Footer/>
        </div>
        </header>
      </div>
  );
}

export default Contact;