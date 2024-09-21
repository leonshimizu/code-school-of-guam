// Pricing.js
import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Tuition & Financing</h2>
      <div className="pricing-content">
        <div className="pricing-box">
          <h3>Live Classes</h3>
          <p className="price">$7,000</p>
          <p>Includes live instruction and access to recordings for one year.</p>
          <h4>Payment Options:</h4>
          <ul>
            <li>Discount for full upfront payment</li>
            <li>Four monthly installments during the class</li>
            <li>Assistance with bank loans or financing</li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Self-Paced Program</h3>
          <p className="price">$8,000 - $10,000</p>
          <p>Includes access to recorded lessons and weekly instructor meetings.</p>
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
    </section>
  );
}

export default Pricing;
