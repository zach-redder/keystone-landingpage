import { APPLE_APP_STORE_URL } from './appLinks';

export const SITE_URL = 'https://thekeystoneapp.com';
export const SITE_NAME = 'Keystone';
export const APP_STORE_ID = '6749184004';
export const ORGANIZATION_NAME = 'Redder Media LLC';
export const FOUNDER_NAME = 'Zach Redder';
export const CONTACT_EMAIL = 'zach@thekeystoneapp.com';

export const HOME_TITLE = 'Keystone: AI Self-Reflection App for iOS | Overcome Self-Doubt';
export const HOME_DESCRIPTION =
  'Keystone is an AI self-reflection app for iOS. Define your core values and identity, then talk to an AI that affirms who you are or questions who you are becoming.';
export const APP_DEFINITION =
  'Keystone is an AI self-reflection app for iOS that helps you define your core values and identity, and counters self-doubt.';

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Keystone: AI self-reflection app for iOS',
};

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/thekeystoneapp/',
  'https://x.com/thekeystoneapp',
  'https://www.youtube.com/@thekeystoneapp',
  'https://www.tiktok.com/@keystoneapp',
  'https://discord.gg/qgkuRUWaD9',
];

export { APPLE_APP_STORE_URL };

export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE_URL).toString();
}
