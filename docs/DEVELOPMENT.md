# Development Guide

This guide covers how to modify and develop the portfolio website.

## 🏗️ Project Structure

```
/
├── index.html              # Production website (GitHub Pages serves this)
├── static/                 # Production assets (built files)
├── src/                    # Development source code
│   └── frontend/           # React application
│       ├── src/
│       │   ├── components/ # React components
│       │   ├── data/       # Mock data
│       │   ├── hooks/      # Custom React hooks
│       │   └── App.js      # Main application
│       ├── public/         # Public assets
│       └── package.json    # Dependencies
├── development-files/      # Backend, tests, contracts
└── docs/                   # Documentation
```

## 🚀 Local Development

### Prerequisites
- Node.js 16+ 
- Yarn package manager

### Setup Development Environment
```bash
# Navigate to source code
cd src/frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

The development server runs at `http://localhost:3000` with hot reload enabled.

### Building for Production
```bash
# Build optimized production files
cd src/frontend
yarn build

# Copy to root for GitHub Pages
cp -r build/* ../../

# Commit and push
git add .
git commit -m "Update website"
git push origin main
```

## 🎨 Customization Guide

### 1. Content Updates

**Personal Information:**
- Edit `src/frontend/src/data/mockData.js`
- Update contact details, experience, skills, about text

**Professional Image:**
- Replace image URL in `HeroSection.js`
- Current: `https://customer-assets.emergentagent.com/...`

### 2. Design Customization

**Colors:**
- Edit CSS variables in `src/frontend/src/App.css`
- Main brand color: `--brand-primary: #00FFD1`

**Typography:**
- Font family: JetBrains Mono (can be changed in App.css)
- Font sizes: Defined in CSS classes (display-huge, heading-1, etc.)

**Layout:**
- Component files in `src/frontend/src/components/`
- Each section is a separate component

### 3. Adding New Sections

```javascript
// 1. Create new component
// src/frontend/src/components/NewSection.js

import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const NewSection = ({ data }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section id="new-section" style={{...}}>
      {/* Your content */}
    </section>
  );
};

export default NewSection;

// 2. Add to main Portfolio component
// src/frontend/src/components/Portfolio.js

import NewSection from './NewSection';

// Add in return statement:
<NewSection data={mockData.newSection} />

// 3. Add data to mockData.js
// src/frontend/src/data/mockData.js

export const mockData = {
  // ... existing data
  newSection: {
    title: "New Section",
    content: "Your content here"
  }
};
```

### 4. Mobile Responsiveness

All components use the `useWindowSize` hook for responsive design:

```javascript
const { width } = useWindowSize();
const isMobile = width < 768;

// Use in styling:
style={{
  padding: isMobile ? '20px' : '60px',
  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
}}
```

## 🔧 Component Architecture

### Key Components
- **Portfolio.js**: Main container with scroll effects
- **Header.js**: Navigation with mobile menu
- **HeroSection.js**: Landing section with 3D animation
- **AboutSection.js**: Personal story and philosophy
- **SkillsSection.js**: Technical expertise cards
- **ExperienceSection.js**: Interactive timeline
- **ContactSection.js**: Contact form and information

### Hooks
- **useWindowSize.js**: Responsive design helper
- Built-in React hooks for state management

### Data Management
- **mockData.js**: All content in one file
- Easy to modify without touching components
- Structured for potential backend integration

## 🎭 Animations & Effects

### Current Animations
- Fade-in on scroll (Intersection Observer)
- Parallax effects on hero section
- Hover effects on interactive elements
- Mobile menu slide animations

### Adding New Animations
```javascript
// CSS animations in App.css
@keyframes yourAnimation {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

// Apply in components
style={{
  animation: 'yourAnimation 0.6s ease-out'
}}
```

## 🧪 Testing Changes

### Local Testing
1. Run `yarn start` in `src/frontend`
2. Test on different screen sizes
3. Check mobile menu functionality
4. Verify all sections scroll properly

### Production Testing
1. Build with `yarn build`
2. Serve locally: `npx serve -s build`
3. Test final version before deployment

## 📱 Mobile-First Approach

The website is built mobile-first with these breakpoints:
- Mobile: < 768px
- Desktop: ≥ 768px

All components adapt automatically using the `useWindowSize` hook.

## 🔍 Debugging Tips

**Common Issues:**
- **Build errors**: Check console for syntax errors
- **Styling issues**: Verify CSS variable names
- **Mobile layout**: Test with browser dev tools
- **3D animations**: May be disabled on mobile for performance

**Debug Tools:**
- React Developer Tools
- Browser Developer Tools
- Console logging for responsive values

---

**Happy coding!** 🚀 This architecture is designed for easy customization and maintenance.