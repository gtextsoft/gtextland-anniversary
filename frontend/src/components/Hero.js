import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero bg-gradient" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
        `,
        zIndex: 1
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBlock: '80px' }}>
        <div className="grid grid-2" style={{ 
          alignItems: 'center', 
          gap: window.innerWidth <= 768 ? '2rem' : '4rem',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)'
        }}>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero-badge"
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              🎉 10th Anniversary Celebration
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: window.innerWidth <= 768 ? '2.5rem' : window.innerWidth <= 1024 ? '3rem' : '3.5rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '1.5rem',
                lineHeight: '1.2',
                textAlign: window.innerWidth <= 768 ? 'center' : 'left'
              }}
            >
              The World's Largest Real Estate Event Is Coming!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem',
                lineHeight: '1.6',
                textAlign: window.innerWidth <= 768 ? 'center' : 'left'
              }}
            >
              Join <strong>5,000+ visionaries</strong> on October 4th to celebrate 10 years of Gtext Land & Homes. 
              Be part of real estate history in the making.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-stats"
              style={{
                display: 'flex',
                gap: window.innerWidth <= 768 ? '1rem' : '2rem',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
                justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                <FaCalendarAlt style={{ color: 'var(--accent-gold)' }} />
                <span><strong>October 4th, 2025</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                <FaUsers style={{ color: 'var(--accent-gold)' }} />
                <span><strong>5,000+ Attendees</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                <FaMapMarkerAlt style={{ color: 'var(--accent-gold)' }} />
                <span><strong>Lagos, Nigeria</strong></span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-cta"
              style={{ 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap',
                justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start'
              }}
            >
              <button 
                onClick={scrollToRegistration}
                className="btn btn-gold"
                style={{ 
                  fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem', 
                  padding: window.innerWidth <= 768 ? '15px 25px' : '18px 36px'
                }}
              >
                🎫 Register Now — Free Ticket
              </button>
              <button 
                onClick={() => document.getElementById('event-details').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
                style={{ 
                  fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem', 
                  padding: window.innerWidth <= 768 ? '15px 25px' : '18px 36px'
                }}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-visual"
            style={{ textAlign: 'center' }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '3rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                🏢🏠🏘️
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                Real Estate Revolution
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem'
              }}>
                The biggest property celebration the world has ever seen
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 3
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>Scroll to explore</div>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'white',
          margin: '0 auto',
          animation: 'bounce 2s infinite'
        }} />
      </motion.div>
    </section>
  );
};

export default Hero; 