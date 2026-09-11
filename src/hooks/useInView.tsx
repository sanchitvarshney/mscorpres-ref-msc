"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element scrolls into view. Falls back to "in view"
 * immediately where IntersectionObserver isn't available (SSR / old engines),
 * so content is never left hidden.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

export default useInView;
