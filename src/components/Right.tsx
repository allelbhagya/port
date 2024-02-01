import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Right() {
  return (
    <div>
    <div className="right-content">
      <Navbar />
      <div className="main-text">
        <code>hello world!</code>
      </div>
      <Footer/>
    </div>
    </div>

  );
}
