# TTD Trade Thesis Monitor - Deployment Instructions

## Prerequisites
✅ Node.js installed
✅ Dependencies installed (npm install)
✅ .env file created with ANTHROPIC_API_KEY
✅ Railway CLI installed globally

## Deploy to Railway

### Step 1: Login to Railway
```bash
railway login
```
This will open a browser window. Log in with your GitHub account.

### Step 2: Initialize Railway Project
```bash
railway init
```
- Choose "Create new project"
- Give it a name like "ttd-monitor"

### Step 3: Add Environment Variable
```bash
railway variables --set ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

### Step 4: Deploy
```bash
railway up
```

### Step 5: Generate Domain (Make it Public)
```bash
railway domain
```
This will give you a public URL like: `https://ttd-monitor-production.up.railway.app`

### Alternative: Deploy via Railway Dashboard
1. Go to https://railway.app
2. Click "New Project"
3. Choose "Deploy from GitHub repo" or "Empty Project"
4. If empty project: Connect your GitHub repo or use CLI
5. Add environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: `your_anthropic_api_key_here`
6. Railway will auto-detect Node.js and deploy
7. Click "Generate Domain" to get public URL

## Testing Locally
Server is running on: http://localhost:3000

## Project Structure
```
ttd-monitor/
├── server.js          # Express server with /api/claude proxy
├── public/
│   └── index.html     # Frontend dashboard
├── package.json       # Dependencies
├── .env               # Local API key (not committed)
├── .env.example       # Template for .env
└── .gitignore         # Excludes .env from git
```

## Key Features
- **5 parallel AI analysis calls** for different TTD metrics
- **Dark terminal-style UI** with green matrix theme
- **Real-time data cards**: Stock, Retention, Ad Spend, Market, News
- **Thesis Scorecard** with pillar-based scoring (X/10)
- **AI Summary** with quick-action buttons
- **Web search integration** via Claude Sonnet 4 with Anthropic's web search tool

## Environment Variables
- `ANTHROPIC_API_KEY` - Your Anthropic API key (required)
- `PORT` - Port number (default: 3000, Railway sets this automatically)

## Support
If deployment fails, check:
1. API key is set correctly in Railway
2. All dependencies are in package.json
3. Start script is "node server.js"
