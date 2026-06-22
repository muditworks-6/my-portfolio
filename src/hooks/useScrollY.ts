import { useState, useEffect } from 'react';

/**
 * Returns the current window scroll Y position.
 * Used by the Navbar to apply the frosted-glass style after scrolling past the hero.
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
