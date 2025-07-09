# Gtext Anniversary Backend

Backend server for Gtext Land & Homes 10th Anniversary event, handling email notifications and form submissions.

## 🚀 Features

- **Email Service**: Send registration confirmations and vendor application notifications
- **Form Validation**: Comprehensive validation for registration and vendor forms
- **Security**: Rate limiting, CORS, and input sanitization
- **Error Handling**: Graceful error handling with detailed logging
- **Beautiful Email Templates**: HTML email templates with Gtext branding

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Email service account (Gmail, Outlook, or custom SMTP)

## 🛠 Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@gtextland.com
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

### Outlook/Hotmail Setup
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Custom SMTP Setup
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and version information.

### Registration
```
POST /api/email/register
```
Register for the event.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+234 801 234 5678",
  "city": "Lagos",
  "isRealtor": "yes"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Registration successful! Check your email for confirmation.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "registrationId": "GTEXT-1234567890-ABC123DEF"
  }
}
```

### Vendor Application
```
POST /api/email/vendor-application
```
Submit vendor/partner application.

**Request Body:**
```json
{
  "businessName": "ABC Catering",
  "contactPerson": "Jane Smith",
  "email": "jane@abccatering.com",
  "phone": "+234 801 234 5678",
  "vendorType": "food",
  "message": "We would like to provide catering services for the event."
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Vendor application submitted successfully! We'll contact you within 48 hours.",
  "data": {
    "businessName": "ABC Catering",
    "contactPerson": "Jane Smith",
    "email": "jane@abccatering.com",
    "applicationId": "VENDOR-1234567890-ABC123DEF"
  }
}
```

### Test Email (Development Only)
```
POST /api/email/test-email
```
Send test emails for development.

**Request Body:**
```json
{
  "email": "test@example.com",
  "type": "registration" // or "vendor"
}
```

## 🔒 Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Protection**: Configured for frontend domain
- **Input Validation**: Comprehensive form validation
- **Input Sanitization**: Clean and sanitize all inputs
- **Helmet**: Security headers
- **Error Handling**: No sensitive information in error responses

## 📁 Project Structure

```
backend/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── env.example           # Environment variables template
├── routes/
│   └── emailRoutes.js    # Email-related routes
├── middleware/
│   ├── validation.js     # Form validation middleware
│   └── errorHandler.js   # Error handling middleware
└── services/
    └── emailService.js   # Email service with templates
```

## 🧪 Testing

### Manual Testing
1. Start the server: `npm run dev`
2. Use Postman or curl to test endpoints:

```bash
# Test registration
curl -X POST http://localhost:5000/api/email/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+234 801 234 5678",
    "city": "Lagos",
    "isRealtor": "yes"
  }'

# Test vendor application
curl -X POST http://localhost:5000/api/email/vendor-application \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Test Business",
    "contactPerson": "Test Contact",
    "email": "test@business.com",
    "phone": "+234 801 234 5678",
    "vendorType": "food",
    "message": "Test application"
  }'
```

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://yourdomain.com
EMAIL_SERVICE=gmail
EMAIL_USER=events@gtextland.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@gtextland.com
```

### Deploy to Heroku
1. Create Heroku app
2. Set environment variables
3. Deploy:
   ```bash
   git push heroku main
   ```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Deploy to Railway
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

## 📊 Monitoring

### Logs
The server logs all requests and errors. Check logs for:
- Registration submissions
- Vendor applications
- Email sending status
- Error details

### Health Check
Monitor server health with:
```bash
curl http://localhost:5000/api/health
```

## 🔧 Customization

### Email Templates
Edit email templates in `services/emailService.js`:
- `createRegistrationEmailHTML()` - Registration confirmation
- `createVendorApplicationEmailHTML()` - Vendor application confirmation

### Validation Rules
Modify validation rules in `middleware/validation.js`:
- Field requirements
- Format validation
- Custom validation logic

### Rate Limiting
Adjust rate limits in `server.js`:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // requests per window
});
```

## 🐛 Troubleshooting

### Email Not Sending
1. Check email credentials in `.env`
2. Verify 2FA is enabled (for Gmail)
3. Check app password is correct
4. Test with different email service

### CORS Errors
1. Verify `FRONTEND_URL` in `.env`
2. Check frontend is running on correct port
3. Ensure CORS configuration matches frontend URL

### Validation Errors
1. Check request body format
2. Verify all required fields are present
3. Ensure data types are correct

## 📞 Support

For technical support:
- Email: tech@gtextland.com
- Phone: +234 801 234 5678

## 📄 License

This project is proprietary to Gtext Land & Homes.

---

**Built with ❤️ for Gtext Land & Homes 10th Anniversary Celebration** 