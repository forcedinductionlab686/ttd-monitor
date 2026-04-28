# GitHub Repository Setup

## Git Status
✅ Git repository initialized
✅ All files committed (initial commit: 6ab9e6e)

## Option 1: Create Repo via GitHub Website (Easiest)

1. Go to https://github.com/new
2. Repository name: `ttd-monitor`
3. Make it **Public**
4. **DO NOT** initialize with README (we already have files)
5. Click "Create repository"

6. After creation, GitHub will show you commands. Use these:
```bash
git remote add origin https://github.com/YOUR_USERNAME/ttd-monitor.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Option 2: Using Git Commands Only

If you already created the repo on GitHub:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ttd-monitor.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

When prompted, enter your GitHub credentials:
- Username: your GitHub username
- Password: use a **Personal Access Token** (not your password)

### Create Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "ttd-monitor"
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. Copy the token and use it as your password

## Option 3: GitHub CLI (If You Get It Working)

If you manage to install GitHub CLI manually:

1. Download from: https://cli.github.com/
2. Install the .msi file by double-clicking it
3. Run these commands:

```bash
# Login
gh auth login

# Create repo and push
gh repo create ttd-monitor --public --source=. --remote=origin --push
```

## After Pushing to GitHub

Once your code is on GitHub, you can easily deploy:

### Deploy to Vercel:
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repo: `ttd-monitor`
4. Add environment variable:
   - **ANTHROPIC_API_KEY** = `your_anthropic_api_key_here`
5. Click "Deploy"

### Deploy to Railway:
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `ttd-monitor`
4. Add environment variable:
   - **ANTHROPIC_API_KEY** = `your_anthropic_api_key_here`
5. Click "Generate Domain"

## Current Status

✅ Project files ready
✅ Git initialized and committed
⏳ Waiting to push to GitHub
⏳ Then deploy to hosting platform

## Quick Commands Reference

```bash
# Check current status
git status

# View remote
git remote -v

# Push to GitHub (after adding remote)
git push -u origin main

# View commit history
git log --oneline
```
