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
          href="#free-trial"
          className="cta-button"
        >
          Try a Free Week
        </a>
      </div>
    </section>
  );
}

export default Hero;
