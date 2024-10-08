// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Code School of Guam</p>
        <p>
          <a href="mailto:codeschoolofguam@gmail.com">codeschoolofguam@gmail.com</a> | <a href="tel:+16714830219">(671) 483-0219</a>
        </p>
        <p>
          <a href="#policies">Policies</a> |{' '}
          <a href="#terms-of-service">Terms of Service</a>
        </p>
        <p>
          <a href="https://www.instagram.com/codeschoolofguam?igsh=MTUzcHZ6NmlzNHJ0eQ==" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          |{' '}
          <a href="https://www.facebook.com/share/NUKZidEGUJshLwBi/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
