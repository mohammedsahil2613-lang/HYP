export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { code, paymentApproved } = req.body;

  const aiContents = [
    "🔥 5 Car Reel Hooks That Go Viral Instantly",
    "💡 Secret Caption Formula That Doubles Engagement",
    "🚀 Post This Reel Format to Gain 1K Followers Fast",
    "📈 Viral Reel Idea That Gains 500+ Views in One Hour",
    "🎯 Quick Hook Captions That Boost Engagement"
  ];

  // Free test code
  if (code === 'Sahil599') {
    const random = aiContents[Math.floor(Math.random() * aiContents.length)];
    return res.status(200).json({ content: random });
  }

  // Normal users → must pay
  if (!paymentApproved) {
    return res.status(403).json({ error: 'Payment required to generate content' });
  }

  // Paid → generate content
  const random = aiContents[Math.floor(Math.random() * aiContents.length)];
  return res.status(200).json({ content: random });
}
