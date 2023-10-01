import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    link: {
        gap: '2rem'
        
    }
}

export default function Navbar () {
  return (
      <nav style={styles.link} className="ui container grid">
        <Link className="link item" to="/">About </Link>
        <Link className="link item" to="/portfolio">Portfolio </Link>
        <Link className="link item" to="/resume">Resume </Link>
        <Link className="link item" to="/contact">Contact </Link>
      </nav>
  );
};

