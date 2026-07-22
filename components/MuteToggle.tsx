'use client';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/context/AudioContext';

export default function MuteToggle() {
  const { muted, volume, setVolume, toggleMuted } = useAudio();

  return (
    <div
      className="volume-control"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 150,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="volume-slider-wrap">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="volume-slider"
          aria-label="Site audio volume"
        />
      </div>
      <button
        onClick={toggleMuted}
        style={{
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
          transition: 'all 0.3s ease',
          flexShrink: 0,
          minWidth: '40px',
          minHeight: '40px'
        }}
        aria-label={muted ? 'Unmute site audio' : 'Mute site audio'}
        className="mute-toggle-btn"
      >
        {muted ? <VolumeX size={20} strokeWidth={2.5} /> : <Volume2 size={20} strokeWidth={2.5} />}
      </button>
      <style jsx>{`
        .volume-slider-wrap {
          width: 0;
          overflow: hidden;
          opacity: 0;
          margin-right: 0;
          display: flex;
          align-items: center;
          transition: width 0.25s ease, margin-right 0.25s ease, opacity 0.2s ease;
        }

        .volume-control:hover .volume-slider-wrap,
        .volume-control:focus-within .volume-slider-wrap {
          width: 110px;
          margin-right: 12px;
          opacity: 1;
        }

        .volume-slider {
          width: 100px;
          accent-color: var(--accent);
          cursor: pointer;
        }

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
    </div>
  );
}
