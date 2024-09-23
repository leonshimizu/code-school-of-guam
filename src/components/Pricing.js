import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Tuition & Financing</h2>
      <div className="pricing-content">
        <div className="pricing-box">
          <h3>Live Classes</h3>
          <p className="price">$10,000 *</p>
          <p>Includes 4 months of live instruction and access to class recordings for one year.</p>
          <h4>Payment Options:</h4>
          <ul>
            <li>Discount for full upfront payment</li>
            <li>Four monthly installments during the class</li>
            <li>Assistance with bank loans or financing</li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Self-Paced Program</h3>
          <p className="price">$12,000 *</p>
          <p>Includes 6 months of self-paced learning, recorded lessons, and weekly 1-hour instructor meetings.</p>
          <h4>Payment Options:</h4>
          <ul>
            <li>Discount for full upfront payment</li>
            <li>Monthly payment plans available</li>
          </ul>
          <p>
            <em>Available soon after initial cohorts.</em>
          </p>
        </div>
      </div>

      {/* Price Comparison Section */}
      <div className="price-comparison">
        <p><strong>Other coding bootcamps in the U.S. charge between $15,000-$20,000, making Code School of Guam an affordable and valuable option for your future in tech.</strong></p>
      </div>

      {/* Disclaimer */}
      <div className="price-disclaimer">
        <p>* Prices are subject to change based on factors such as demand, curriculum updates, or market trends.</p>
      </div>
    </section>
  );
}

export default Pricing;
