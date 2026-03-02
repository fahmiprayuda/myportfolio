"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function SpotlightImage({ src, alt }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative w-64 md:w-80 aspect-[3/4] rounded-[40%] overflow-hidden"
    >
      {/* base grayscale image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale brightness-75"
      />

      {/* spotlight layer */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-300"
        style={{
          maskImage: `radial-gradient(circle at ${pos.x} ${pos.y}, black 80px, transparent 140px)`,
          WebkitMaskImage: `radial-gradient(circle at ${pos.x} ${pos.y}, black 80px, transparent 140px)`,
        }}
      />
    </div>
  );
}
