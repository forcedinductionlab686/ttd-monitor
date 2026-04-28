# TTD Trade Thesis Monitor - Quick Start

## ✅ Already Complete
- ✅ App is built and ready
- ✅ Server running locally at http://localhost:3000
- ✅ All dependencies installed
- ✅ Environment variables configured locally

## 🚀 Deploy to Vercel (Easiest Method)

### Option A: Using Terminal (3 commands)
Open a new terminal and run:

```bash
# 1. Login to Vercel (browser opens)
vercel login

# 2. Deploy
vercel --prod

# 3. When prompted:
#    - Set up and deploy? YES
#    - Which scope? Choose your account
#    - Link to existing project? NO
#    - Project name? ttd-monitor (or any name)
#    - Directory? ./ (just press Enter)
#    - Override settings? NO

# After deployment, you'll get a URL like: https://ttd-monitor.vercel.app
```

### Option B: Using Vercel Dashboard (No CLI needed)
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import this folder or connect your GitHub
4. Vercel auto-detects Node.js
5. **Add Environment Variable:**
   - Name: `ANTHROPIC_API_KEY`
   - Value: `your_anthropic_api_key_here`
6. Click "Deploy"
7. Get your live URL!

## 🚀 Deploy to Railway (Alternative)

### Using Railway Dashboard (Recommended)
1. Go to https://railway.app
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
   - OR "Empty Project" → "Deploy from local"
4. **Add Environment Variable:**
   - Key: `ANTHROPIC_API_KEY`
   - Value: `your_anthropic_api_key_here`
5. Railway auto-detects and deploys
6. Click "Generate Domain" for public URL

## 📱 Test Locally First
```bash
npm start
# Visit: http://localhost:3000
# Click "Run Analysis" button to test
```

## 🐛 Troubleshooting

### Railway login not working?
- Use Railway Dashboard method instead (easier!)
- Or try: `railway login --browserless` then copy the token

### Vercel deployment issues?
1. Make sure you're in the project directory
2. Check Node.js version: `node --version` (should be 14+)
3. Re-run: `vercel --prod`

### API not working after deployment?
1. Check environment variable is set correctly
2. Redeploy after adding the variable
3. Check deployment logs for errors

## 📂 Project Files
- `server.js` - Express API server
- `public/index.html` - Frontend dashboard
- `.env` - Local API key (don't commit)
- `vercel.json` - Vercel config
- `package.json` - Dependencies

## 🎯 Features
- **5 parallel AI queries** analyzing TTD stock metrics
- **Web search enabled** via Claude Sonnet 4
- **Dark terminal UI** with real-time updates
- **Thesis scoring** (X/10) with detailed breakdowns
- **Export & share** analysis reports

## 🔑 Environment Variables Needed
Only one variable is required:
- `ANTHROPIC_API_KEY` - Your Anthropic API key

Your key: `[Set this in the deployment platform's environment variables]`

---

**Need help?** Check the deployment terminal window or review error logs in your hosting dashboard.
