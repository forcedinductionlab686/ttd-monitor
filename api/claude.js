const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { system, messages } = req.body;

  if (!system || !messages) {
    return res.status(400).json({ error: 'Missing system or messages in request body' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'web-search-2025-03-05'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: system,
        messages: messages,
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search'
          }
        ]
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
};
