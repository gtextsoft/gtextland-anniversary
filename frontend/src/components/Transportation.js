import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaMapMarkerAlt, FaClock, FaUsers, FaRoute } from 'react-icons/fa';

const Transportation = () => {
  const pickupPoints = [
    "Victoria Island Terminal",
    "Lekki Phase 1",
    "Ikeja GRA",
    "Surulere",
    "Yaba",
    "Oshodi",
    "Alausa Secretariat"
  ];

  const transportFeatures = [
    {
      icon: <FaBus />,
      title: "100 Free BRT Buses",
      description: "Complimentary transportation from major pickup points across Lagos"
    },
    {
      icon: <FaClock />,
      title: "Scheduled Departures",
      description: "Buses depart every 30 minutes starting from 7:00 AM"
    },
    {
      icon: <FaUsers />,
      title: "Capacity for 5,000+",
      description: "Each bus accommodates 50 passengers with comfortable seating"
    },
    {
      icon: <FaRoute />,
      title: "Multiple Routes",
      description: "Covering all major areas of Lagos with convenient pickup points"
    }
  ];

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
          <h2 className="section-title">Free Transportation Available</h2>
          <p className="section-subtitle">
            We've arranged 100 BRT buses to ensure all attendees can easily reach the event venue. 
            No need to worry about transportation - we've got you covered!
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* Transportation Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1.5rem',
                color: 'var(--primary-green)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <FaBus style={{ color: 'var(--accent-gold)' }} />
                Transportation Services
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                {transportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div style={{ 
                      fontSize: '1.5rem', 
                      color: 'var(--primary-green)',
                      flexShrink: 0,
                      marginTop: '0.25rem'
                    }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        fontSize: '1.1rem', 
                        marginBottom: '0.5rem',
                        color: 'var(--primary-green)',
                        fontWeight: '600'
                      }}>
                        {feature.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5'
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, var(--accent-gold), #FFA000)',
                color: 'var(--dark-gray)',
                borderRadius: '10px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <h4 style={{ 
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  fontSize: '1.1rem'
                }}>
                  🚌 First Bus Departure
                </h4>
                <p style={{ 
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  7:00 AM • October 4th, 2025
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pickup Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
              color: 'white',
              border: 'none'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1.5rem',
                color: 'var(--accent-gold)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <FaMapMarkerAlt />
                Pickup Points
              </h3>
              
              <p style={{ 
                fontSize: '1rem', 
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                Free BRT buses will be available at the following locations:
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                {pickupPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      marginBottom: '1rem',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                  >
                    <div style={{ 
                      fontSize: '1.2rem',
                      color: 'var(--accent-gold)'
                    }}>
                      🚏
                    </div>
                    <span style={{ fontWeight: '500' }}>{point}</span>
                  </motion.div>
                ))}
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <h4 style={{ 
                  marginBottom: '0.5rem',
                  color: 'var(--accent-gold)',
                  fontWeight: '600'
                }}>
                  📍 More Locations Coming Soon
                </h4>
                <p style={{ 
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  margin: 0
                }}>
                  Additional pickup points will be announced based on registration distribution
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="card" style={{ 
            background: 'var(--white)',
            border: '3px solid var(--primary-green)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              color: 'var(--primary-green)',
              fontWeight: '700'
            }}>
              ⚠️ Important Transportation Information
            </h3>
            
            <div className="grid grid-2" style={{ gap: '2rem', textAlign: 'left' }}>
              <div>
                <h4 style={{ 
                  marginBottom: '0.75rem',
                  color: 'var(--primary-green)',
                  fontWeight: '600'
                }}>
                  🕐 Schedule
                </h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: 'var(--text-secondary)'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>• First departure: 7:00 AM</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Buses every 30 minutes</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Last departure: 8:30 AM</li>
                  <li>• Return buses: 5:00 PM - 7:00 PM</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ 
                  marginBottom: '0.75rem',
                  color: 'var(--primary-green)',
                  fontWeight: '600'
                }}>
                  📋 Requirements
                </h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: 'var(--text-secondary)'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Event registration required</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Arrive 15 minutes early</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Bring confirmation email</li>
                  <li>• Face mask recommended</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-gold), #FFA000)',
              color: 'var(--dark-gray)',
              borderRadius: '10px',
              padding: '1rem',
              marginTop: '1.5rem',
              fontWeight: '600'
            }}>
              🎫 Transportation is included with your free event registration!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transportation; 