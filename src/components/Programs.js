// Programs.js
import React from 'react';

function Programs() {
  return (
    <section id="programs" className="programs">
      <h2>Our Programs</h2>
      <div className="programs-content">
        <div className="program-item">
          <h3>Live Class (Synchronous Learning)</h3>
          <p>
            <strong>Duration:</strong> 4 months (20-25 hours/week)
          </p>
          <p>
            <strong>Features:</strong> Live instructor-led classes, access to
            recordings for one year, hands-on projects and exercises.
          </p>
          <p>
            <strong>Cost:</strong> $7,000
          </p>
        </div>
        <div className="program-item">
          <h3>Self-Paced Class (Asynchronous Learning)</h3>
          <p>
            <strong>Duration:</strong> 6 months
          </p>
          <p>
            <strong>Features:</strong> Access to recorded lessons, mandatory
            weekly 1-hour meetings, weekly project submissions.
          </p>
          <p>
            <strong>Cost:</strong> $8,000 - $10,000
          </p>
          <p>
            <em>Coming soon after our initial cohorts.</em>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Programs;
