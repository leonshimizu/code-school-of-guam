// FAQs.js
import React, { useState } from 'react';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Do I need prior coding experience?',
      answer:
        'No prior coding experience is required. Our program starts from the basics and builds up to advanced concepts.',
    },
    {
      question: 'What equipment do I need?',
      answer:
        'We recommend using a Mac for consistency, but alternative setups can be accommodated. Contact us for more details.',
    },
    {
      question: 'How does the internship work?',
      answer:
        'The internship is an optional 2-month program where you work on real projects in an Agile environment. It enhances your resume and job readiness.',
    },
    {
      question: 'What if I miss a class?',
      answer:
        'Attendance is crucial for success. Missing more than three unexcused classes may result in dismissal from the program without a refund. Excused absences are considered for situations beyond your control.',
    },
    {
      question: 'How long do I have access to the class recordings?',
      answer:
        'You will have access to all class recordings and materials for one full year from your start date, supporting your continued learning journey.',
    },
    {
      question: 'Are there opportunities to become a teaching assistant?',
      answer:
        'Yes! Outstanding graduates may be invited to become paid teaching assistants for future cohorts, providing leadership experience and reinforcing your own learning.',
    },
    {
      question: 'Can I reach out for support after the program ends?',
      answer:
        'Absolutely! We are here to support you even after your cohort concludes. Feel free to reach out with questions or for guidance.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-content">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3
              onClick={() => toggleFAQ(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {faq.question}
            </h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;
