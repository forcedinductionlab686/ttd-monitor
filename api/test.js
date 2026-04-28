module.exports = async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  res.json({ 
    status: 'ok',
    hasApiKey: !!apiKey,
    keyPreview: apiKey ? apiKey.slice(0, 14) + '...' : 'NOT SET'
  });
};
