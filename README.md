# Gtext Land & Homes 10th Anniversary - Full Stack Application

A complete full-stack application for Gtext Land & Homes' 10th Anniversary celebration - "The World's Largest Real Estate Event" happening on October 4th, 2025.

## 🏗️ Project Structure

```
gtextannv/
├── frontend/           # React frontend application
│   ├── src/           # React source code
│   ├── public/        # Static files
│   └── package.json   # Frontend dependencies
├── backend/           # Node.js backend server
│   ├── routes/        # API routes
│   ├── middleware/    # Express middleware
│   ├── services/      # Email service
│   └── package.json   # Backend dependencies
└── package.json       # Root package.json (manages both)
```

## 🚀 Quick Start

### 1. Install All Dependencies
```bash
npm run install-all
```

### 2. Set Up Environment Variables
```bash
# Copy backend environment template
cp backend/env.example backend/.env

# Edit backend/.env with your email credentials
```

### 3. Start Both Frontend and Backend
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 📁 Frontend (React)

### Features
- **Modern UI/UX** with Gtext brand colors
- **Responsive design** for all devices
- **Interactive components** with Framer Motion
- **Form validation** with React Hook Form
- **Real-time countdown** to October 4th, 2025
- **SEO optimized** with meta tags and schema markup

### Components
- **Hero Section** - Compelling headline and CTAs
- **Event Details** - Comprehensive event information
- **Countdown Timer** - Real-time countdown
- **Registration Form** - User registration with validation
- **Speakers Section** - Industry leaders showcase
- **Sponsors Section** - Sponsor showcase
- **Transportation Info** - BRT bus details
- **Vendor Form** - Partnership applications
- **Testimonials** - Social proof
- **FAQ Section** - Common questions
- **Footer** - Contact information

### Running Frontend Only
```bash
npm run frontend
# or
cd frontend && npm start
```

## 🔧 Backend (Node.js + Express)

### Features
- **Email Service** using Nodemailer
- **Form Validation** with comprehensive rules
- **Security** with rate limiting and CORS
- **Error Handling** with detailed logging
- **Beautiful Email Templates** with HTML

### API Endpoints
- `POST /api/email/register` - Event registration
- `POST /api/email/vendor-application` - Vendor applications
- `GET /api/health` - Server health check
- `POST /api/email/test-email` - Test emails (development)

### Running Backend Only
```bash
npm run backend
# or
cd backend && npm run dev
```

## 📧 Email Configuration

### Gmail Setup (Recommended)
1. Enable 2-factor authentication
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate for "Mail"
3. Update `backend/.env`:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Other Email Services
```env
# Outlook/Hotmail
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password

# Custom SMTP
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## 🧪 Testing

### Test Registration
```bash
curl -X POST http://localhost:5000/api/email/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+234 801 234 5678",
    "city": "Lagos",
    "isRealtor": "yes"
  }'
```

### Test Vendor Application
```bash
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

### Frontend Deployment
```bash
npm run build
```
Deploy the `frontend/build` folder to:
- **Vercel**: `vercel`
- **Netlify**: Connect repository
- **AWS S3**: Upload build files

### Backend Deployment
Deploy the `backend` folder to:
- **Heroku**: `git push heroku main`
- **Railway**: Connect repository
- **DigitalOcean**: Deploy Node.js app

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

## 🔒 Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Protection**: Configured for frontend domain
- **Input Validation**: Comprehensive form validation
- **Input Sanitization**: Clean and sanitize all inputs
- **Helmet**: Security headers
- **Error Handling**: No sensitive information in error responses

## 📊 Monitoring

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Logs
- Frontend: Check browser console
- Backend: Check terminal output for requests and errors

## 🔧 Customization

### Email Templates
Edit templates in `backend/services/emailService.js`:
- `createRegistrationEmailHTML()` - Registration confirmation
- `createVendorApplicationEmailHTML()` - Vendor application confirmation

### Styling
Edit styles in `frontend/src/App.css`:
- Color variables in `:root`
- Component-specific styles
- Responsive breakpoints

### Content
Update content in respective component files:
- Event details in `frontend/src/components/EventDetails.js`
- Speakers in `frontend/src/components/Speakers.js`
- Sponsors in `frontend/src/components/Sponsors.js`

## 🐛 Troubleshooting

### Email Not Sending
1. Check email credentials in `backend/.env`
2. Verify 2FA is enabled (for Gmail)
3. Check app password is correct
4. Test with different email service

### CORS Errors
1. Verify `FRONTEND_URL` in `backend/.env`
2. Check frontend is running on correct port
3. Ensure CORS configuration matches frontend URL

### Form Validation Errors
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

### 🎯 Key Features Summary
- ✅ **Frontend**: Modern React app with beautiful UI
- ✅ **Backend**: Node.js server with email functionality
- ✅ **Forms**: Registration and vendor applications
- ✅ **Emails**: Beautiful confirmation emails
- ✅ **Security**: Rate limiting, validation, CORS
- ✅ **Responsive**: Works on all devices
- ✅ **SEO**: Optimized for search engines
- ✅ **Ready to Deploy**: Production-ready code 