import React from 'react';

function ProgramsAndPricing() {
  return (
    <section id="programs-pricing" className="programs-pricing">
      <h2>Our Programs & Tuition</h2>
      <div className="programs-content">
        <div className="program-item">
          <h3>Pilot Class</h3>
          <p>
            <strong>Duration:</strong> 4 months (20-25 hours/week)
          </p>
          <p>
            <strong>Schedule:</strong> Monday – Thursday (6:00 PM – 9:00 PM),
            Saturday (8:00 AM – 4:00 PM)
          </p>
          <p>
            <strong>Features:</strong> Live instructor-led classes, hands-on
            projects, and exercises. Students also get access to recordings for
            one year after the cohort ends.
          </p>
          <p className="price">
            <strong>Cost:</strong> $5,000
          </p>
          <p>
            <em>
              Limited-time offer to refine our curriculum with your valuable
              feedback.
            </em>
          </p>
        </div>

        <div className="program-item">
          <h3>Live Class (Synchronous Learning)</h3>
          <p>
            <strong>Duration:</strong> 4 months (20-25 hours/week)
          </p>
          <p>
            <strong>Schedule:</strong> Monday – Thursday (6:00 PM – 9:00 PM),
            Saturday (8:00 AM – 4:00 PM)
          </p>
          <p>
            <strong>Features:</strong> Live instructor-led classes, hands-on
            projects, and exercises. Students also get access to recordings for
            one year after the cohort ends.
          </p>
          <p className="price">
            <strong>Cost:</strong> $10,000 *
          </p>
          <h4>Payment Options:</h4>
          <ul>
            <li>$1,000 discount for full upfront payment</li>
            <li>Four monthly installments during the class</li>
            <li>Assistance with financing options</li>
          </ul>
          <p>
            <em>
              We are planning to add daytime classes in the future as demand
              grows. Please contact us if you are interested in daytime sessions.
            </em>
          </p>
        </div>

        <div className="program-item">
          <h3>Self-Paced Program (Asynchronous Learning)</h3>
          <p>
            <strong>Duration:</strong> 6 months
          </p>
          <p>
            <strong>Features:</strong> Access to recorded lessons, mandatory
            weekly 1-hour instructor meetings, and weekly project submissions.
            Receive feedback and guidance throughout the program.
          </p>
          <p className="price">
            <strong>Cost:</strong> $12,000 *
          </p>
          <h4>Payment Options:</h4>
          <ul>
            <li>$1,000 discount for full upfront payment</li>
            <li>Monthly payment plans available</li>
            <li>Assistance with financing options</li>
          </ul>
          <p>
            <em>Coming soon after our initial cohorts.</em>
          </p>
        </div>
      </div>

      {/* Price Comparison Section */}
      <div className="price-comparison">
        <p>
          <strong>
            Comparable coding bootcamps in the U.S. charge between $15,000 and
            $20,000 for similar programs. Code School of Guam offers an
            affordable and valuable option to start your career in tech.
          </strong>
        </p>
      </div>

      <div className="pricing-philosophy">
        <h3>Our Pricing Philosophy</h3>
        <p>
          At the Code School of Guam, we believe in making high-quality coding education accessible to as many people as possible. While similar programs elsewhere often charge upwards of $17,000 to $20,000, we've intentionally set our tuition at <strong>$10,000</strong> for the Live Class. We understand that this is still a significant investment, but we are committed to offering exceptional value.
        </p>
        <p>
          Our program includes small class sizes with a maximum of 10 students per instructor, ensuring personalized attention and a supportive learning environment. We also offer an optional internship, providing real-world experience that sets us apart from other coding bootcamps.
        </p>
        <p>
          We could increase our class sizes or charge higher tuition like other schools, but our priority is your success. By keeping our classes small and our pricing fair, we aim to provide you with the best possible education and the greatest chance of success in the tech industry.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="price-disclaimer">
        <p>
          * Prices are subject to change based on factors such as demand,
          curriculum updates, or market trends. Be sure to check with us for
          the latest details.
        </p>
      </div>
    </section>
  );
}

export default ProgramsAndPricing;
