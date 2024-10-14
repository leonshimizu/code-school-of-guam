// WhyRubyReact.js
import React from 'react';
import { Link } from 'react-router-dom';

function WhyRubyReact() {
  return (
    <section className="why-ruby-react">
      <div className="container">
        <h2>Why We Teach Ruby on Rails and React.js</h2>
        <p>
          At the Code School of Guam, we've thoughtfully chosen Ruby on Rails and React.js as the cornerstone of our curriculum. Here's why:
        </p>

        <h3>Ruby on Rails: A Powerful Back-End Framework</h3>
        <ul>
          <li>
            <strong>Beginner-Friendly Syntax:</strong> Ruby is known for its clean and readable code, making it ideal for those new to programming.
          </li>
          <li>
            <strong>Rapid Development:</strong> Rails allows for quick prototyping, so you can build applications faster and see results sooner.
          </li>
          <li>
            <strong>Industry Adoption:</strong> Many successful companies like Airbnb, GitHub, and Shopify use Rails, keeping it relevant and in demand.
          </li>
          <li>
            <strong>Strong Community Support:</strong> A vibrant community provides extensive resources, gems, and documentation to aid your learning.
          </li>
          <li>
            <strong>Personal Expertise:</strong> Our instructors have professional experience with Rails, ensuring high-quality teaching and real-world insights.
          </li>
        </ul>

        <h3>React.js: Leading Front-End Technology</h3>
        <ul>
          <li>
            <strong>High Demand:</strong> React.js is one of the most popular JavaScript libraries for building dynamic user interfaces.
          </li>
          <li>
            <strong>Modern Development Practices:</strong> Learning React introduces you to component-based architecture, enhancing code reusability.
          </li>
          <li>
            <strong>Complementary to Rails:</strong> Combining React with Rails gives you full-stack development skills, making you versatile in the job market.
          </li>
        </ul>

        <h3>Building a Strong Foundation</h3>
        <p>
          The programming concepts you learn are applicable to other languages and frameworks. We emphasize learning how to learn, so you can adapt to new technologies throughout your career. While our focus is on Rails and React, we also introduce you to other languages like Python, demonstrating how to apply your skills across different platforms.
        </p>

        {/* Add a link to navigate back to the Curriculum section */}
        <p>
          <Link to="/#curriculum" className="cta-button">Back to Curriculum</Link>
        </p>
      </div>
    </section>
  );
}

export default WhyRubyReact;
