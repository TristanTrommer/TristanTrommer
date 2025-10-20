import {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tristan Trommer',
    short_name: 'Tristan Trommer',
    description: 'Hello, I\'m Tristan Trommer. I\'m a passionate Software Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/android-chrome-192x192.png?v=1',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png?v=1',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
