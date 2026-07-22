'use client';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/context/AudioContext';

export default function MuteToggle() {
  const { muted, toggleMuted } = useAudio();

  return (
    <button
      onClick={toggleMuted}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent)',
        color: 'var(--background)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
        zIndex: 150,
        transition: 'all 0.3s ease',
        flexShrink: 0,
        minWidth: '40px',
        minHeight: '40px'
      }}
      aria-label={muted ? 'Unmute site audio' : 'Mute site audio'}
      className="mute-toggle-btn"
    >
      {muted ? <VolumeX size={20} strokeWidth={2.5} /> : <Volume2 size={20} strokeWidth={2.5} />}
      <style jsx>{`
        .mute-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .mute-toggle-btn {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
          }
        }

        @media (max-width: 480px) {
          .mute-toggle-btn {
            width: 48px !important;
            height: 48px !important;
            min-width: 48px !important;
            min-height: 48px !important;
          }
        }
      `}</style>
    </button>
  );
}
