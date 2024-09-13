import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="#hero">Code School of Guam</a>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#curriculum">Curriculum</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
