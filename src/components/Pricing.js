import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Tuition & Pricing</h2>
      <div className="pricing-content">
        <div className="pricing-box">
          <h3>Live Classes</h3>
          <p>$7,000</p>
          <p>Includes 4 months of live instruction and access to class recordings.</p>
        </div>
        <div className="pricing-box">
          <h3>Self-Paced Program</h3>
          <p>$8,000 - $10,000</p>
          <p>Includes 6 months of self-paced learning and weekly 1-hour instructor check-ins.</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
