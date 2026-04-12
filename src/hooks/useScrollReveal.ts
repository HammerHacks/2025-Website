"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  /** Fraction of element that must be visible (0–1). Default 0.15 */
  threshold?: number;
  /** CSS rootMargin for the observer. Default "0px 0px -40px 0px" */
  rootMargin?: string;
  /** If true, the reveal only fires once. Default true */
  once?: boolean;
}

/**
 * Returns a ref and visibility state for scroll-triggered animations.
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal();
 *   <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
