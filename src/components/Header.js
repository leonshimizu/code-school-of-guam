// Header.js
import React, { useState } from 'react';
import logo from '../assets/CSG_Logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="#hero">
            <img src={logo} alt="Code School of Guam Logo" className="logo-img" />
          </a>
        </div>
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#programs" onClick={() => setIsOpen(false)}>
              Programs
            </a>
          </li>
          <li>
            <a href="#curriculum" onClick={() => setIsOpen(false)}>
              Curriculum
            </a>
          </li>
          <li>
            <a href="#internship" onClick={() => setIsOpen(false)}>
              Internship
            </a>
          </li>
          <li>
            <a href="#career-services" onClick={() => setIsOpen(false)}>
              Career Services
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing & Financing
            </a>
          </li>
          <li>
            <a href="#admissions" onClick={() => setIsOpen(false)}>
              Admissions
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={() => setIsOpen(false)}>
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
