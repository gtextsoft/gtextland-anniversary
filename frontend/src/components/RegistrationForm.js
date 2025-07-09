import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationCount, setRegistrationCount] = useState(3427); // Mock count

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/email/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        // Increment registration count
        setRegistrationCount(prev => prev + 1);
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
        
        // Auto-scroll to the registration section
        setTimeout(() => {
          const registrationSection = document.getElementById('registration');
          if (registrationSection) {
            registrationSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message || 'Failed to register. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="section bg-pattern">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="card" style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
              color: 'white',
              border: 'none'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
                <FaCheckCircle />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '700' }}>
                🎉 Registration Successful!
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
                Thank you for registering! We've sent a confirmation email with event details. 
                Check your inbox and spam folder.
              </p>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>
                  What's Next?
                </h3>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>📧 Check your email for confirmation</li>
                  <li style={{ marginBottom: '0.5rem' }}>📅 Add event to your calendar</li>
                  <li style={{ marginBottom: '0.5rem' }}>🚌 Transportation details coming soon</li>
                  <li>📱 Follow us on social media for updates</li>
                </ul>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn btn-gold"
              >
                Register Another Person
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="section bg-pattern">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="section-title">Reserve Your Spot</h2>
          <p className="section-subtitle">
            Join 5,000+ real estate professionals and investors for the world's largest property event. 
            Registration is completely free!
          </p>
          
          {/* Registration Counter */}
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-gold), #FFA000)',
            color: 'var(--dark-gray)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            display: 'inline-block',
            marginBottom: '2rem',
            fontWeight: '700',
            fontSize: '1.1rem'
          }}>
            🎯 {registrationCount.toLocaleString()} people already registered!
          </div>
        </motion.div>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* Registration Form */}
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
                fontWeight: '700'
              }}>
                Event Registration Form
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="form-label">
                    <FaUser style={{ marginRight: '0.5rem' }} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    {...register('name', { 
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                  {errors.name && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaEnvelope style={{ marginRight: '0.5rem' }} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaPhone style={{ marginRight: '0.5rem' }} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="Enter your phone number"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: { 
                        value: /^[\+]?[1-9][\d]{0,15}$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                  />
                  {errors.phone && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
                    City
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your city"
                    {...register('city')}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaBuilding style={{ marginRight: '0.5rem' }} />
                    Are you a Realtor?
                  </label>
                  <select className="form-input" {...register('isRealtor')}>
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I am a Realtor</option>
                    <option value="no">No, I am not a Realtor</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    fontSize: '1.1rem',
                    padding: '18px',
                    marginTop: '1rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" style={{ marginRight: '0.5rem' }}></span>
                      Processing Registration...
                    </>
                  ) : (
                    '🎫 Reserve My Spot — Free Ticket'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Benefits Sidebar */}
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
                fontWeight: '700'
              }}>
                What You'll Get
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--accent-gold)', marginRight: '0.75rem' }} />
                  <span>Free admission to the event</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--accent-gold)', marginRight: '0.75rem' }} />
                  <span>Complimentary refreshments</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--accent-gold)', marginRight: '0.75rem' }} />
                  <span>Free BRT transportation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--accent-gold)', marginRight: '0.75rem' }} />
                  <span>Networking opportunities</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--accent-gold)', marginRight: '0.75rem' }} />
                  <span>Exclusive property deals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaCheckCircle style={{ color: 'var(--accent-gold)', marginRight: '0.75rem' }} />
                  <span>Commemorative gifts</span>
                </div>
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
                  ⚡ Limited Time Offer
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>
                  First 1,000 registrations get exclusive access to premium property previews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm; 