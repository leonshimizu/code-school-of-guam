import React from 'react';

function ProgramsAndPricing() {
  return (
    <section id="programs-pricing" className="programs-pricing">
      <h2>Our Programs & Tuition</h2>
      <div className="programs-content">
        <div className="program-item">
          <h3>Live Class (Synchronous Learning)</h3>
          <p>
            <strong>Duration:</strong> 4 months (20-25 hours/week)
          </p>
          <p>
            <strong>Features:</strong> Live instructor-led classes, hands-on projects, and exercises. Students also get access to recordings for one year after the cohort ends.
          </p>
          <p className="price"><strong>Cost:</strong> $10,000 *</p>
          <h4>Payment Options:</h4>
          <ul>
            <li>Discount for full upfront payment</li>
            <li>Four monthly installments during the class</li>
            <li>Assistance with bank loans or financing</li>
          </ul>
        </div>

        <div className="program-item">
          <h3>Self-Paced Program (Asynchronous Learning)</h3>
          <p>
            <strong>Duration:</strong> 6 months
          </p>
          <p>
            <strong>Features:</strong> Access to recorded lessons, mandatory weekly 1-hour instructor meetings, and weekly project submissions. Students will receive feedback and guidance throughout the program.
          </p>
          <p className="price"><strong>Cost:</strong> $12,000 *</p>
          <h4>Payment Options:</h4>
          <ul>
            <li>Discount for full upfront payment</li>
            <li>Monthly payment plans available</li>
            <li>Assistance with bank loans or financing</li>
          </ul>
          <p><em>Coming soon after our initial cohorts.</em></p>
        </div>
      </div>

      {/* Price Comparison Section */}
      <div className="price-comparison">
        <p>
          <strong>
            Comparable coding bootcamps in the U.S. charge between $15,000 and $20,000 for similar programs. Code School of Guam offers an affordable and valuable option to start your career in tech.
          </strong>
        </p>
      </div>

      {/* Disclaimer */}
      <div className="price-disclaimer">
        <p>
          * Prices are subject to change based on factors such as demand, curriculum updates, or market trends. Be sure to check with us for the latest details.
        </p>
      </div>
    </section>
  );
}

export default ProgramsAndPricing;
