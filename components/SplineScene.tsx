'use client';
import Spline from '@splinetool/react-spline';

const SCENE_URL = 'https://prod.spline.design/A39kgRJgUzRIY4Qv/scene.splinecode';

// Isolated in its own module so Hero can code-split it with next/dynamic: the
// package's export map only resolves through a static import.
export default function SplineScene() {
  return (
    <Spline
      scene={SCENE_URL}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    />
  );
}
