"use client";

import useSnapScroll from "@/hooks/useSnapScroll";

export default function SnapScrollProvider({ children }) {
  useSnapScroll();
  return children;
}
