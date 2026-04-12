"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface CountUpOptions {
  /** Duration of the count animation in ms. Default 1200 */
  duration?: number;
  /** Whether the animation should start. Default false */
  start?: boolean;
}

/**
 * Animates a number from 0 to `target` with ease-out easing.
 *
 * Usage:
 *   const count = useCountUp(140, { start: isVisible });
 */
export function useCountUp(target: number, options: CountUpOptions = {}): number {
  const { duration = 1200, start = false } = options;
  const [value, setValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const hasRun = useRef(false);

  const animate = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
        animationRef.current = null;
      }
    }

    animationRef.current = requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (start && !hasRun.current) {
      animate();
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [start, animate]);

  return value;
}
