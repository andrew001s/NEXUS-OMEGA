import sharp from 'sharp'
import { readFileSync } from 'fs'

const sizes = [192, 512]

async function generateIcon(size) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1a0a"/>
      <stop offset="100%" stop-color="#050805"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="url(#bg)"/>
  <rect x="${size * 0.05}" y="${size * 0.05}" width="${size * 0.9}" height="${size * 0.9}" rx="${size * 0.12}" fill="none" stroke="#4ade80" stroke-width="${size * 0.015}" opacity="0.25"/>
  <circle cx="${size * 0.5}" cy="${size * 0.4}" r="${size * 0.22}" fill="none" stroke="#4ade80" stroke-width="${size * 0.025}" opacity="0.35"/>
  <circle cx="${size * 0.5}" cy="${size * 0.4}" r="${size * 0.12}" fill="#4ade80" opacity="0.2"/>
  <circle cx="${size * 0.5}" cy="${size * 0.4}" r="${size * 0.04}" fill="#4ade80" opacity="0.6"/>
  <text x="${size * 0.5}" y="${size * 0.68}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${size * 0.28}" font-weight="bold" fill="#4ade80" opacity="0.9">G</text>
</svg>`

  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(`public/icons/icon-${size}.png`)
  
  console.log(`Generated public/icons/icon-${size}.png`)
}

for (const size of sizes) {
  await generateIcon(size)
}
