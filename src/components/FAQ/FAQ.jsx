import { useState } from 'react';
import './FAQ.css';

const data =[
    {
      question: 'How do I book a tour?',
      answer: `Booking a tour is easy! Simply browse our website, select the tour you're interested in, choose your preferred date and time, and follow the instructions to complete your booking online.`
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Payment options may vary depending on the tour and location.'
    },
    {
      question: 'Are there any age restrictions for your tours?',
      answer: 'The age restrictions for our tours vary depending on the nature of the activity and destination. Some tours may have minimum age requirements for safety reasons. Please check the tour details for specific age restrictions.'
    },
    {
      question: 'Can I customize a tour?',
      answer: `Yes, we offer customized tour options for individuals, families, and groups. Contact our customer service team to discuss your preferences and requirements, and we'll tailor a tour package that suits your needs.`
    },
    {
      question: 'What happens if the weather is bad?',
      answer: `In the event of inclement weather, our tour operators will assess the situation and determine whether the tour can proceed safely. If a tour is canceled due to weather conditions, you'll be notified and offered the option to reschedule or receive a refund.`
    },
    {
      question: 'Do you provide transportation to and from the tour location?',
      answer: 'Transportation options vary depending on the tour package. Some tours include transportation, while others require participants to arrange their own transport. Please check the tour details for information on transportation arrangements.'
    },
    {
      question: 'What should I bring on the tour?',
      answer: 'We recommend bringing comfortable clothing and footwear suitable for the activities planned on the tour. Additionally, do not forget essentials such as sunscreen, water, and any specific items mentioned in the tour description.'
    },
    {
      question: 'Are meals included in the tour package?',
      answer: 'Meal inclusions vary depending on the tour package. Some tours may include meals, snacks, or refreshments, while others may not. Please refer to the tour details for information on meal inclusions.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy allows for cancellations and refunds under certain conditions. The specific terms and conditions vary depending on the tour and booking details. Please review our cancellation policy or contact our customer service team for assistance.'
    },
    {
      question: 'Do you offer discounts for children or seniors?',
      answer: 'Yes, we offer discounts for children and seniors on select tour packages. The discount amount and eligibility criteria may vary. Please check the tour details or contact us for information on discounts.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
        {data.map((item, index) => (
            <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="question-text">{item.question}</span>
                <span className={`arrow-icon ${activeIndex === index ? 'open' : ''}`}></span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                {item.answer}
            </div>
            </div>
        ))}
        </div>
    );
};

export default FAQ;
