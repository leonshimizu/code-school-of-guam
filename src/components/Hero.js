import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Start Your New Career in Tech</h1>
        <p>Choose from live or self-paced learning options to become a software engineer.</p>
        <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc84Vee53gbVhwamS77qvizzV8vGri4Ms83kIEzqgN6vg7wZA/viewform?vc=0&c=0&w=1&flr=0" 
            className="cta-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Enroll Now
          </a>
      </div>
    </section>
  );
}

export default Hero;
