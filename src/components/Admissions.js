import React from 'react';

function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <h2>Ready to Start?</h2>
      <p>Fill out our enrollment form and take the first step toward your new career.</p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSc84Vee53gbVhwamS77qvizzV8vGri4Ms83kIEzqgN6vg7wZA/viewform?vc=0&c=0&w=1&flr=0" 
        className="cta-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Enroll Now
      </a>
    </section>
  );
}

export default Admissions;
