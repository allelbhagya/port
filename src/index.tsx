// index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About'
import Contact from './components/Contact';
import Work from './components/Work';
// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
