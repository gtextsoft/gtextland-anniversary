import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('October 4, 2025 09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="section bg-gradient" style={{ padding: '60px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            <FaClock style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }} />
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              color: 'white',
              margin: 0
            }}>
              Time Left Until the Biggest Property Celebration Ever!
            </h2>
          </div>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem'
          }}>
            October 4th, 2025 is approaching fast. Don't miss your chance to be part of history!
          </p>

          {/* Countdown Display */}
          <div className="grid grid-4" style={{ 
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {timeUnits.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="countdown-unit"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '2rem 1rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  color: 'white'
                }}
              >
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '0.5rem',
                    color: 'var(--accent-gold)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ marginTop: '3rem' }}
          >
            <div style={{
              background: 'rgba(255, 215, 0, 0.2)',
              border: '2px solid var(--accent-gold)',
              borderRadius: '15px',
              padding: '1.5rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--accent-gold)',
                marginBottom: '0.5rem'
              }}>
                ⚡ Limited Time Opportunity
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                margin: 0
              }}>
                With over 5,000 attendees expected, seats are filling up fast. 
                Register now to secure your spot at the world's largest real estate event!
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            style={{ marginTop: '2rem' }}
          >
            <button 
              onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-gold"
              style={{ 
                fontSize: '1.2rem', 
                padding: '20px 40px',
                boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
              }}
            >
              🎫 Register Now — Free Admission
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer; 