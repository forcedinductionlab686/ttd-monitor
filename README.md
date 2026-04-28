# TTD Trade Thesis Monitor

A real-time financial analysis dashboard for The Trade Desk (TTD) stock, powered by Claude AI with web search capabilities.

## Features

- Real-time stock performance tracking
- Customer retention analysis
- Gross ad spend monitoring
- Digital ad market insights
- Live news feed with sentiment analysis
- AI-powered thesis scorecard
- Dark terminal-style interface

## Local Development

### Prerequisites
- Node.js 14+
- npm or yarn

### Setup

1. **Clone or download the repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. **Add your Anthropic API key:**
   ```
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

5. **Start the development server:**
   ```bash
   npm start
   ```

6. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Deployment

### Option 1: Railway (Recommended)

Railway is the easiest option for Express apps.

1. **Create a Railway account** at https://railway.app

2. **Connect your GitHub repository:**
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository
   - Authorize Railway to access your repo

3. **Set environment variables:**
   - In the Railway dashboard, go to your project
   - Click on the service
   - Go to "Variables" tab
   - Add `ANTHROPIC_API_KEY` with your Anthropic API key
   - Save

4. **Deploy:**
   - Railway auto-deploys on git push
   - Your app will be live at a Railway-provided URL
   - Find your URL in the project dashboard

**Important:** Make sure your `.env` file is in `.gitignore` (already configured) so it's never committed.

### Option 2: Render

Render also supports Express servers easily.

1. **Create a Render account** at https://render.com

2. **Connect your GitHub repository:**
   - Click "New +" → "Web Service"
   - Select your repository
   - Choose branch to deploy

3. **Configure the service:**
   - **Name:** ttd-monitor (or your preferred name)
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free tier is available

4. **Set environment variables:**
   - Scroll down to "Environment" section
   - Click "Add Environment Variable"
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key
   - Click "Save"

5. **Deploy:**
   - Click "Create Web Service"
   - Render will build and deploy automatically
   - Your app will be live at the provided URL

### Option 3: Vercel

Vercel requires the app to run on serverless functions. The current Express server can work with Vercel's Node.js runtime.

1. **Create a Vercel account** at https://vercel.com

2. **Connect your GitHub repository:**
   - Click "Import Project"
   - Select your repository

3. **Configure the project:**
   - Vercel should auto-detect the Node.js environment
   - Build settings will use `npm install` and `npm start`

4. **Set environment variables:**
   - In the project settings, go to "Environment Variables"
   - Add variable:
     - **Name:** `ANTHROPIC_API_KEY`
     - **Value:** Your Anthropic API key
   - Select all environments (Production, Preview, Development)
   - Click "Add"

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy
   - Your app will be live at vercel.app domain

**Note:** Vercel may have limitations on request body size. If you encounter issues, Railway or Render are more suitable for Express apps.

## Environment Variables

Only one environment variable is required:

- **`ANTHROPIC_API_KEY`** - Your Anthropic API key from https://console.anthropic.com

Never commit this key to version control. Always set it in your platform's dashboard.

## API Endpoints

### POST /api/claude
Proxies requests to Anthropic Claude API with web search enabled.

**Request body:**
```json
{
  "system": "System prompt for Claude",
  "messages": [
    {
      "role": "user",
      "content": "User message"
    }
  ]
}
```

**Response:**
```json
{
  "text": "Claude's response text",
  "usage": {
    "input_tokens": 123,
    "output_tokens": 456
  }
}
```

## Troubleshooting

### "ANTHROPIC_API_KEY not configured"
- Ensure you've set the environment variable in your platform's dashboard
- The variable name must be exactly `ANTHROPIC_API_KEY`
- After setting it, redeploy your app

### "Anthropic API error"
- Verify your API key is correct
- Check that you have API credits at https://console.anthropic.com
- Ensure your IP isn't rate-limited by Anthropic

### App not starting
- Check the deployment logs in your platform's dashboard
- Verify `npm install` completed successfully
- Ensure start command is `node server.js`

## Project Structure

```
ttd-monitor/
├── server.js           # Express backend
├── package.json        # Dependencies
├── .env.example        # Environment variable template
├── .gitignore          # Git ignore rules
├── Procfile            # Railway/Render configuration
├── vercel.json         # Vercel configuration
├── public/
│   └── index.html      # Frontend dashboard
└── README.md           # This file
```

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** HTML + CSS + JavaScript (vanilla)
- **AI:** Anthropic Claude API with web search
- **Deployment:** Railway / Render / Vercel

## License

ISC
