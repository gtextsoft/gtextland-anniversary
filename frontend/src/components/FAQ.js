import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the event free to attend?",
      answer: "Yes! The Gtext Land & Homes 10th Anniversary event is completely free to attend. However, registration is required to secure your spot as we have limited capacity for 5,000 attendees."
    },
    {
      question: "What should I bring to the event?",
      answer: "Please bring your registration confirmation email (digital or printed), a valid ID, business cards for networking, and comfortable clothing. We'll provide refreshments and all necessary materials."
    },
    {
      question: "Where will the BRT buses be located?",
      answer: "BRT buses will be available at 7 major pickup points across Lagos including Victoria Island Terminal, Lekki Phase 1, Ikeja GRA, Surulere, Yaba, Oshodi, and Alausa Secretariat. More locations will be announced based on registration distribution."
    },
    {
      question: "Can I bring guests?",
      answer: "Each registration is for one person. If you'd like to bring guests, they need to register separately. We encourage you to share the registration link with colleagues and business partners."
    },
    {
      question: "What time should I arrive?",
      answer: "The event starts at 9:00 AM. If you're using the free BRT transportation, arrive at your pickup point 15 minutes before departure. If driving, arrive by 8:30 AM to allow time for parking and registration."
    },
    {
      question: "Will there be food and refreshments?",
      answer: "Yes! Complimentary refreshments will be provided throughout the event. We'll have coffee breaks, lunch, and afternoon snacks. Special dietary requirements can be accommodated with advance notice."
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, free parking will be available at the venue. However, we strongly encourage using the free BRT transportation to avoid parking congestion and contribute to a more sustainable event."
    },
    {
      question: "What if I can't attend after registering?",
      answer: "If you can't attend, please cancel your registration at least 48 hours before the event so we can offer your spot to someone on the waiting list. You can do this by replying to your confirmation email."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely! The event is designed for maximum networking. You'll have dedicated networking sessions, roundtable discussions, and plenty of breaks to connect with other attendees, speakers, and sponsors."
    },
    {
      question: "How can I become a vendor or sponsor?",
      answer: "We have limited vendor and sponsorship opportunities available. Please fill out the partnership application form on this page, and our team will contact you within 48 hours to discuss options and pricing."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got answers! Here are the most common questions about 
            the Gtext Land & Homes 10th Anniversary event.
          </p>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card mb-2"
              style={{ 
                border: '2px solid var(--light-gray)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '0'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  flex: 1
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--primary-green)',
                    flexShrink: 0
                  }}>
                    <FaQuestionCircle />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    color: 'var(--primary-green)',
                    margin: 0
                  }}>
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--primary-green)',
                    flexShrink: 0
                  }}
                >
                  <FaChevronDown />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      overflow: 'hidden',
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--light-gray)'
                    }}
                  >
                    <p style={{ 
                      fontSize: '1rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
            color: 'white',
            border: 'none',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Still Have Questions?
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '1.5rem',
              opacity: 0.9
            }}>
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            
            <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                  📧 Email Us
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
                  events@gtextland.com
                </p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                  📞 Call Us
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
                  +234 801 234 5678
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-gold"
            >
              Register Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 