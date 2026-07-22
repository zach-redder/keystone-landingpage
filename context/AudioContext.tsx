'use client';
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

const STORAGE_KEY = 'keystone-audio-muted';
const AMBIENT_VOLUME = 0.4;
const FADE_DURATION_MS = 1500;

interface AudioContextValue {
  muted: boolean;
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
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTokenRef = useRef(0);
  const hasHandledInitialRef = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'false') {
      setMuted(false);
    }
  }, []);

  const toggleMuted = () => {
    setMuted((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Skip the very first commit when still muted: nothing has ever played,
    // so there's nothing to fade out. Without this, the initial mount (muted=true)
    // starts a pointless fade-to-silence that races the localStorage-driven
    // unmute that often follows a moment later, and the two overlapping fades
    // can push audio.volume slightly outside [0, 1].
    const isFirstRun = !hasHandledInitialRef.current;
    hasHandledInitialRef.current = true;
    if (isFirstRun && muted) return;

    const token = ++fadeTokenRef.current;

    const fade = (from: number, to: number, onDone?: () => void) => {
      const start = performance.now();
      const step = (now: number) => {
        if (fadeTokenRef.current !== token) return;
        const t = Math.min((now - start) / FADE_DURATION_MS, 1);
        const raw = from + (to - from) * t;
        audio.volume = Math.max(0, Math.min(1, raw));
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          onDone?.();
        }
      };
      requestAnimationFrame(step);
    };

    if (muted) {
      fade(audio.volume, 0, () => audio.pause());
    } else {
      audio.volume = 0;
      audio.play().catch(() => {});
      fade(0, AMBIENT_VOLUME);
    }
  }, [muted]);

  return (
    <AudioContext.Provider value={{ muted, toggleMuted }}>
      {children}
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="auto" />
    </AudioContext.Provider>
  );
}
