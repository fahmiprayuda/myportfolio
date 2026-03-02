"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function useSectionScroll() {
  const index = useRef(0);
  const locked = useRef(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 0.8 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = [...document.querySelectorAll("section")];

    const goTo = (i) => {
      if (i < 0 || i >= sections.length) return;

      locked.current = true;
      index.current = i;

      lenis.scrollTo(sections[i], {
        duration: 0.8,
        onComplete: () => {
          locked.current = false;
        },
      });
    };

    const handleWheel = (e) => {
      e.preventDefault();

      if (locked.current) return;

      if (e.deltaY > 0) goTo(index.current + 1);
      else goTo(index.current - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      lenis.destroy();
    };
  }, []);
}