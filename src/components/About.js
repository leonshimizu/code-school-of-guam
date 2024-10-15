// About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="about">
      <h2>About the Code School of Guam</h2>
      <p>
        The Code School of Guam is the island's first coding bootcamp, offering
        world-class education in full-stack software development, focusing on
        Ruby on Rails for the backend and React.js for the frontend.
      </p>

      <h3>Our Mission</h3>
      <p>
        To provide high-quality, accessible coding education to the people of
        Guam, ensuring graduates are prepared to enter the job market as
        software engineers. We aim to empower individuals with the skills
        necessary to thrive in the rapidly growing tech industry.
      </p>

      <h3>Our Vision</h3>
      <p>
        We envision transforming Guam into a tech hub by equipping local
        residents with the skills and real-world experience needed to succeed
        in the global software industry. By building a pipeline of tech talent,
        we aim to contribute to the island's economic growth and innovation.
      </p>

      <h3>Why Code School of Guam?</h3>
      <p>
        At the Code School of Guam, we prioritize hands-on learning and mentorship.
        Our classes are intentionally kept small (max 10 students per class)
        to ensure personalized attention and support for every student. This
        allows students to build strong relationships with their instructors
        and peers, fostering a collaborative learning environment where
        everyone is set up for success.
      </p>

      <h3>Enrollment Process</h3>
      <p>
        Secure your spot by completing the enrollment agreement and paying the
        non-refundable $500 deposit. Various payment options are available,
        including full upfront payment with a $1,000 discount or installment plans.
      </p>

      <h3>Class Schedule and Format</h3>
      <p>
        Our current classes are held <strong>fully remotely via Zoom</strong>, Monday through Thursday from 6:00 PM to
        9:00 PM and Saturdays from 8:00 AM to 4:00 PM. This online format allows
        flexibility for those who are working or have other commitments during
        the day. Join our live, interactive sessions from the comfort of your own home.
      </p>
      <p>
        We are planning to add daytime classes in the future as demand grows.
        Stay tuned for updates!
      </p>

      <div className="founder-section">
        <h3>Meet Our Founder</h3>
        <p>Learn more about the founder of Code School of Guam, Leon Shimizu.</p>
        <Link to="/founder" className="cta-button">Read More</Link>
      </div>
    </section>
  );
}

export default About;
