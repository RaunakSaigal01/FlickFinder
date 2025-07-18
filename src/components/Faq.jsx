import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "What is this website about?",
    answer: "This website provides in-depth reviews, ratings, and analysis of movies from different genres, release periods, and countries. You’ll find user-submitted reviews, critic opinions, and recommendations for all types of films."
  },
  {
    question: "How are movies rated?",
    answer: "Movies are rated based on user reviews, critic ratings, and a proprietary algorithm that considers multiple factors."
  },
  {
    question: "Can I submit my own reviews?",
    answer: "Yes! Registered users can submit their own reviews and ratings for movies."
  },
  {
    question: "Is the content on this website free?",
    answer: "Most of the content is available for free. However, some premium features may require a subscription."
  },
  {
    question: "How do I search for a specific movie?",
    answer: "You can search for movies using the search bar on the top of the homepage or filter by genres, release year, and ratings."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <img src="./images/faqs.png" alt="" />
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{index + 1}. {item.question}</span>
            <span>{activeIndex === index ? '✖' : '➕'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
