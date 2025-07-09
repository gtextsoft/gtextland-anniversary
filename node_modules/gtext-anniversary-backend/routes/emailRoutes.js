const express = require('express');
const router = express.Router();
const { sendRegistrationEmail, sendVendorApplicationEmail } = require('../services/emailService');
const { validateRegistration, validateVendorApplication } = require('../middleware/validation');

// Registration endpoint
router.post('/register', validateRegistration, async (req, res) => {
  try {
    const { name, email, phone, city, isRealtor } = req.body;

    // Send confirmation email
    await sendRegistrationEmail({
      name,
      email,
      phone,
      city,
      isRealtor
    });

    // Log registration (in production, save to database)
    console.log(`✅ New registration: ${name} (${email}) - ${new Date().toISOString()}`);

    res.status(200).json({
      status: 'success',
      message: 'Registration successful! Check your email for confirmation.',
      data: {
        name,
        email,
        registrationId: `GTEXT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      }
    });

  } catch (error) {
    console.error('❌ Registration error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process registration. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Vendor application endpoint
router.post('/vendor-application', validateVendorApplication, async (req, res) => {
  try {
    const { businessName, contactPerson, email, phone, vendorType, message } = req.body;

    // Send vendor application email
    await sendVendorApplicationEmail({
      businessName,
      contactPerson,
      email,
      phone,
      vendorType,
      message
    });

    // Log vendor application
    console.log(`🏢 New vendor application: ${businessName} (${contactPerson}) - ${new Date().toISOString()}`);

    res.status(200).json({
      status: 'success',
      message: 'Vendor application submitted successfully! We\'ll contact you within 48 hours.',
      data: {
        businessName,
        contactPerson,
        email,
        applicationId: `VENDOR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      }
    });

  } catch (error) {
    console.error('❌ Vendor application error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit vendor application. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Test email endpoint (for development)
if (process.env.NODE_ENV === 'development') {
  router.post('/test-email', async (req, res) => {
    try {
      const { email, type } = req.body;
      
      if (type === 'registration') {
        await sendRegistrationEmail({
          name: 'Test User',
          email,
          phone: '+234 801 234 5678',
          city: 'Lagos',
          isRealtor: 'yes'
        });
      } else if (type === 'vendor') {
        await sendVendorApplicationEmail({
          businessName: 'Test Business',
          contactPerson: 'Test Contact',
          email,
          phone: '+234 801 234 5678',
          vendorType: 'food',
          message: 'Test vendor application'
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Test email sent successfully!'
      });

    } catch (error) {
      console.error('❌ Test email error:', error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to send test email.',
        error: error.message
      });
    }
  });
}

module.exports = router; 