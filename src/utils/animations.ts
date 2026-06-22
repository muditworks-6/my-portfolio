import type { Transition } from 'framer-motion';

// Typed cubic bezier easing that satisfies Framer Motion's strict Easing type
export const EASE_OUT_QUART: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
export const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

export function fadeUpVariant(delay = 0): { hidden: object; visible: object } {
  return {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay,
        ease: EASE_OUT_QUART,
      } satisfies Transition,
    },
  };
}

export const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_OUT_QUART,
    } satisfies Transition,
  },
};
