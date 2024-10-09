// Admissions.js
import React from 'react';

function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <h2>Admissions</h2>
      <p>
        Ready to start your journey with Code School of Guam? Here's how to apply:
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

      <h3>Class Schedule</h3>
      <p>
        Our classes are held Monday through Thursday from 6:00 PM to 9:00 PM,
        and Saturdays from 8:00 AM to 4:00 PM. This schedule is designed to
        accommodate working professionals and those with daytime commitments.
      </p>
      <p>
        We anticipate adding daytime classes in the future as demand grows.
        Please let us know if you are interested in daytime sessions.
      </p>

      <h3>Eligibility Criteria</h3>
      <ul>
        <li>No prior coding experience required</li>
        <li>Must have access to a suitable laptop and reliable internet</li>
        <li>Genuine interest and commitment to learning</li>
        <li>Ability to attend all scheduled classes</li>
      </ul>

      {/* New Technical Requirements Section */}
      <div className="technical-requirements">
        <h3>Technical Requirements</h3>
        <p>
          We highly recommend that students use a Mac for the duration of the program. This recommendation is not about one operating system being better than another; it's about ensuring uniformity and simplifying the learning process for everyone.
        </p>
        <p>
          Having all students on the same operating system allows us to streamline the setup process and reduce potential technical issues that can arise from differences between operating systems. This means fewer distractions and a smoother learning experience, allowing you to focus on mastering the coding concepts.
        </p>
        <p>
          For those who do not have a Mac, you are still welcome to join the program. Please be aware that setup steps and certain commands may differ slightly from the rest of the class. Our instructors will do their best to accommodate and assist you, but having a Mac will ensure the most seamless experience.
        </p>
        <p>
          As we progress through our initial cohorts, we will evaluate this recommendation and may adjust our requirements based on the collective experience.
        </p>
      </div>

      <h3>Payment Options</h3>
      <ul>
        <li>
          Full upfront payment with a $1,000 discount (Live and Self-Paced programs)
        </li>
        <li>Monthly installment plans</li>
        <li>Assistance with financing options (details to be finalized)</li>
      </ul>

      <h3>Free Trial Week</h3>
      <p>
        Not sure if coding is for you? Join us for the first week of classes at
        no cost! Experience our teaching style and curriculum before committing.
        Limited to one free trial week per individual per year.
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
