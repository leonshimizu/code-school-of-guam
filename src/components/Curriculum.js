import React from 'react';

function Curriculum() {
  return (
    <section id="curriculum" className="curriculum">
      <h2>Our Curriculum</h2>
      <div className="curriculum-content">
        <div className="curriculum-item">
          <h3>Pre-Work</h3>
          <p>1 Month of self-paced foundational coding exercises with weekly support.</p>
        </div>
        <div className="curriculum-item">
          <h3>Live Classes (Synchronous Learning)</h3>
          <p>4 Months of immersive, instructor-led classes covering full-stack development. Classes run 20-25 hours per week.</p>
        </div>
        <div className="curriculum-item">
          <h3>Self-Paced Classes (Asynchronous Learning)</h3>
          <p>6 Months of self-paced learning, including weekly check-ins with an instructor and project submissions.</p>
        </div>
        <div className="curriculum-item">
          <h3>Internship</h3>
          <p>2 Months of real-world experience with internships at local and international companies.</p>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
