import { MetadataRoute } from 'next';
import { HOME_DESCRIPTION, SITE_NAME } from '../lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Keystone: Overcome Doubt',
    short_name: SITE_NAME,
    description: HOME_DESCRIPTION,
    start_url: '/',
    display: 'browser',
    background_color: '#2A2A2A',
    theme_color: '#2A2A2A',
    icons: [
      { src: '/icon.png', sizes: '500x500', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
