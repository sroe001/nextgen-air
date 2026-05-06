# GitHub Repository Upload Guide

This guide provides step-by-step instructions to complete the GitHub upload for your NextGen AIR Academy repository.

## Quick Upload Commands

If you already have a GitHub repository created, run these commands from the `nextgen-air` directory:

```bash
# Replace [your-repository-url] with your actual GitHub repository URL
git remote add origin [(https://github.com/sroe001/nextgen-air.git)]
git branch -M main
git push -u origin main
```

## Complete Setup Process

### Step 1: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `nextgen-air` (or your preferred name)
3. Description: "NextGen AIR Academy - AI training platform for empowering overlooked talent"
4. **Important**: Do NOT initialize with README, .gitignore, or license
5. Choose public or private as needed
6. Click "Create repository"

### Step 2: Copy Repository URL

After creating the repository, copy the remote URL:
- **HTTPS format**: `https://github.com/yourusername/nextgen-air-website.git`
- **SSH format**: `git@github.com:yourusername/nextgen-air-website.git`

### Step 3: Complete Upload

Run these commands in your terminal from the `nextgen-air` directory:

```bash
# Add remote origin (replace with your actual URL)
git remote add origin https://github.com/yourusername/nextgen-air-website.git

# Rename branch to main and push
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload

Visit your GitHub repository URL to confirm all files are uploaded successfully.

## Repository Status

Your local repository contains:
- ✅ 2 commits with comprehensive documentation
- ✅ Enhanced README.md with project details
- ✅ Complete .gitignore file
- ✅ All source code and assets
- ✅ Professional project structure

## Next Steps After Upload

1. **Configure Repository Settings**:
   - Add topics: `nextjs`, `react`, `typescript`, `tailwindcss`, `ai-education`
   - Set repository description
   - Configure branch protection rules

2. **Optional: Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Automatic deployment on every push to main branch
   - Custom domain configuration if needed

## Troubleshooting

**If you get "remote origin already exists" error:**
```bash
git remote remove origin
git remote add origin [https://github.com/sroe001/nextgen-air.git]
```

**If you get authentication errors:**
- Use HTTPS format for easier authentication
- Or set up SSH keys for GitHub

**If push fails:**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Support

For additional help with GitHub setup, visit:
- [GitHub Documentation](https://docs.github.com/)
- [GitHub CLI](https://cli.github.com/) for command-line management