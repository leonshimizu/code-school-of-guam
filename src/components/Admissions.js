// Admissions.js
import React from 'react';

function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <h2>Admissions</h2>
      <p>
        Ready to start your journey with the Code School of Guam? Here's how to apply:
      </p>
      <ol>
        <li>
          Fill out our{' '}
          <a
            className="highlight-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc84Vee53gbVhwamS77qvizzV8vGri4Ms83kIEzqgN6vg7wZA/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            online application form
          </a>.
        </li>
        <li>
          Receive an email confirmation with next steps, including scheduling an interview with our admissions team.
        </li>
        <li>
          Secure your spot by completing the enrollment agreement and submitting
          your non-refundable tuition deposit.
        </li>
      </ol>

      <h3>Class Schedule and Format</h3>
      <p>
        Our classes are conducted <strong>fully remotely via Zoom</strong>, held Monday through Thursday from 6:00 PM to 9:00 PM,
        and Saturdays from 8:00 AM to 4:00 PM. This online schedule is designed to
        accommodate working professionals and those with daytime commitments.
        Join our live, interactive sessions from anywhere with an internet connection.
      </p>
      <p>
        We anticipate adding daytime classes in the future as demand grows.
        Please let us know if you are interested in daytime sessions.
      </p>

      {/* ...existing content... */}
    </section>
  );
}

export default Admissions;
