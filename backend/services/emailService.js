const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration missing. Please set EMAIL_USER and EMAIL_PASS environment variables.');
  }
  
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Registration email template
const createRegistrationEmailHTML = (data) => {
  const { name, email, phone, city, isRealtor } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Confirmation - Gtext 10th Anniversary</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2E7D32, #4CAF50); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #FFD700; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .button { display: inline-block; background: #2E7D32; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2E7D32; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Registration Confirmed!</h1>
          <p>You're officially registered for the World's Largest Real Estate Event</p>
        </div>
        
        <div class="content">
          <h2>Hello ${name},</h2>
          
          <p>Thank you for registering for <strong>Gtext Land & Homes 10th Anniversary Celebration</strong> - the world's largest real estate event!</p>
          
          <div class="highlight">
            <h3>📅 Event Details</h3>
            <p><strong>Date:</strong> October 4th, 2025</p>
            <p><strong>Time:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Venue:</strong> Lagos State Convention Center (TBC)</p>
            <p><strong>Admission:</strong> FREE (You're all set!)</p>
          </div>
          
          <div class="info-box">
            <h3>📋 Your Registration Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>City:</strong> ${city || 'Not specified'}</p>
            <p><strong>Realtor:</strong> ${isRealtor === 'yes' ? 'Yes' : 'No'}</p>
          </div>
          
          <h3>🚌 Transportation</h3>
          <p>Free BRT buses will be available from 7:00 AM at major pickup points across Lagos. Arrive 15 minutes before departure time.</p>
          
          <h3>🎁 What to Expect</h3>
          <ul>
            <li>Networking with 5,000+ real estate professionals</li>
            <li>Exclusive property investment opportunities</li>
            <li>Insights from industry leaders</li>
            <li>Complimentary refreshments</li>
            <li>Special anniversary discounts</li>
            <li>Commemorative gifts</li>
          </ul>
          
          <div class="highlight">
            <h3>⚡ Important Reminders</h3>
            <ul>
              <li>Bring this confirmation email (digital or printed)</li>
              <li>Arrive early to avoid parking congestion</li>
              <li>Bring business cards for networking</li>
              <li>Follow us on social media for updates</li>
            </ul>
          </div>
          
          <p style="text-align: center;">
            <a href="https://gtextland.com" class="button" style="color: white; text-decoration: none;">Visit Our Website</a>
          </p>
          
          <div class="footer">
            <p>If you have any questions, contact us at events@gtextland.com or call +234 801 234 5678</p>
            <p>© 2025 Gtext Land & Homes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Vendor application email template
const createVendorApplicationEmailHTML = (data) => {
  const { businessName, contactPerson, email, phone, vendorType, message } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vendor Application Received - Gtext 10th Anniversary</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2E7D32, #4CAF50); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #FFD700; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2E7D32; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏢 Vendor Application Received!</h1>
          <p>Thank you for your interest in partnering with us</p>
        </div>
        
        <div class="content">
          <h2>Hello ${contactPerson},</h2>
          
          <p>Thank you for submitting your vendor application for the <strong>Gtext Land & Homes 10th Anniversary Celebration</strong>!</p>
          
          <div class="info-box">
            <h3>📋 Application Details</h3>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Contact Person:</strong> ${contactPerson}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Vendor Type:</strong> ${vendorType.charAt(0).toUpperCase() + vendorType.slice(1)}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          
          <div class="highlight">
            <h3>⏰ What's Next?</h3>
            <p>Our partnership team will review your application and contact you within <strong>48 hours</strong> with:</p>
            <ul>
              <li>Partnership opportunities and pricing</li>
              <li>Available booth spaces and locations</li>
              <li>Logistics and setup information</li>
              <li>Marketing and promotional benefits</li>
            </ul>
          </div>
          
          <h3>🎯 Event Highlights</h3>
          <ul>
            <li><strong>5,000+ attendees</strong> - Real estate professionals and investors</li>
            <li><strong>National media coverage</strong> - TV, radio, and online platforms</li>
            <li><strong>Networking opportunities</strong> - Direct access to decision makers</li>
            <li><strong>Revenue potential</strong> - Generate sales and leads</li>
          </ul>
          
          <p>If you have any urgent questions, please contact our partnership team at:</p>
          <p><strong>Email:</strong> partnerships@gtextland.com</p>
          <p><strong>Phone:</strong> +234 801 234 5678</p>
          
          <div class="footer">
            <p>We look forward to partnering with you for this historic event!</p>
            <p>© 2025 Gtext Land & Homes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send registration confirmation email
const sendRegistrationEmail = async (data) => {
  try {
    // In development mode without email config, just log the registration
    if (process.env.NODE_ENV === 'development' && (!process.env.EMAIL_USER || !process.env.EMAIL_PASS)) {
      console.log('📧 [DEV MODE] Registration email would be sent to:', data.email);
      console.log('📧 [DEV MODE] Email content:', createRegistrationEmailHTML(data));
      return true; // Return success for development
    }
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Gtext Land & Homes" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "🎉 You're Registered for Gtext's 10th Anniversary Event!",
      html: createRegistrationEmailHTML(data),
      text: `
        Registration Confirmation - Gtext 10th Anniversary
        
        Hello ${data.name},
        
        Thank you for registering for Gtext Land & Homes 10th Anniversary Celebration!
        
        Event Details:
        - Date: October 4th, 2025
        - Time: 9:00 AM - 6:00 PM
        - Venue: Lagos State Convention Center (TBC)
        - Admission: FREE
        
        Your Registration Details:
        - Name: ${data.name}
        - Email: ${data.email}
        - Phone: ${data.phone}
        - City: ${data.city || 'Not specified'}
        - Realtor: ${data.isRealtor === 'yes' ? 'Yes' : 'No'}
        
        Transportation: Free BRT buses available from 7:00 AM
        
        What to Expect:
        - Networking with 5,000+ real estate professionals
        - Exclusive property investment opportunities
        - Insights from industry leaders
        - Complimentary refreshments
        - Special anniversary discounts
        - Commemorative gifts
        
        Important: Bring this confirmation email and arrive early!
        
        Contact: events@gtextland.com or +234 801 234 5678
        
        © 2025 Gtext Land & Homes
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 Registration email sent to ${data.email}: ${info.messageId}`);
    return info;

  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw new Error('Failed to send registration email');
  }
};

// Send vendor application email
const sendVendorApplicationEmail = async (data) => {
  try {
    // In development mode without email config, just log the application
    if (process.env.NODE_ENV === 'development' && (!process.env.EMAIL_USER || !process.env.EMAIL_PASS)) {
      console.log('📧 [DEV MODE] Vendor application email would be sent to:', data.email);
      console.log('📧 [DEV MODE] Email content:', createVendorApplicationEmailHTML(data));
      return true; // Return success for development
    }
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Gtext Land & Homes" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "🏢 Vendor Application Received - Gtext 10th Anniversary",
      html: createVendorApplicationEmailHTML(data),
      text: `
        Vendor Application Received - Gtext 10th Anniversary
        
        Hello ${data.contactPerson},
        
        Thank you for submitting your vendor application for the Gtext Land & Homes 10th Anniversary Celebration!
        
        Application Details:
        - Business Name: ${data.businessName}
        - Contact Person: ${data.contactPerson}
        - Email: ${data.email}
        - Phone: ${data.phone}
        - Vendor Type: ${data.vendorType}
        ${data.message ? `- Message: ${data.message}` : ''}
        
        What's Next:
        Our partnership team will review your application and contact you within 48 hours with partnership opportunities, pricing, and logistics information.
        
        Event Highlights:
        - 5,000+ attendees
        - National media coverage
        - Networking opportunities
        - Revenue potential
        
        Contact: partnerships@gtextland.com or +234 801 234 5678
        
        © 2025 Gtext Land & Homes
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 Vendor application email sent to ${data.email}: ${info.messageId}`);
    return info;

  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw new Error('Failed to send vendor application email');
  }
};

// Send notification to admin (optional)
const sendAdminNotification = async (type, data) => {
  try {
    const transporter = createTransporter();
    
    let subject, html;
    
    if (type === 'registration') {
      subject = `🎉 New Registration: ${data.name}`;
      html = `
        <h2>New Event Registration</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>City:</strong> ${data.city || 'Not specified'}</p>
        <p><strong>Realtor:</strong> ${data.isRealtor === 'yes' ? 'Yes' : 'No'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `;
    } else if (type === 'vendor') {
      subject = `🏢 New Vendor Application: ${data.businessName}`;
      html = `
        <h2>New Vendor Application</h2>
        <p><strong>Business:</strong> ${data.businessName}</p>
        <p><strong>Contact:</strong> ${data.contactPerson}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Type:</strong> ${data.vendorType}</p>
        <p><strong>Message:</strong> ${data.message || 'No message'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `;
    }

    const mailOptions = {
      from: `"Gtext System" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 Admin notification sent: ${info.messageId}`);

  } catch (error) {
    console.error('❌ Admin notification error:', error);
    // Don't throw error for admin notifications
  }
};

module.exports = {
  sendRegistrationEmail,
  sendVendorApplicationEmail,
  sendAdminNotification
}; 