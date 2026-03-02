"use client";

import useSectionScroll from "@/hooks/useSectionScroll";

export default function SmoothProvider({ children }) {
  useSectionScroll();
  return children;
}
