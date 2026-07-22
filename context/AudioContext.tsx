'use client';
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

const STORAGE_KEY = 'keystone-audio-volume';
const DEFAULT_VOLUME = 0.5;
const FADE_DURATION_MS = 1500;

interface AudioContextValue {
  muted: boolean;
  volume: number;
  setVolume: (volume: number) => void;
  toggleMuted: () => void;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function useAudio(): AudioContextValue {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return ctx;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [volume, setVolumeState] = useState(0); // muted by default
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTokenRef = useRef(0);
  const lastNonZeroVolumeRef = useRef<number | null>(null);

  const fadeTo = (target: number, onDone?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    const token = ++fadeTokenRef.current;
    const from = audio.volume;
    const start = performance.now();
    const step = (now: number) => {
      if (fadeTokenRef.current !== token) return;
      const t = Math.min((now - start) / FADE_DURATION_MS, 1);
      const raw = from + (target - from) * t;
      audio.volume = Math.max(0, Math.min(1, raw));
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        onDone?.();
      }
    };
    requestAnimationFrame(step);
  };

  // Restore a persisted volume after mount. State starts muted on both server
  // and first client render (no hydration mismatch); this only adjusts things
  // afterward, and only attempts playback if the user had previously chosen
  // an audible volume.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) return;
    const parsed = parseFloat(stored);
    if (Number.isNaN(parsed)) return;
    const clamped = Math.max(0, Math.min(1, parsed));
    if (clamped > 0) {
      lastNonZeroVolumeRef.current = clamped;
      setVolumeState(clamped);
      const audio = audioRef.current;
      if (audio) {
        audio.volume = clamped;
        audio.play().catch(() => {});
      }
    }
  }, []);

  // Live slider drag: apply immediately, no fade - fading is reserved for the
  // discrete mute/unmute toggle below.
  const setVolume = (next: number) => {
    const clamped = Math.max(0, Math.min(1, next));
    setVolumeState(clamped);
    localStorage.setItem(STORAGE_KEY, String(clamped));
    if (clamped > 0) lastNonZeroVolumeRef.current = clamped;

    const audio = audioRef.current;
    if (!audio) return;
    fadeTokenRef.current++; // cancel any in-flight fade
    audio.volume = clamped;
    if (clamped > 0) {
      if (audio.paused) audio.play().catch(() => {});
    } else if (!audio.paused) {
      audio.pause();
    }
  };

  const toggleMuted = () => {
    if (volume > 0) {
      localStorage.setItem(STORAGE_KEY, '0');
      setVolumeState(0);
      fadeTo(0, () => audioRef.current?.pause());
    } else {
      const target = lastNonZeroVolumeRef.current ?? DEFAULT_VOLUME;
      localStorage.setItem(STORAGE_KEY, String(target));
      setVolumeState(target);
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0;
        audio.play().catch(() => {});
      }
      fadeTo(target);
    }
  };

  return (
    <AudioContext.Provider value={{ muted: volume === 0, volume, setVolume, toggleMuted }}>
      {children}
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="auto" />
    </AudioContext.Provider>
  );
}
