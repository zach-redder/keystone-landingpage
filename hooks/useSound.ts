import { useCallback } from 'react';
import { useAudio } from '@/context/AudioContext';

export function useSound(src: string, volume: number = 1) {
  const { volume: masterVolume } = useAudio();

  return useCallback(() => {
    if (masterVolume === 0) return;
    const audio = new Audio(src);
    audio.volume = masterVolume * volume;
    audio.play().catch(() => {});
  }, [masterVolume, src, volume]);
}
