# Lokanex - Professional IT Company Website

A stunning, modern, and professional dark-themed website for Lokanex, an innovative IT startup providing services and development solutions. Built with React.js and featuring smooth animations, responsive design, and a unique brand identity.

## 🚀 Features

- **Modern Dark UI**: Professional dark theme with carefully crafted color palette
- **Unique Logo**: Custom-designed SVG logo with geometric patterns and gradients
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Contact Form**: Functional contact form with validation and success states
- **Portfolio Showcase**: Filterable project gallery with detailed information
- **SEO Optimized**: Semantic HTML structure and meta tags

## 🎨 Design Highlights

- **Color Scheme**: Dark background with cyan/blue primary colors and orange accents
- **Typography**: Inter font family for modern, clean readability
- **Gradients**: Subtle gradients and glowing effects for visual appeal
- **Cards & Components**: Glass-morphism inspired design elements
- **Icons**: Consistent iconography using React Icons (Feather Icons)

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Styled Components**: CSS-in-JS for component styling
- **Framer Motion**: Advanced animations and transitions
- **React Icons**: Comprehensive icon library
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lokanex-website
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
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Hero.js            # Hero section with company introduction
│   ├── Services.js        # Services showcase with feature cards
│   ├── About.js           # About section with company values
│   ├── Portfolio.js       # Portfolio with filterable projects
│   ├── Contact.js         # Contact form and company information
│   ├── Footer.js          # Footer with links and social media
│   └── Logo.js            # Custom Lokanex logo component
├── theme.js               # Design system and theme configuration
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles and CSS reset
```

## 🎯 Sections Overview

### 1. Header
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Logo and call-to-action button

### 2. Hero Section
- Compelling company introduction
- Animated floating cards showcasing services
- Primary and secondary call-to-action buttons
- Background patterns and gradients

### 3. Services
- Six comprehensive service offerings
- Interactive service cards with hover effects
- Feature lists and technology highlights
- Call-to-action section

### 4. About
- Company values and mission statement
- Statistics and achievements
- Team values with icons
- Professional credibility indicators

### 5. Portfolio
- Filterable project gallery
- Project categories (Web, Mobile, Cloud, AI)
- Interactive project cards with overlays
- Technology stack displays

### 6. Contact
- Contact information cards
- Functional contact form with validation
- Success/error states
- Company contact details

### 7. Footer
- Comprehensive site links
- Social media integration
- Contact information
- Back-to-top functionality

## 🎨 Customization

### Colors
Edit the color palette in `src/theme.js`:
```javascript
colors: {
  primary: '#00d4ff',        // Main brand color
  primaryDark: '#0099cc',    // Darker variant
  background: '#0a0a0a',     // Main background
  // ... more colors
}
```

### Content
- Update company information in each component
- Modify service offerings in `Services.js`
- Add/remove portfolio projects in `Portfolio.js`
- Update contact information in `Contact.js` and `Footer.js`

### Logo
The logo is created as an SVG component in `src/components/Logo.js`. You can:
- Modify colors and gradients
- Adjust geometric patterns
- Change the "L" design
- Update the text styling

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support or questions, please contact:
- Email: admin@lokanex.com
- Website: www.lokanex.com

---

**Lokanex** - Empowering Digital Transformation
