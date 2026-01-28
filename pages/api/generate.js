export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prompt, numImages = 4 } = req.body

  const referenceGeneratedImages = [
    { url: '/generated/jellyfish-kawaii.jpg', alt: 'Jellyfish illustration' },
    { url: '/generated/green-flower.jpg', alt: 'White flower in green liquid' },
    { url: '/generated/seashells.jpg', alt: 'Seashell jewelry' },
    { url: '/generated/kiwi-heart.jpg', alt: 'Kiwi heart close-up' },
  ]

  const requested = Number.isFinite(Number(numImages)) ? Math.max(1, Number(numImages)) : 4

  await new Promise((resolve) => setTimeout(resolve, 1500))

  const images = []

  for (let i = 0; i < requested; i++) {
    const img = referenceGeneratedImages[i % referenceGeneratedImages.length]
    images.push({
      url: img.url,
      alt: prompt || img.alt || `Generated image ${i + 1}`,
    })
  }

  return res.status(200).json({ images })
}
