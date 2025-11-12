# Pradatta Adhikary - Digital Resume

A modern, responsive digital resume built with React + Vite, featuring dynamic content management, mobile-first design, and professional typography.

## 🚀 Features

### 📱 Responsive Design
- **Mobile-first approach** with full-screen mobile layout
- **Tablet and desktop optimized** with floating navigation
- **Smart burger menu** for mobile with smooth scrolling behavior
- **Touch-friendly** interface with proper spacing

### 🎨 Modern UI/UX
- **Professional typography** using Google Fonts (Inter, Montserrat, Oswald, Roboto, Raleway)
- **Company logos** with dynamic sizing (100px on mobile, 80px on desktop)
- **Gradient backgrounds** and smooth transitions
- **Card-based layout** for experience sections
- **Smoked glass navigation** on desktop

### 📊 Dynamic Content Management
- **JSON-driven experience data** with structured information
- **Automatic period calculation** using custom date utilities
- **Dynamic work experience** with start/end dates and current position tracking
- **Modular component architecture** for easy maintenance

### 🛠 Technical Features
- **React 18** with modern hooks and functional components
- **Vite** for fast development and optimized builds
- **CSS Grid & Flexbox** for responsive layouts
- **Font Awesome icons** for visual elements
- **Print-friendly** styling for PDF generation

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Profile header with contact info
│   ├── Summary.jsx     # Professional summary
│   ├── Skills.jsx      # Technical skills and technologies
│   ├── Experience.jsx  # Work experience with dynamic periods
│   ├── Education.jsx   # Educational background
│   ├── Languages.jsx   # Language skills
│   ├── Interests.jsx   # Personal interests with icons
│   ├── Navigation.jsx  # Desktop floating navigation
│   ├── MobileNav.jsx   # Mobile burger menu
│   └── Footer.jsx      # Footer with attribution
├── data/               # JSON data files
│   └── experiences.json # Work experience data
├── utils/              # Utility functions
│   ├── dateUtils.jsx   # Date calculation utilities
│   └── textUtils.jsx   # Text formatting utilities
├── App.css            # Main stylesheet
├── Resume.jsx         # Main resume component
└── main.jsx          # Application entry point
```

## 🎯 Key Components

### Experience Management
- **Dynamic period calculation** from start/end dates
- **Current position tracking** with `isCurrent` boolean
- **Company logos** with error handling and responsive sizing
- **Achievement highlighting** with markdown-style bold text

### Navigation System
- **Desktop**: Floating navigation with smoked glass effect
- **Mobile**: Burger menu with full-screen overlay
- **Smart positioning**: Navigation follows scroll with boundaries

### Typography Hierarchy
- **Name**: Momo Trust Display (distinctive header font)
- **Section titles**: Oswald (bold, impactful headings)
- **Company names**: Raleway (clean, professional)
- **Body text**: Inter (readable, modern)
- **Periods**: Montserrat (distinctive blue text)
- **Tech skills**: Roboto (bold, uppercase badges)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages with two methods:

#### Method 1: Automatic Deployment (Recommended)

1. **Push to main branch** - The GitHub Actions workflow will automatically build and deploy
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/ (root)`
3. **Access your resume** at `https://yourusername.github.io`

#### Method 2: Manual Deployment

1. **Install gh-pages** (if not already installed)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy manually**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** in repository settings (same as above)

### Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file** in the `public/` directory with your domain
2. **Configure DNS** to point to `yourusername.github.io`
3. **Update homepage** in `package.json` to your custom domain

### Environment Setup

Make sure your repository has:
- ✅ **Public repository** (or GitHub Pro for private)
- ✅ **GitHub Actions enabled**
- ✅ **Pages enabled** in repository settings

## 📝 Customization

### Adding Work Experience
Edit `src/data/experiences.json`:

```json
{
  "id": "company-name",
  "startMonth": 1,
  "startYear": 2023,
  "endMonth": null,
  "endYear": null,
  "isCurrent": true,
  "company": "Company Name",
  "logo": "/logos/company-logo.png",
  "location": "City, Country",
  "position": "Job Title",
  "achievements": [
    "Achievement 1 with **bold text**",
    "Achievement 2"
  ]
}
```

### Adding Company Logos
1. Add logo files to `public/logos/`
2. Update the `logo` field in experiences.json
3. Recommended size: 200x200px PNG with transparent background

### Customizing Colors
Main color variables in `App.css`:
- Primary blue: `#3498db`
- Dark blue: `#2c3e50`
- Success green: `#27ae60`
- Background grey: `#f5f5f5`

## 📱 Mobile Optimization

- **Full-screen layout** on mobile devices
- **Centered company logos** (100px) with company names below
- **Optimized typography** with smaller font sizes
- **Touch-friendly navigation** with burger menu
- **Edge-to-edge design** for maximum screen utilization

## 🖨 Print Support

- **Print-friendly CSS** with optimized layouts
- **Black and white compatibility**
- **Proper page breaks** and margins
- **Hidden navigation** elements in print mode

## 🛠 Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with Grid, Flexbox, and modern features
- **Google Fonts** - Professional typography
- **Font Awesome** - Icons and visual elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pradatta Adhikary**
- Senior Software Engineer
- Email: contact@pradatta.dev
- LinkedIn: [linkedin.com/in/pradattaadhikary](https://linkedin.com/in/pradattaadhikary)
- Location: London, United Kingdom

---

© 2024 Designed by Pradatta Adhikary
