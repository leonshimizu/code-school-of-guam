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
      question: 'How does the internship work?',
      answer:
        'The internship is an optional 2-month program where you work on real projects in an Agile environment. It enhances your resume and job readiness.',
    },
    {
      question: 'How long do I have access to the class recordings?',
      answer:
        'You will have access to all class recordings and materials for one full year from your start date, supporting your continued learning journey.',
    },
    {
      question: 'Can I reach out for support after the program ends?',
      answer:
        'Absolutely! We are here to support you even after your cohort concludes. Feel free to reach out with questions or for guidance.',
    },
    {
      question: 'Are there opportunities to become a teaching assistant?',
      answer:
        'Yes! Outstanding graduates may be invited to become paid teaching assistants for future cohorts, providing leadership experience and reinforcing your own learning.',
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        'Yes, we offer monthly installment plans during the course duration. We are also working on partnering with local banks for financing options.',
    },
    {
      question: 'What is the attendance policy?',
      answer:
        'Attendance is crucial. Missing more than three unexcused classes may result in dismissal without a refund. Excused absences are considered for valid reasons.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Yes. Full tuition (minus the non-refundable deposit) is refundable if you withdraw before the start of the second week. No refunds are issued from the second week onward.',
    },
    {
      question: 'How can I access the policies?',
      answer:
        'You can view our detailed policies, including the Code of Conduct, Attendance Policy, and Refund Policy, in the Policies section of our website.',
    },
    {
      question: 'What resources do you recommend to get started with coding?',
      answer: (
        <>
          We recommend exploring free coding platforms like{' '}
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>{' '}
          or{' '}
          <a
            href="https://replit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Replit
          </a>{' '}
          to get familiar with coding concepts and practice in-browser before starting pre-work.
        </>
      ),
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
