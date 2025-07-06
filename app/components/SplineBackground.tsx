'use client';

import Spline from '@splinetool/react-spline/next';

export default function SplineBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <Spline scene="https://prod.spline.design/4gx4DRvFyqsKMgbO/scene.splinecode" />
    </div>
  );
} 