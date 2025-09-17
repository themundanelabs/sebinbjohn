# Repository Structure

This repository is organized for **direct GitHub Pages hosting from root** with clear separation of production and development files.

## 📁 Directory Structure

```
/ (ROOT - GitHub Pages Hosting)
├── index.html              # 🌐 Main website entry point
├── static/                 # 📦 Production assets (14MB)
│   ├── css/               # 🎨 Stylesheets
│   └── js/                # ⚡ JavaScript bundles
├── README.md              # 📖 Main documentation
├── package.json           # 📋 Project metadata
├── asset-manifest.json    # 📊 Build manifest
├── yarn.lock             # 🔒 Dependency lock file
│
├── src/                   # 💻 Development Source Code
│   └── frontend/          # ⚛️ React Application
│       ├── src/
│       │   ├── components/    # React components
│       │   │   ├── Portfolio.js
│       │   │   ├── Header.js
│       │   │   ├── HeroSection.js
│       │   │   ├── AboutSection.js
│       │   │   ├── SkillsSection.js
│       │   │   ├── ExperienceSection.js
│       │   │   └── ContactSection.js
│       │   ├── data/         # Mock data
│       │   │   └── mockData.js
│       │   ├── hooks/        # Custom hooks
│       │   │   └── useWindowSize.js
│       │   ├── App.js        # Main app component
│       │   ├── App.css       # Global styles
│       │   └── index.js      # React entry point
│       ├── public/           # Public assets
│       ├── package.json      # React dependencies
│       └── build/           # Build output (copied to root)
│
├── development-files/     # 🔧 Development & Backend
│   ├── backend/          # FastAPI backend (optional)
│   ├── tests/           # Test files
│   ├── contracts.md     # API contracts
│   └── test_result.md   # Testing results
│
└── docs/                # 📚 Documentation
    ├── DEPLOYMENT.md    # Deployment guide
    ├── DEVELOPMENT.md   # Development guide
    ├── QUICK_START.md   # Quick setup guide
    └── REPOSITORY_STRUCTURE.md (this file)
```

## 🎯 Key Features of This Structure

### ✅ **GitHub Pages Ready**
- `index.html` and `static/` in root directory
- All paths are relative (`./static/...`)
- No build step required for hosting
- Direct deployment from main branch

### ✅ **Development Friendly**
- Source code preserved in `src/frontend/`
- Easy to modify and rebuild
- Clear separation of concerns
- Hot reload available during development

### ✅ **Clean Organization**
- Production files at root for hosting
- Development files clearly separated
- Documentation in dedicated folder
- Backend code preserved but isolated

## 🔄 Workflow

### For Content Updates:
1. Edit files in `src/frontend/src/`
2. Build: `cd src/frontend && yarn build`
3. Copy: `cp -r build/* ../../`
4. Commit and push

### For Quick Fixes:
1. Edit `index.html` or files in `static/` directly
2. Commit and push
3. GitHub Pages updates automatically

## 📊 File Sizes

- **Total Repository**: ~20MB
- **Static Assets**: ~14MB
- **Source Code**: ~6MB
- **Documentation**: <1MB

## 🚀 Deployment Options

### Option 1: GitHub Pages (Current Setup)
- Serves from root directory
- Automatic deployment on push
- Free hosting for public repositories

### Option 2: Custom Server
- Upload root files (`index.html`, `static/`) to any web server
- Works with Netlify, Vercel, Apache, Nginx, etc.
- No build step required

### Option 3: CDN
- Upload static files to CDN
- Fast global delivery
- Production-ready performance

## 🔒 Security & Performance

**Optimizations:**
- Minified JavaScript and CSS
- Gzipped assets (722KB main bundle)
- Responsive images
- Lazy loading for 3D elements

**Security:**
- Static files only (no server-side code)
- No sensitive data in repository
- Safe for public hosting

## 🧰 Development Tools

**Included:**
- React development server
- Hot reload
- Production build system
- Responsive design hooks
- Animation framework

**Available Commands:**
```bash
# Development
cd src/frontend
yarn start     # Development server
yarn build     # Production build
yarn test      # Run tests

# Deployment
cp -r src/frontend/build/* ./  # Copy to root
```

---

This structure provides the best of both worlds: **easy GitHub Pages deployment** with **maintainable development workflow**.