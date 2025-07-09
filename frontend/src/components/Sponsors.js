import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaHandshake, FaBuilding } from 'react-icons/fa';

const Sponsors = () => {
  const sponsors = [
    {
      name: "Lagos State Ministry of Empowerment",
      logo: "🏛️",
      tier: "Platinum",
      description: "Official government partner driving economic empowerment initiatives"
    },
    {
      name: "Nigerian Real Estate Association",
      logo: "🏢",
      tier: "Gold",
      description: "Leading industry association representing real estate professionals"
    },
    {
      name: "First Bank of Nigeria",
      logo: "🏦",
      tier: "Gold",
      description: "Financial services partner providing mortgage and investment solutions"
    },
    {
      name: "Lagos State Property Development Corporation",
      logo: "🏗️",
      tier: "Silver",
      description: "Government agency focused on sustainable property development"
    }
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
          <h2 className="section-title">Our Esteemed Sponsors</h2>
          <p className="section-subtitle">
            Proudly supported by leading organizations committed to real estate excellence 
            and economic empowerment.
          </p>
        </motion.div>

        {/* Featured Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--accent-gold), #FFA000)',
            color: 'var(--dark-gray)',
            border: 'none',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              <FaCrown />
            </div>
            <h3 style={{ 
              fontSize: '2rem', 
              marginBottom: '0.5rem',
              fontWeight: '700'
            }}>
              Platinum Sponsor
            </h3>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              🏛️
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Lagos State Ministry of Empowerment
            </h4>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '1.5rem',
              opacity: 0.8
            }}>
              Official government partner committed to driving economic empowerment, 
              sustainable development, and real estate innovation across Lagos State.
            </p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '1rem',
              display: 'inline-block'
            }}>
              <strong>Official Government Partner</strong>
            </div>
          </div>
        </motion.div>

        {/* Other Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-3 mb-4"
        >
          {sponsors.slice(1).map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
              style={{ 
                background: 'var(--white)',
                border: '2px solid var(--light-gray)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {sponsor.logo}
              </div>
              <div style={{
                background: sponsor.tier === 'Gold' ? 'linear-gradient(135deg, #FFD700, #FFA000)' : 'linear-gradient(135deg, #C0C0C0, #A0A0A0)',
                color: sponsor.tier === 'Gold' ? 'var(--dark-gray)' : 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                {sponsor.tier} Sponsor
              </div>
              <h4 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '0.75rem',
                color: 'var(--primary-green)',
                fontWeight: '600'
              }}>
                {sponsor.name}
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)',
                lineHeight: '1.5'
              }}>
                {sponsor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
            color: 'white',
            border: 'none',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              <FaHandshake />
            </div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Want to Sponsor This Historic Event?
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Join industry leaders and gain exclusive visibility to 5,000+ real estate professionals, 
              investors, and government officials. Limited sponsorship opportunities available.
            </p>
            
            <div className="grid grid-3" style={{ gap: '1rem', marginBottom: '2rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>5,000+ Attendees</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Massive exposure</p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📺</div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Media Coverage</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>National exposure</p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
                <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Networking</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Direct access</p>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('vendor-form').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-gold"
              style={{ fontSize: '1.1rem', padding: '18px 36px' }}
            >
              <FaBuilding style={{ marginRight: '0.5rem' }} />
              Become a Partner
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors; 