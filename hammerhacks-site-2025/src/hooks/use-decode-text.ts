"use client";

import { useCallback, useRef, useState } from "react";

const SCRAMBLE_CHARS = "#$%^&*+-=<>?";

/**
 * Hook that provides a "decode scramble" text animation effect.
 * Returns [displayTexts, triggerDecode] where displayTexts is an array
 * of strings currently being displayed, and triggerDecode sets new
 * target values with an animated transition.
 */
export function useDecodeText(
    initialValues: string[],
    duration = 500,
): [string[], (newValues: string[]) => void] {
    const [displayTexts, setDisplayTexts] = useState<string[]>(initialValues);
    const animationRef = useRef<number | null>(null);

    const triggerDecode = useCallback(
        (newValues: string[]) => {
            // Cancel any in-progress animation
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }

            const oldTexts = [...displayTexts];
            const maxLens = newValues.map((txt, i) =>
                Math.max(txt.length, (oldTexts[i] ?? "").length),
            );
            const startTime = performance.now();

            function update(now: number) {
                const elapsed = now - startTime;
                const progress = Math.min(1, elapsed / duration);

                const nextDisplay = newValues.map((newText, idx) => {
                    const len = maxLens[idx];
                    let result = "";

                    for (let i = 0; i < len; i++) {
                        if (progress < 1) {
                            const settleChance = Math.pow(progress, 3);
                            if (Math.random() < settleChance) {
                                result += newText[i] ?? "";
                            } else {
                                result +=
                                    SCRAMBLE_CHARS[
                                    Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                                    ];
                            }
                        } else {
                            result += newText[i] ?? "";
                        }
                    }

                    return result;
                });

                setDisplayTexts(nextDisplay);

                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(update);
                } else {
                    setDisplayTexts(newValues);
                    animationRef.current = null;
                }
            }

            animationRef.current = requestAnimationFrame(update);
        },
        [displayTexts, duration],
    );

    return [displayTexts, triggerDecode];
}
