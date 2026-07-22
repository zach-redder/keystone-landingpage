import { useCallback } from 'react';
import { useAudio } from '@/context/AudioContext';

export function useSound(src: string, volume: number = 1) {
  const { muted } = useAudio();

  return useCallback(() => {
    if (muted) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
  }, [muted, src, volume]);
}
