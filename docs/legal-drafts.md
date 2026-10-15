# Privacy Policy and Terms: suggested additions (DRAFT, not legal advice)

These are starting points for you and your lawyer, not final text. Nothing here has been put on the live
pages. Items marked **[CONFIRM]** are facts only you can verify. Every other statement was checked against
what the app, the backend and the database actually do as of this audit.

## What the current pages are missing

The current Privacy Policy is generic: it doesn't mention AI processing, OpenAI, voice, or any service
provider. The Terms have no subscription terms, no AI disclaimer and no age requirement. Apple expects both
for an app that sends personal text to a third-party AI and sells auto-renewing subscriptions.

Two small fixes on the existing Privacy Policy:

- `Last Updated: {new Date().toLocaleDateString()}` prints the date of the last build, so it changes every
  deploy and looks like the policy was just updated. Replace it with a fixed date you choose.
- "Analyze usage patterns to improve our application" isn't true of the app (it has no analytics SDK). The
  website uses Vercel Analytics. Remove the line, or say it applies to the website.

## Privacy Policy: sections to add

### Who processes your information

We use these providers to run Keystone. They process information only on our behalf:

| Provider | What for | What they receive |
|---|---|---|
| Supabase | Accounts and database (hosted in the US, us-east-2) | Email, name, saved keys, chat history, preferences, subscription status |
| OpenAI | Generating AI replies, including voice | The messages you send, your saved keys, and in voice mode your spoken audio |
| Resend | Email (welcome email, free-month codes, updates) | Your email address |
| Superwall | Subscriptions and paywalls | Purchase status, an account identifier, and device identifiers [CONFIRM against Superwall's docs] |
| Apple, Google | Sign in with Apple / Google | The details you choose to share when you sign in |
| Vercel | Hosting and basic analytics for this website | Standard request data |
| Render | Hosting for Keystone's server | Requests from the app |

### How your reflections are used by the AI

To reply, Keystone sends what you write and the identity keys you save to OpenAI, our AI provider. In voice
mode your speech is streamed to OpenAI as audio. Keystone does not keep the audio: it saves the text
transcript of each turn in your chat history, the same as typed messages.

[CONFIRM: OpenAI does not use API data to train its models by default. Verify your organization's data
controls and decide whether to request zero data retention. If OpenAI retains requests for abuse monitoring
(up to 30 days by default), say so here.]

We don't sell your information and we don't use it for advertising.

### What we keep, and where

On our servers: your account (email and name), your identity keys, your chat history, proposed key changes you
accepted, your preferences (such as reminder time), your subscription status, voice session records (when a
session started and ended and how many messages), and any referral code you redeemed.

On your device: your sign-in session (stored in the iOS Keychain), your onboarding progress, and a cached copy
of your keys so the app opens quickly.

### Deleting your data

In the app, open Profile and choose Delete Account. This permanently deletes your account and the data listed
above, and removes you from our mailing list. We don't keep your email address after that, other than a record
that a referral code was used, which doesn't identify you. [CONFIRM: describe how long deleted data may remain
in provider backups, for example "up to 30 days".] To ask for deletion without the app, email
zach@thekeystoneapp.com from the address on your account.

### Not therapy, and getting help

Keystone is a self-reflection tool. It isn't therapy, medical advice or a crisis service. If you are thinking
about harming yourself, in the US you can call or text 988 or text HOME to 741741; elsewhere see
findahelpline.com. If you might be in immediate danger, call your local emergency number.

### Age

[CONFIRM: minimum age and make it match the App Store age rating, for example "Keystone is not for children
under 13 and we don't knowingly collect their information."]

### Your rights and where we operate

[CONFIRM: which jurisdictions you serve. If you serve the EU, UK or California, list the specific rights, the
legal bases you rely on, how international transfers are handled (Supabase and OpenAI are US-based), and
who to contact. Have a lawyer write this section.]

## Terms: sections to add

### Subscriptions

Keystone Pro is an auto-renewing subscription [CONFIRM: products, prices and periods; these are set in
Superwall and App Store Connect]. Payment is charged to your Apple ID at confirmation of purchase. It renews
automatically unless cancelled at least 24 hours before the end of the current period. You can manage or
cancel it in your iPhone's Settings under your name, then Subscriptions. Refunds are handled by Apple.
Deleting your Keystone account does not cancel an Apple subscription.

[CONFIRM: free trial terms if you offer one, including what happens at the end of the trial.]

### Promotional offers and referral codes

A code or free month gives access to Keystone Pro for the stated period, one per account. [CONFIRM: whether
you reserve the right to revoke codes that were obtained in bulk or through abuse.]

### AI-generated content

Keystone's replies are generated by AI and can be wrong. They reflect what you've written and saved, not
facts about you, and they are not professional, medical, legal or financial advice. You decide what to do
with them.

### Not therapy

Keystone is a self-reflection tool and is not a substitute for therapy, medical care or emergency services.

### Age and acceptable use

[CONFIRM: minimum age, matching the Privacy Policy.] You agree not to misuse the service, including trying to
bypass limits, access other people's data, or use it to harm others.

### Ending your account

You can delete your account at any time from the app. We can suspend or end accounts that break these terms.

## Consistency checklist

Keep these in step with each other, because they're what users and App Review compare:

- The consent screen in the app, the Privacy Policy, and the App Store privacy labels must describe the same
  data going to the same providers.
- The Support URL in App Store Connect should point to `/support` once it is reviewed and no longer `noindex`.
- The waitlist email links to `discord.me/thealignedcore`, while the site uses `discord.gg/qgkuRUWaD9`.
  Decide which one is current.
