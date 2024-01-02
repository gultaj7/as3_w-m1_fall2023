import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/flash-cards">Flash Cards</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
