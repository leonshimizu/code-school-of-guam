// Curriculum.js
import React from 'react';

function Curriculum() {
  return (
    <section id="curriculum" className="curriculum">
      <h2>Our Curriculum</h2>
      <p>
        Our comprehensive curriculum is designed to equip you with the skills
        needed to succeed as a full-stack software engineer.
      </p>
      <div className="curriculum-content">
        <div className="curriculum-item">
          <h3>Pre-Work (Optional)</h3>
          <p>
            Self-paced foundational coding exercises to prepare you for the program.
          </p>
        </div>
        <div className="curriculum-item">
          <h3>Core Program</h3>
          <p>
            In-depth learning of full-stack development using Ruby on Rails and
            React.js, including:
          </p>
          <ul>
            <li>Front-end and back-end development</li>
            <li>Database management</li>
            <li>Version control with Git and GitHub</li>
            <li>Testing and debugging</li>
            <li>Agile methodologies</li>
          </ul>
        </div>
        <div className="curriculum-item">
          <h3>Capstone Project</h3>
          <p>
            Build a full-stack application from scratch to showcase your skills
            to potential employers.
          </p>
        </div>
        <div className="curriculum-item">
          <h3>Internship (Optional)</h3>
          <p>
            Apply your skills in a real-world setting with our 2-month
            internship program.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
