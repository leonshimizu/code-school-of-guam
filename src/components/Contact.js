// Contact.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email via EmailJS
    emailjs.sendForm(
      'service_jt2foj7', // Your EmailJS service ID
      'template_un3f26f', // Your EmailJS template ID
      form.current,
      '-4iZEmtDtCvBEn4gX' // Your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    })
    .catch((error) => {
      console.error('Error sending message:', error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need more information? Reach out to us, and we'll be happy to assist you.
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:codeschoolofguam@gmail.com">codeschoolofguam@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+16714830219">(671) 483-0219</a>
        </p>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
