import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "CEO, Gtext Land & Homes",
      company: "Gtext Land & Homes",
      expertise: "Real Estate Development & Investment",
      image: "👩‍💼",
      bio: "Leading Gtext's expansion across Nigeria with innovative property solutions."
    },
    {
      name: "Chief Michael Adebayo",
      title: "Commissioner",
      company: "Lagos State Ministry of Empowerment",
      expertise: "Government Relations & Urban Development",
      image: "👨‍💼",
      bio: "Driving economic empowerment and sustainable urban development initiatives."
    },
    {
      name: "Prof. Aisha Mohammed",
      title: "Director of Real Estate Studies",
      company: "University of Lagos",
      expertise: "Real Estate Economics & Research",
      image: "👩‍🎓",
      bio: "Leading research in sustainable real estate development and market analysis."
    },
    {
      name: "Engr. David Okonkwo",
      title: "Managing Director",
      company: "Nigerian Property Investment Trust",
      expertise: "Property Investment & Portfolio Management",
      image: "👨‍💻",
      bio: "Expert in real estate investment strategies and portfolio optimization."
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
          <h2 className="section-title">Meet the Giants of the Industry</h2>
          <p className="section-subtitle">
            Learn from the most influential leaders and experts in real estate, 
            government, and investment sectors.
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ 
          gap: '2rem',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)'
        }}>
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ 
                display: 'flex', 
                gap: window.innerWidth <= 768 ? '1rem' : '1.5rem',
                alignItems: 'flex-start',
                border: '2px solid var(--light-gray)',
                flexDirection: window.innerWidth <= 480 ? 'column' : 'row'
              }}
            >
              <div style={{
                fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
                flexShrink: 0,
                background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
                color: 'white',
                borderRadius: '50%',
                width: window.innerWidth <= 768 ? '60px' : '80px',
                height: window.innerWidth <= 768 ? '60px' : '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: window.innerWidth <= 480 ? 'center' : 'flex-start'
              }}>
                {speaker.image}
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem', 
                  marginBottom: '0.5rem',
                  color: 'var(--primary-green)',
                  fontWeight: '700',
                  textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                }}>
                  {speaker.name}
                </h3>
                
                <p style={{ 
                  fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem', 
                  marginBottom: '0.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                }}>
                  {speaker.title}
                </p>
                
                <p style={{ 
                  fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem', 
                  marginBottom: '0.5rem',
                  color: 'var(--accent-gold)',
                  fontWeight: '600',
                  textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                }}>
                  {speaker.company}
                </p>
                
                <p style={{ 
                  fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.85rem', 
                  marginBottom: '0.75rem',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                }}>
                  {speaker.expertise}
                </p>
                
                <p style={{ 
                  fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.9rem', 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  textAlign: window.innerWidth <= 480 ? 'center' : 'left'
                }}>
                  {speaker.bio}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  marginTop: '1rem',
                  justifyContent: window.innerWidth <= 480 ? 'center' : 'flex-start'
                }}>
                  <button className="btn btn-secondary" style={{ 
                    padding: '8px 12px', 
                    fontSize: '0.8rem' 
                  }}>
                    <FaLinkedin style={{ marginRight: '0.25rem' }} />
                    LinkedIn
                  </button>
                  <button className="btn btn-secondary" style={{ 
                    padding: '8px 12px', 
                    fontSize: '0.8rem' 
                  }}>
                    <FaTwitter style={{ marginRight: '0.25rem' }} />
                    Twitter
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--accent-gold), #FFA000)',
            color: 'var(--dark-gray)',
            border: 'none',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              <FaMicrophone />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              More Speakers Announced Soon!
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '1.5rem',
              opacity: 0.8
            }}>
              We're finalizing our speaker lineup with more industry leaders, 
              government officials, and investment experts. Stay tuned for updates!
            </p>
            <button 
              onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Register to Get Updates
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers; 