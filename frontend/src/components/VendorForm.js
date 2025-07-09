import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaUtensils, FaNewspaper, FaStore, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const VendorForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const vendorTypes = [
    { value: 'food', label: 'Food & Beverage Vendor', icon: <FaUtensils /> },
    { value: 'media', label: 'Media Partner', icon: <FaNewspaper /> },
    { value: 'exhibitor', label: 'Exhibition Booth', icon: <FaStore /> },
    { value: 'sponsor', label: 'Event Sponsor', icon: <FaHandshake /> },
    { value: 'other', label: 'Other Partnership', icon: <FaHandshake /> }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/email/vendor-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || 'Vendor application failed');
      }
    } catch (error) {
      console.error('Vendor application error:', error);
      alert(error.message || 'Failed to submit vendor application. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="vendor-form" className="section bg-pattern">
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
                🎉 Application Submitted!
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
                Thank you for your interest in partnering with us! We've received your application 
                and will contact you within 48 hours with next steps.
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
                  <li style={{ marginBottom: '0.5rem' }}>📞 We'll call within 48 hours</li>
                  <li style={{ marginBottom: '0.5rem' }}>📋 Review partnership details</li>
                  <li>🤝 Finalize agreement and logistics</li>
                </ul>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn btn-gold"
              >
                Submit Another Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="vendor-form" className="section bg-pattern">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="section-title">Want to Serve or Exhibit?</h2>
          <p className="section-subtitle">
            Join us as a vendor, partner, or exhibitor at the world's largest real estate event. 
            Reach 5,000+ attendees and grow your business!
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* Vendor Application Form */}
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
                Partnership Application
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="form-label">Business Name *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.businessName ? 'error' : ''}`}
                    placeholder="Enter your business name"
                    {...register('businessName', { 
                      required: 'Business name is required',
                      minLength: { value: 2, message: 'Business name must be at least 2 characters' }
                    })}
                  />
                  {errors.businessName && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.businessName.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Person *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.contactPerson ? 'error' : ''}`}
                    placeholder="Enter contact person name"
                    {...register('contactPerson', { 
                      required: 'Contact person is required'
                    })}
                  />
                  {errors.contactPerson && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.contactPerson.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
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
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="Enter your phone number"
                    {...register('phone', { 
                      required: 'Phone number is required'
                    })}
                  />
                  {errors.phone && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Partnership Type *</label>
                  <select 
                    className={`form-input ${errors.vendorType ? 'error' : ''}`}
                    {...register('vendorType', { 
                      required: 'Please select a partnership type'
                    })}
                  >
                    <option value="">Select partnership type</option>
                    {vendorTypes.map((type, index) => (
                      <option key={index} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.vendorType && (
                    <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {errors.vendorType.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea form-input"
                    placeholder="Tell us about your business and how you'd like to partner with us..."
                    rows="4"
                    {...register('message')}
                  />
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
                      Submitting Application...
                    </>
                  ) : (
                    '🚀 Apply Now'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Partnership Benefits */}
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
                Partnership Benefits
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '2rem' }}>👥</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: '600' }}>
                      Massive Exposure
                    </h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Reach 5,000+ real estate professionals and investors
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '2rem' }}>📺</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: '600' }}>
                      Media Coverage
                    </h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Featured in national media and event promotions
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '2rem' }}>🤝</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: '600' }}>
                      Networking Opportunities
                    </h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Direct access to industry leaders and decision makers
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem'
                }}>
                  <div style={{ fontSize: '2rem' }}>💰</div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: '600' }}>
                      Revenue Generation
                    </h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      Generate sales and leads from qualified attendees
                    </p>
                  </div>
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
                  ⚡ Limited Partnership Slots
                </h4>
                <p style={{ 
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  margin: 0
                }}>
                  Only 50 vendor spots available. Apply early to secure your place!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VendorForm; 