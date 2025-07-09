import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: 'var(--dark-gray)', 
      color: 'white',
      position: 'relative'
    }}>
      <div className="container" style={{ padding: '60px 20px 30px' }}>
        <div className="grid grid-4" style={{ gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              color: 'var(--accent-gold)',
              fontWeight: '700'
            }}>
              Gtext Land & Homes
            </h3>
            <p style={{ 
              fontSize: '0.9rem', 
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              opacity: 0.8
            }}>
              Leading real estate development company with 10 years of excellence in 
              property investment, development, and management across Nigeria.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-gold)',
                transition: 'color 0.3s ease'
              }}>
                <FaFacebook />
              </a>
              <a href="#" style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-gold)',
                transition: 'color 0.3s ease'
              }}>
                <FaTwitter />
              </a>
              <a href="#" style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-gold)',
                transition: 'color 0.3s ease'
              }}>
                <FaInstagram />
              </a>
              <a href="#" style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-gold)',
                transition: 'color 0.3s ease'
              }}>
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1rem',
              color: 'var(--accent-gold)',
              fontWeight: '600'
            }}>
              Quick Links
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  About Gtext
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Our Properties
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Investment Opportunities
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Event Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1rem',
              color: 'var(--accent-gold)',
              fontWeight: '600'
            }}>
              Event Info
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#event-details" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Event Details
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#registration" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Register Now
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#speakers" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Speakers
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#sponsors" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Sponsors
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#vendor-form" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Become a Vendor
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1rem',
              color: 'var(--accent-gold)',
              fontWeight: '600'
            }}>
              Contact Info
            </h4>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <FaPhone style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  +234 801 234 5678
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <FaEnvelope style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  events@gtextland.com
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}>
                <FaMapMarkerAlt style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  Lagos, Nigeria
                </span>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <h5 style={{ 
                marginBottom: '0.5rem',
                color: 'var(--accent-gold)',
                fontWeight: '600'
              }}>
                🎉 10th Anniversary
              </h5>
              <p style={{ 
                fontSize: '0.8rem',
                opacity: 0.8,
                margin: 0
              }}>
                Celebrating a decade of excellence in real estate
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            © 2025 Gtext Land & Homes. All rights reserved.
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none'
            }}>
              Terms of Service
            </a>
            <a href="#" style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none'
            }}>
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: 'var(--accent-gold)',
          color: 'var(--dark-gray)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer; 