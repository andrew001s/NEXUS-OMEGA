import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Guardianes: El Legado del Bosque',
    short_name: 'Guardianes',
    description: 'Un videojuego educativo 2D. Explora un laboratorio abandonado invadido por la naturaleza y descubre los secretos del bosque.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050805',
    theme_color: '#050805',
    orientation: 'landscape',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
