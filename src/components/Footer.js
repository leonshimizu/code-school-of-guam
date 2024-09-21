// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Code School of Guam</p>
        <p>
          <a href="mailto:info@codeschoolguam.com">info@codeschoolguam.com</a>
        </p>
        <p>
          <a href="#privacy-policy">Privacy Policy</a> |{' '}
          <a href="#terms-of-service">Terms of Service</a>
        </p>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{' '}
          |{' '}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
