import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'


function App() {
  return (
    <Router>
      <div className="body-container">
        <div className="header-container">
          <Heading />
          <Navbar />
        </div>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
