import {
  absoluteUrl,
  APP_DEFINITION,
  APPLE_APP_STORE_URL,
  CONTACT_EMAIL,
  FOUNDER_NAME,
  HOME_DESCRIPTION,
  OG_IMAGE,
  ORGANIZATION_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from './seo';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

// Must mirror the answers rendered in components/FAQ.tsx: Google requires
// FAQPage markup to match visible page content.
const FAQ_ITEMS = [
  {
    question: 'What is Keystone?',
    answer:
      "Keystone is an AI self-reflection app built around one idea: the mean between certainty and doubt. Talk to an AI that helps you affirm who you are when outside opinions get loud, or one that questions who you're becoming when you start to feel stagnant.",
  },
  {
    question: "What's the difference between the two AI modes?",
    answer:
      "Affirm Mode is there to ground you — it reminds you of who you are, using your own stored keys, when doubt or other people's opinions start to drown that out. Question Mode questions your beliefs and identity instead of affirming them, asking hard questions so you find your own answers rather than being handed one.",
  },
  {
    question: 'Am I talking to a real person?',
    answer:
      "No. Keystone's replies come from an AI, not a person. That's the point: it's a private place to think out loud with no judgment and no audience, so you can get clear before you take it to the people in your life.",
  },
  {
    question: 'Is Keystone therapy?',
    answer:
      "Keystone is a self-reflection tool, not a substitute for professional care. Plenty of people use it to think through hard things, and that's welcome. If you're in crisis, please reach out to someone who can help right now: in the US, call or text 988 or text HOME to 741741; elsewhere, findahelpline.com lists services by country. If you might be in immediate danger, call your local emergency number.",
  },
  {
    question: 'Is Keystone available now?',
    answer:
      'Yes — Keystone is live now on the App Store. Download it today and start building your keys, no waiting required.',
  },
  {
    question: 'How will my data be used?',
    answer:
      "Your messages and keys are sent to our AI provider so Keystone can reply, and your information is stored securely. We don't sell your data or use it for advertising, and you can delete everything any time from your profile.",
  },
  {
    question: 'Is Keystone available on iOS and Android?',
    answer:
      "Keystone is available on iOS now. Android is on the way — we're building it so that no matter what phone you own, you'll have the best experience possible.",
  },
  {
    question: 'Will the app be free?',
    answer:
      'Yes, the free tier of the app offers enough features where you can benefit fully from Keystone. The premium tier of the app unlocks the full app experience, advanced AI options, and additional tools/benefits for committed users.',
  },
];

export function homeStructuredData(): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: ORGANIZATION_NAME,
      brand: { '@type': 'Brand', name: SITE_NAME },
      url: SITE_URL,
      logo: absoluteUrl('/icon.png'),
      email: CONTACT_EMAIL,
      founder: { '@id': FOUNDER_ID },
      sameAs: SOCIAL_PROFILES,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: FOUNDER_NAME,
      jobTitle: 'Founder',
      url: SITE_URL,
      worksFor: { '@id': ORGANIZATION_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      description: HOME_DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': ORGANIZATION_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      '@id': APP_ID,
      name: 'Keystone: Overcome Doubt',
      alternateName: SITE_NAME,
      description: APP_DEFINITION,
      url: SITE_URL,
      image: absoluteUrl(OG_IMAGE.url),
      applicationCategory: 'Lifestyle',
      operatingSystem: 'iOS',
      inLanguage: 'en',
      installUrl: APPLE_APP_STORE_URL,
      downloadUrl: APPLE_APP_STORE_URL,
      sameAs: [APPLE_APP_STORE_URL],
      author: { '@id': ORGANIZATION_ID },
      publisher: { '@id': ORGANIZATION_ID },
      // Free to download; Pro is an in-app subscription, so no price claim beyond 0.
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: APPLE_APP_STORE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];
}
