import { useEffect, useRef } from 'react';

/**
 * Subtle radial cursor-follow glow effect.
 * Renders a soft radial gradient that follows the mouse pointer with a smooth lag.
 * GPU-friendly — uses CSS custom properties and transform only.
 * Only renders on pointer devices (hidden on touch screens).
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.08);
      current.current.y = lerp(current.current.y, pos.current.y, 0.08);

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle, rgba(0, 240, 255, 0.035) 0%, rgba(168, 85, 247, 0.015) 40%, transparent 70%)',
        filter: 'blur(20px)',
        willChange: 'transform',
        transform: 'translate(-500px, -500px)',
      }}
      ref={glowRef}
    />
  );
}
