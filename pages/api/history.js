export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const historyItems = [
    { image: '/history/flowers-rain.jpg', alt: 'Flowers on wet pavement' },
    { image: '/history/photo-pile.jpg', alt: 'Pile of vintage photos' },
    
    { image: '/history/fish-portrait.jpg', alt: 'Surreal portrait with fish' },
    { image: '/history/Butterfly-matcha.jpg', alt: 'butterfly cubes in matcha' },
    { image: '/history/record-player-flowers.jpg', alt: 'Record player with flowers' },
    { image: '/history/cottage-sunset.jpg', alt: 'Cottage in sunset field' },
    { image: '/history/eyes-light.jpg', alt: 'Close-up eyes with light patterns' },
    { image: '/history/swan-forest.jpg', alt: 'Swan in mystical forest' },
    { image: '/history/canal-sunset.jpg', alt: 'Canal at sunset with flowers' },
  ]

  res.status(200).json({ items: historyItems })
}

