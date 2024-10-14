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
      question: 'Why do you teach Ruby on Rails instead of other programming languages?',
      answer: (
        <>
          We have chosen Ruby on Rails because it's a powerful, beginner-friendly framework that allows for rapid development. It's used by many successful companies like Airbnb, GitHub, and Shopify. Our instructors have professional experience with Rails, ensuring high-quality teaching and real-world insights. Learning Rails provides a strong foundation, making it easier to pick up other languages in the future.
        </>
      ),
    },
    {
      question: 'Do I need to have a Mac to join the program?',
      answer: (
        <>
          While it's not mandatory to have a Mac, we highly recommend it. Using a Mac helps ensure uniformity in the classroom, simplifying setup processes and minimizing technical issues that can arise from different operating systems. This allows you to focus more on learning coding concepts rather than dealing with OS-specific challenges. If you don't have a Mac, you're still welcome to join, but please be aware that some steps and commands may differ slightly.
        </>
      ),
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
      question: 'Why is the tuition set at $10,000?',
      answer:
        'We strive to provide high-quality education with personalized attention through small class sizes and offer real-world experience via internships. Our tuition reflects the value and unique opportunities we provide, while remaining more affordable than many comparable programs.',
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
