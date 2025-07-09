import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chief Adebayo Oke",
      title: "Real Estate Investor",
      company: "Lagos Property Group",
      rating: 5,
      content: "Gtext's events are always exceptional. I've attended their last 3 events and each one has been better than the last. The networking opportunities and investment insights are invaluable.",
      image: "👨‍💼"
    },
    {
      name: "Mrs. Sarah Williams",
      title: "Property Agent",
      company: "Williams Real Estate",
      rating: 5,
      content: "As a real estate agent, I've found incredible opportunities through Gtext events. The connections I've made have directly contributed to my business growth. Can't wait for the 10th anniversary!",
      image: "👩‍💼"
    },
    {
      name: "Engr. David Okonkwo",
      title: "Property Developer",
      company: "Okonkwo Developments",
      rating: 5,
      content: "The quality of speakers and the caliber of attendees at Gtext events is unmatched. I've secured multiple partnerships and deals through their networking sessions.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Aisha Mohammed",
      title: "Real Estate Consultant",
      company: "Mohammed Consulting",
      rating: 5,
      content: "Gtext consistently delivers world-class events. The organization, content, and networking opportunities are top-notch. This 10th anniversary event will be historic!",
      image: "👩‍🎓"
    }
  ];

  const stats = [
    { number: "9", label: "Previous Events", suffix: "+" },
    { number: "15,000", label: "Total Attendees", suffix: "+" },
    { number: "500", label: "Partnerships Formed", suffix: "+" },
    { number: "95", label: "Satisfaction Rate", suffix: "%" }
  ];

  return (
    <section className="section bg-pattern">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="section-title">What People Say About Gtext Events</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what industry professionals say about 
            our previous events and the value they've received.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-4 mb-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
                color: 'white',
                border: 'none'
              }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800',
                marginBottom: '0.5rem',
                color: 'var(--accent-gold)'
              }}>
                {stat.number}{stat.suffix}
              </div>
              <div style={{ 
                fontSize: '0.9rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-2" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ 
                border: '2px solid var(--light-gray)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2rem',
                color: 'var(--accent-gold)',
                opacity: 0.3
              }}>
                <FaQuoteLeft />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    style={{ 
                      color: 'var(--accent-gold)', 
                      marginRight: '0.25rem' 
                    }} 
                  />
                ))}
              </div>
              
              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
                  color: 'white',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {testimonial.image}
                </div>
                
                <div>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.25rem',
                    color: 'var(--primary-green)',
                    fontWeight: '600'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    marginBottom: '0.25rem',
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}>
                    {testimonial.title}
                  </p>
                  <p style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-secondary)'
                  }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--accent-gold), #FFA000)',
            color: 'var(--dark-gray)',
            border: 'none',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              🎥 Watch More Testimonials
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '1.5rem',
              opacity: 0.8
            }}>
              Hear directly from past attendees about their experiences and the value they've received 
              from Gtext events.
            </p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '3rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <div style={{ fontSize: '3rem' }}>▶️</div>
              <div>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                  Video Testimonials Coming Soon
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
                  We're compiling video testimonials from our most successful attendees
                </p>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Join the Success Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 