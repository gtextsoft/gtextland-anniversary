import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTicketAlt, FaTimes } from 'react-icons/fa';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300); // Show after 300px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer',
            border: '2px solid var(--accent-gold)',
            maxWidth: '90vw',
            backdropFilter: 'blur(10px)'
          }}
          onClick={scrollToRegistration}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTicketAlt style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }} />
          <div>
            <div style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              🎫 Register Now — Free Ticket
            </div>
            <div style={{ 
              fontSize: '0.8rem', 
              opacity: 0.8,
              whiteSpace: 'nowrap'
            }}>
              Limited seats available!
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA; 