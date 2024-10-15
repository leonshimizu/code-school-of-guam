// Curriculum.js
import React from 'react';
import { Link } from 'react-router-dom';

function Curriculum() {
  return (
    <section id="curriculum" className="curriculum">
      <h2>Our Curriculum</h2>
      <p>
        Our comprehensive curriculum is designed to equip you with the skills
        needed to succeed as a full-stack software engineer.
      </p>
      <h3>Class Schedule and Format</h3>
      <p>
        Classes are conducted <strong>fully remotely via Zoom</strong>, held Monday through Thursday from 6:00 PM to 9:00 PM, and
        Saturdays from 8:00 AM to 4:00 PM. This online schedule allows for immersive
        learning while accommodating those with daytime commitments. Join our live, interactive classes from the comfort of your own home.
      </p>
      <p>
        We are considering adding daytime classes in the future to better serve
        our students' needs.
      </p>

      <div className="curriculum-content">
        <div className="curriculum-item">
          <h3>Pre-Work</h3>
          <p>
            Self-paced foundational coding exercises to prepare you for the program. We'll provide guidance on getting started with coding platforms, installing software like VSCode, Git, and Zoom, and creating a GitHub account.
          </p>
        </div>
        <div className="curriculum-item">
          <h3>Core Program</h3>
          <p>
            In-depth learning of full-stack development using Ruby on Rails and React.js, including:
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
            Build a full-stack application from scratch to showcase your skills to potential employers.
          </p>
        </div>
        <div className="curriculum-item">
          <h3>Internship (Optional)</h3>
          <p>
            Apply your skills in a real-world setting with our 2-month internship program.
          </p>
        </div>
      </div>

      {/* New Section to Link to the Why We Teach Ruby on Rails and React.js Page */}
      <div className="learn-more">
        <p>
          Curious why we teach Ruby on Rails and React.js?
        </p>
        <Link to="/why-ruby-react" className="cta-button">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Curriculum;
