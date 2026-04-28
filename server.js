const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Test endpoint to verify API key is set
app.get('/api/test', (req, res) => {
  res.json({ 
    hasKey: !!ANTHROPIC_API_KEY,
    keyPreview: ANTHROPIC_API_KEY ? 
      ANTHROPIC_API_KEY.slice(0,10) + '...' : 'NOT SET'
  });
});

app.post('/api/claude', async (req, res) => {
  try {
    if (!ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
    }

    const { system, messages } = req.body;

    if (!system || !messages) {
      return res.status(400).json({ error: 'Missing system or messages in request body' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'web-search-2025-03-05'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: system,
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search'
          }
        ],
        messages: messages
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Anthropic API error:', error);
      return res.status(response.status).json({ error: 'Anthropic API error', details: error });
    }

    const data = await response.json();

    // Extract only text blocks from response
    const textContent = data.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('\n');

    res.json({
      text: textContent,
      usage: data.usage
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`TTD Trade Thesis Monitor server running on http://localhost:${PORT}`);
});
