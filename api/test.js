module.exports = async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  res.json({ 
    hasKey: !!apiKey,
    keyPreview: apiKey ? apiKey.slice(0,10) + '...' : 'NOT SET'
  });
};
