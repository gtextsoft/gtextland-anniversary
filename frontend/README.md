# Gtext Land & Homes 10th Anniversary Landing Page

A modern, high-converting landing page for Gtext Land & Homes' 10th Anniversary celebration - "The World's Largest Real Estate Event" happening on October 4th, 2025.

## 🎯 Project Overview

This landing page is designed to:
- Drive registrations for the 10th anniversary event
- Showcase event details, speakers, and sponsors
- Provide vendor/partner application forms
- Create urgency with countdown timers
- Optimize for conversions and user engagement

## ✨ Features

### 🎨 Design & UX
- **Modern, responsive design** with Gtext brand colors (green, white, gold)
- **Mobile-first approach** with seamless desktop experience
- **Smooth animations** using Framer Motion
- **Interactive elements** with hover effects and micro-interactions
- **Sticky call-to-action** for maximum conversion

### 📱 Components
- **Hero Section** - Compelling headline with clear CTAs
- **Event Details** - Comprehensive event information and benefits
- **Countdown Timer** - Real-time countdown to October 4th, 2025
- **Registration Form** - User-friendly form with validation
- **Speakers Section** - Industry leaders and experts
- **Sponsors Showcase** - Highlighting key sponsors
- **Transportation Info** - 100 free BRT buses details
- **Vendor Application** - Partnership opportunities
- **Testimonials** - Social proof from past events
- **FAQ Section** - Common questions and answers
- **Footer** - Contact info and important links

### 🛠 Technical Features
- **React 19** with modern hooks and functional components
- **Form validation** using React Hook Form
- **Responsive grid layouts** with CSS Grid
- **SEO optimized** with meta tags and schema markup
- **Performance optimized** with lazy loading and efficient animations
- **Accessibility compliant** with proper ARIA labels and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gtextannv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.js         # Hero section with main CTA
│   ├── EventDetails.js # Event information and benefits
│   ├── CountdownTimer.js # Real-time countdown
│   ├── RegistrationForm.js # User registration form
│   ├── Speakers.js     # Speaker profiles
│   ├── Sponsors.js     # Sponsor showcase
│   ├── Transportation.js # BRT bus information
│   ├── VendorForm.js   # Vendor application form
│   ├── Testimonials.js # Customer testimonials
│   ├── FAQ.js          # Frequently asked questions
│   ├── Footer.js       # Site footer
│   └── StickyCTA.js    # Sticky call-to-action
├── App.js              # Main application component
├── App.css             # Global styles and CSS variables
└── index.js            # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2E7D32` - Main brand color
- **Secondary Green**: `#4CAF50` - Accent color
- **Gold**: `#FFD700` - Highlight color
- **White**: `#FFFFFF` - Background color
- **Dark Gray**: `#333333` - Text color

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive sizing** with rem units

### Components
- **Cards**: Consistent styling with shadows and hover effects
- **Buttons**: Multiple variants (primary, secondary, gold)
- **Forms**: Clean, accessible form elements
- **Grid System**: Responsive CSS Grid layouts

## 📊 Key Performance Indicators (KPIs)

The landing page is optimized for:
- **Page load speed**: < 2.5 seconds
- **Conversion rate**: ≥ 30%
- **Total signups**: ≥ 5,000
- **Email open rate**: ≥ 50%
- **Time on page**: ≥ 1.5 minutes
- **Bounce rate**: < 40%

## 🔧 Customization

### Updating Event Details
Edit the following files to update event information:
- `src/components/EventDetails.js` - Event date, time, venue
- `src/components/CountdownTimer.js` - Countdown target date
- `public/index.html` - Meta tags and SEO information

### Adding Speakers
Update the `speakers` array in `src/components/Speakers.js`:
```javascript
const speakers = [
  {
    name: "Speaker Name",
    title: "Speaker Title",
    company: "Company Name",
    expertise: "Area of Expertise",
    image: "👨‍💼", // Emoji or image URL
    bio: "Speaker bio..."
  }
];
```

### Modifying Sponsors
Update the `sponsors` array in `src/components/Sponsors.js`:
```javascript
const sponsors = [
  {
    name: "Sponsor Name",
    logo: "🏛️", // Emoji or logo URL
    tier: "Platinum", // Platinum, Gold, Silver
    description: "Sponsor description..."
  }
];
```

## 📧 Email Integration

The registration form is set up to work with email services. To integrate:

1. **EmailJS** (recommended for simple setups)
2. **SendGrid** (for production use)
3. **Mailchimp** (for marketing automation)

Update the email configuration in `src/components/RegistrationForm.js`.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 📱 Mobile Optimization

The landing page is fully optimized for mobile devices with:
- **Responsive design** that adapts to all screen sizes
- **Touch-friendly** buttons and form elements
- **Fast loading** on mobile networks
- **Optimized images** and assets

## 🔍 SEO Features

- **Meta tags** for social media sharing
- **Schema markup** for event information
- **Semantic HTML** structure
- **Optimized page titles** and descriptions
- **Open Graph** tags for Facebook/LinkedIn
- **Twitter Card** optimization

## 🛡️ Security

- **Form validation** to prevent spam
- **HTTPS ready** for secure connections
- **XSS protection** with React's built-in security
- **Input sanitization** for user data

## 📈 Analytics Integration

To add analytics, update the following:

### Google Analytics
Add your GA tracking ID to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Facebook Pixel
Add your Pixel ID for conversion tracking.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Gtext Land & Homes.

## 📞 Support

For technical support or questions:
- Email: tech@gtextland.com
- Phone: +234 801 234 5678

---

**Built with ❤️ for Gtext Land & Homes 10th Anniversary Celebration**
