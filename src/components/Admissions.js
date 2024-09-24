// Admissions.js
import React from 'react';

function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <h2>Admissions</h2>
      <p>Ready to start your journey with Code School of Guam? Here's how to apply:</p>
      <ol>
        <li>
          Fill out our <a className="highlight-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc84Vee53gbVhwamS77qvizzV8vGri4Ms83kIEzqgN6vg7wZA/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer">online application form</a>.
        </li>
        <li>Attend a brief interview with our admissions team.</li>
        <li>
          Secure your spot by completing the enrollment agreement and submitting your non-refundable tuition deposit.
        </li>
      </ol>

      <h3>Eligibility Criteria</h3>
      <ul>
        <li>No prior coding experience required</li>
        <li>Must have access to a suitable laptop and reliable internet</li>
        <li>Genuine interest and commitment to learning</li>
        <li>Ability to attend all scheduled classes</li>
      </ul>

      <h3>Payment Options</h3>
      <ul>
        <li>Full upfront payment with a $1,000 discount (Live and Self-Paced programs)</li>
        <li>Monthly installment plans</li>
        <li>Assistance with financing options (details to be finalized)</li>
      </ul>

      <h3>Free Trial Week</h3>
      <p>
        Not sure if coding is for you? Join us for the first week of classes at no cost! Experience
        our teaching style and curriculum before committing. Limited to one free trial week per
        individual per year.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf_WFGE9-rw6AZXbHrnujlADAmQrK31fneZkWfs0WmDB42NoQ/viewform?usp=sf_link"
        className="cta-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </a>
    </section>
  );
}

export default Admissions;
