# GitHub Pages Deployment Instructions

Follow these steps to deploy your portfolio website to GitHub Pages:

## 📋 Prerequisites

- GitHub account
- Git installed on your local machine

## 🚀 Deployment Steps

### 1. Create a New Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio-website` (or any name you prefer)
3. Make it **public** (required for free GitHub Pages)
4. **Do not** initialize with README, .gitignore, or license

### 2. Upload Your Files

**Option A: Using Git Command Line**

```bash
# Navigate to your github-pages-ready folder
cd path/to/github-pages-ready

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Tech Entrepreneur Portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/portfolio-website.git

# Push to GitHub
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. Drag and drop all files from `github-pages-ready` folder to your repository
2. Commit with message: "Initial commit: Tech Entrepreneur Portfolio"

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Access Your Website

- Your website will be available at: `https://yourusername.github.io/repository-name`
- It may take a few minutes for the site to be live
- GitHub will show you the URL in the Pages settings

## 🔧 Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the root directory
2. Add your domain name (e.g., `yourname.com`) to the file
3. Configure your domain's DNS to point to GitHub Pages
4. Update the repository settings to use your custom domain

## 📝 Updating Your Website

To update your website:

1. Make changes to your source files
2. Rebuild the project (`yarn build`)
3. Copy new build files to your repository
4. Commit and push changes
5. GitHub Pages will automatically update

## 🌟 Tips

- GitHub Pages may take 5-10 minutes to reflect changes
- Use browser hard refresh (Ctrl+F5) to see updates
- Check the Actions tab for deployment status
- Ensure all links use relative paths for proper GitHub Pages compatibility

## 🐛 Troubleshooting

**Site not loading?**
- Check that the repository is public
- Verify GitHub Pages is enabled in repository settings
- Ensure index.html is in the root directory

**Images/Assets not loading?**
- All asset paths are relative and should work automatically
- Check the browser console for any 404 errors

**Need help?**
- Check GitHub Pages documentation
- Review the Actions tab for deployment logs
- Ensure all files are properly committed to the main branch