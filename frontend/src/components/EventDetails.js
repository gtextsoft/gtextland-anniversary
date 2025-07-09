import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaTicketAlt, FaHandshake, FaLightbulb, FaNetworkWired, FaGift } from 'react-icons/fa';

const EventDetails = () => {
  const benefits = [
    {
      icon: <FaHandshake />,
      title: "Network with Industry Leaders",
      description: "Connect with 5,000+ real estate professionals, investors, and government officials"
    },
    {
      icon: <FaLightbulb />,
      title: "Discover Investment Opportunities",
      description: "Exclusive access to prime properties and land banking opportunities"
    },
    {
      icon: <FaNetworkWired />,
      title: "Learn from Experts",
      description: "Insights from top speakers and industry veterans with proven track records"
    },
    {
      icon: <FaGift />,
      title: "Free Transportation & Refreshments",
      description: "100 BRT buses available and complimentary refreshments throughout the event"
    }
  ];

  const eventInfo = [
    {
      icon: <FaClock />,
      label: "Date & Time",
      value: "October 4th, 2025 • 9:00 AM - 6:00 PM"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Venue",
      value: "Lagos State Convention Center (TBC)"
    },
    {
      icon: <FaTicketAlt />,
      label: "Admission",
      value: "Free Registration • Limited Seats Available"
    }
  ];

  return (
    <section id="event-details" className="section bg-pattern">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="section-title">Why You Should Attend</h2>
          <p className="section-subtitle">
            This isn't just another real estate event. This is the celebration of a decade of excellence 
            and the launchpad for the next generation of property investments.
          </p>
        </motion.div>

        {/* Event Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-3 mb-4"
        >
          {eventInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
                color: 'white'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
                {info.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{info.label}</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                border: '2px solid var(--light-gray)'
              }}
            >
              <div style={{ 
                fontSize: '2rem', 
                color: 'var(--primary-green)',
                flexShrink: 0,
                marginTop: '0.25rem'
              }}>
                {benefit.icon}
              </div>
              <div>
                <h3 style={{ 
                  marginBottom: '0.5rem', 
                  fontSize: '1.2rem',
                  color: 'var(--primary-green)',
                  fontWeight: '600'
                }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Highlights */}
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
            border: 'none'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              🎉 Special Anniversary Highlights
            </h3>
            <div className="grid grid-3" style={{ gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Awards Ceremony</h4>
                <p style={{ fontSize: '0.9rem' }}>Recognition of top performers and industry leaders</p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Exclusive Deals</h4>
                <p style={{ fontSize: '0.9rem' }}>Special anniversary discounts on premium properties</p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎁</div>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Free Gifts</h4>
                <p style={{ fontSize: '0.9rem' }}>Commemorative items and exclusive merchandise</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="card" style={{ 
            background: 'var(--white)',
            border: '3px solid var(--primary-green)'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1rem',
              color: 'var(--primary-green)',
              fontWeight: '700'
            }}>
              Don't Miss This Once-in-a-Decade Celebration!
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              color: 'var(--text-secondary)'
            }}>
              Join thousands of real estate professionals and investors for the biggest property event 
              the world has ever seen. Secure your spot before it's too late!
            </p>
            <button 
              onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
              style={{ fontSize: '1.1rem', padding: '18px 36px' }}
            >
              🎫 Reserve My Spot Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails; 