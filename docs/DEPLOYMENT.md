# GitHub Pages Deployment Guide

This repository is configured for **root-level hosting**, making deployment simple and straightforward.

## 🎯 Quick Deployment (2 Minutes)

### 1. Fork or Clone Repository
```bash
# Option A: Fork on GitHub (recommended)
# Click "Fork" button on the repository page

# Option B: Clone locally
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**:
   - Select: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### 3. Access Your Live Website
- **URL**: `https://yourusername.github.io/repository-name`
- **Wait**: 2-5 minutes for initial deployment
- **Updates**: Automatic on every push to main branch

## 🔄 Making Updates

### Content Changes
1. Modify files in `src/frontend/src/`
2. Rebuild: `cd src/frontend && yarn build`
3. Copy build: `cp -r build/* ../../`
4. Commit and push changes

### Quick File Updates
1. Edit files directly on GitHub web interface
2. Commit changes to main branch
3. GitHub Pages updates automatically

## 🌍 Custom Domain (Optional)

### Setup Custom Domain
1. Create `CNAME` file in root directory:
   ```
   yourname.com
   ```
2. Configure DNS with your domain provider:
   ```
   Type: CNAME
   Name: www (or @)
   Value: yourusername.github.io
   ```
3. Update repository settings to use custom domain

## 📊 Repository Structure

```
/ (ROOT - GitHub Pages serves from here)
├── index.html              # Main website
├── static/                 # All assets (CSS, JS)
├── README.md               # This documentation
├── src/                    # Source code for development
│   └── frontend/           # React application
├── development-files/      # Backend, tests, etc.
└── docs/                   # Additional documentation
```

## 🐛 Troubleshooting

**Site not loading?**
- Verify repository is **public**
- Check GitHub Pages is enabled in Settings
- Ensure `index.html` exists in root directory
- Wait 5-10 minutes for propagation

**Assets not loading?**
- All paths are relative (`./static/...`)
- Check browser console for 404 errors
- Verify static folder exists in root

**Changes not appearing?**
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
- Check repository Actions tab for deployment status
- Allow 2-5 minutes for GitHub Pages to update

## 📈 Analytics & Performance

**Built-in Features:**
- Optimized production build
- Minified CSS and JavaScript
- Responsive images and assets
- Fast loading times

**Optional Enhancements:**
- Add Google Analytics tracking
- Implement service worker for caching
- Add sitemap.xml for SEO

## 🔒 Security Notes

- All assets are static (no server-side code)
- Contact form uses mock submission (no data stored)
- Safe for public repositories
- No sensitive information exposed

---

**Need Help?** Check GitHub Pages documentation or create an issue in this repository.