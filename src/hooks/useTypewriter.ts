import { useState, useEffect, useRef } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect.
 * Each string is typed out character by character, paused, then deleted.
 */
export function useTypewriter(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (phase === 'typing') {
      if (displayText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), pauseMs);
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 300);
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setPhase('typing');
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, phase, textIndex, texts, typingSpeed, deletingSpeed, pauseMs]);

  return displayText;
}
