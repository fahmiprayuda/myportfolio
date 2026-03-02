"use client";

import { useEffect, useRef } from "react";

export default function useSnapScroll() {
  const animation = useRef(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const getCurrentSectionIndex = () => {
      const scrollY = window.scrollY;
      return sections.findIndex((section, i) => {
        const top = section.offsetTop;
        const next = sections[i + 1]?.offsetTop || Infinity;
        return scrollY >= top - 10 && scrollY < next - 10;
      });
    };

    const smoothScrollTo = (targetY, duration = 100) => {
      cancelAnimationFrame(animation.current);

      const startY = window.scrollY;
      const diff = targetY - startY;
      let start;

      const ease = (t) => 1 - Math.pow(1 - t, 3);

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const progress = Math.min(time / duration, 1);

        window.scrollTo(0, startY + diff * ease(progress));

        if (progress < 1) {
          animation.current = requestAnimationFrame(step);
        }
      };

      animation.current = requestAnimationFrame(step);
    };

    const handleWheel = (e) => {
      e.preventDefault();

      const currentIndex = getCurrentSectionIndex();
      if (currentIndex === -1) return;

      if (e.deltaY > 0) {
        const next = sections[currentIndex + 1];
        if (next) smoothScrollTo(next.offsetTop);
      } else {
        const prev = sections[currentIndex - 1];
        if (prev) smoothScrollTo(prev.offsetTop);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}