const validateRegistration = (req, res, next) => {
  const { name, email, phone } = req.body;

  // Check required fields
  if (!name || !email || !phone) {
    return res.status(400).json({
      status: 'error',
      message: 'Name, email, and phone are required fields'
    });
  }

  // Validate name
  if (name.trim().length < 2) {
    return res.status(400).json({
      status: 'error',
      message: 'Name must be at least 2 characters long'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please enter a valid email address'
    });
  }

  // Validate phone number (basic validation for Nigerian numbers)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({
      status: 'error',
      message: 'Please enter a valid phone number'
    });
  }

  // Sanitize data
  req.body.name = name.trim();
  req.body.email = email.toLowerCase().trim();
  req.body.phone = phone.trim();
  req.body.city = req.body.city ? req.body.city.trim() : '';
  req.body.isRealtor = req.body.isRealtor || 'no';

  next();
};

const validateVendorApplication = (req, res, next) => {
  const { businessName, contactPerson, email, phone, vendorType } = req.body;

  // Check required fields
  if (!businessName || !contactPerson || !email || !phone || !vendorType) {
    return res.status(400).json({
      status: 'error',
      message: 'Business name, contact person, email, phone, and vendor type are required fields'
    });
  }

  // Validate business name
  if (businessName.trim().length < 2) {
    return res.status(400).json({
      status: 'error',
      message: 'Business name must be at least 2 characters long'
    });
  }

  // Validate contact person
  if (contactPerson.trim().length < 2) {
    return res.status(400).json({
      status: 'error',
      message: 'Contact person name must be at least 2 characters long'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please enter a valid email address'
    });
  }

  // Validate phone number
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({
      status: 'error',
      message: 'Please enter a valid phone number'
    });
  }

  // Validate vendor type
  const validVendorTypes = ['food', 'media', 'exhibitor', 'sponsor', 'other'];
  if (!validVendorTypes.includes(vendorType)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please select a valid vendor type'
    });
  }

  // Sanitize data
  req.body.businessName = businessName.trim();
  req.body.contactPerson = contactPerson.trim();
  req.body.email = email.toLowerCase().trim();
  req.body.phone = phone.trim();
  req.body.message = req.body.message ? req.body.message.trim() : '';

  next();
};

module.exports = {
  validateRegistration,
  validateVendorApplication
}; 