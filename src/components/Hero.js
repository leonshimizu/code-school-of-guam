// Hero.js
import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Launch Your Tech Career with Us</h1>
        <p>
          Join Guam's first coding bootcamp and become a software engineer.
          Try our first week <strong>free</strong>!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_WFGE9-rw6AZXbHrnujlADAmQrK31fneZkWfs0WmDB42NoQ/viewform?usp=sf_link"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try a Free Week
        </a>
      </div>
    </section>
  );
}

export default Hero;
