const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
    }

    const { system, user, messages } = req.body;
    
    // Support both formats: { system, user } or { system, messages }
    const messageContent = user || (messages && messages[0] && messages[0].content);
    
    if (!messageContent) {
      return res.status(400).json({ error: 'Missing user or messages in request body' });
    }

    console.log('Making request to Anthropic API...');
    
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
        system: system || '',
        messages: [{ role: 'user', content: messageContent }],
        tools: [{ type: 'web_search_20250305', name: 'web_search' }]
      })
    });

    const data = await response.json();
    console.log('Anthropic response status:', response.status);
    console.log('Anthropic response body:', JSON.stringify(data).slice(0, 500));

    if (!response.ok) {
      const errorMsg = data.error?.message || JSON.stringify(data);
      console.error('Anthropic API error:', errorMsg);
      return res.status(response.status).json({ error: errorMsg });
    }

    const text = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n');

    res.json({ text });

  } catch (err) {
    console.error('Claude proxy error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
