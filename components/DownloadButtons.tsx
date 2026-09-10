'use client';
import { APPLE_APP_STORE_URL, ANDROID_LIVE } from '../lib/appLinks';

interface DownloadButtonsProps {
  size?: 'hero' | 'section';
}

function AppleBadge() {
  return (
    <svg width="168" height="50" viewBox="0 0 168 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="167" height="49" rx="9.5" fill="#0A0A0A" stroke="rgba(255,255,255,0.18)" />
      <g transform="translate(14, 12)" fill="#FFFFFF">
        <path d="M15.77 4.87c-.76.9-1.98 1.6-3.17 1.5-.15-1.2.44-2.47 1.15-3.26.76-.9 2.1-1.58 3.19-1.63.13 1.25-.37 2.48-1.17 3.39zM17.6 6.6c-1.75-.1-3.24.99-4.07.99-.84 0-2.11-.94-3.49-.91-1.79.03-3.45 1.04-4.36 2.64-1.87 3.23-.48 8.01 1.34 10.63.89 1.28 1.95 2.72 3.35 2.67 1.34-.05 1.85-.87 3.47-.87 1.62 0 2.08.87 3.49.84 1.44-.03 2.35-1.31 3.24-2.6.72-1.03 1.29-2.18 1.66-3.43-1.83-.72-2.87-2.41-2.87-4.19-.02-1.9 1.05-3.5 2.26-4.36-.87-1.24-2.36-2.03-3.99-2.41z" />
      </g>
      <text x="42" y="20" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="8.5">Download on the</text>
      <text x="42" y="36" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600">App Store</text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg width="168" height="50" viewBox="0 0 168 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="167" height="49" rx="9.5" fill="#0A0A0A" stroke="rgba(255,255,255,0.18)" />
      <g transform="translate(15, 11)">
        <path d="M0.5 0.6C0.2 0.9 0 1.4 0 2v24c0 .6.2 1.1.5 1.4l.1.1L14 14.1v-.2L.6.5l-.1.1z" fill="#00D3FF" />
        <path d="M18.4 18.5L14 14.1v-.2l4.4-4.4.1.1 5.2 3c1.5.8 1.5 2.2 0 3l-5.2 3-.1-.1z" fill="#FFE000" />
        <path d="M18.5 18.4L14 13.9.5 27.4c.5.5 1.3.6 2.2.1l15.8-9.1" fill="#FF3A44" />
        <path d="M18.5 9.6L2.7 0.5C1.8 0 1 .1.5.6L14 13.9l4.5-4.3z" fill="#00E06B" />
      </g>
      <text x="42" y="20" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="7.5" letterSpacing="0.5">GET IT ON</text>
      <text x="42" y="36" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="16.5" fontWeight="600">Google Play</text>
    </svg>
  );
}

export default function DownloadButtons({ size = 'section' }: DownloadButtonsProps) {
  return (
    <div className={`download-buttons download-buttons-${size}`}>
      <a
        href={APPLE_APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Keystone on the App Store"
        className="download-badge"
      >
        <AppleBadge />
      </a>

      <div
        className="download-badge download-badge-disabled"
        aria-disabled="true"
        aria-label="Keystone on Google Play — coming soon"
        title="Coming soon to Google Play"
      >
        <GooglePlayBadge />
        {!ANDROID_LIVE && <span className="coming-soon-pill">Coming Soon</span>}
      </div>

      <style jsx>{`
        .download-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .download-buttons-section {
          justify-content: center;
        }

        .download-buttons-hero {
          justify-content: center;
        }

        .download-badge {
          display: inline-flex;
          position: relative;
          border-radius: 10px;
          transition: transform 0.25s ease, filter 0.25s ease;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3));
        }

        a.download-badge:hover {
          transform: translateY(-3px);
          filter: drop-shadow(0 12px 28px rgba(212, 222, 149, 0.25));
        }

        .download-badge-disabled {
          opacity: 0.55;
          filter: grayscale(0.6) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
          cursor: not-allowed;
        }

        .coming-soon-pill {
          position: absolute;
          top: -10px;
          right: -8px;
          background: var(--accent);
          color: var(--background);
          font-size: 0.625rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: 9999px;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 768px) {
          .download-buttons-hero {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .download-badge :global(svg) {
            width: 148px;
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
}
