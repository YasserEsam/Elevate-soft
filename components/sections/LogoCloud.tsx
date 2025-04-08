"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { name: "Grandshop", image: "/logos/grandshop.svg" },
  { name: "Agro Data", image: "/logos/Agro-data.svg" },
  { name: "vvcredit.md", image: "/logos/vvcredit.svg" },
  { name: "M2M", image: "/logos/M2M.svg" },
  { name: "Grandshop 2", image: "/logos/grandshop.svg" },
];

export default function LogoCloud() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpeedRef = useRef(0);
  const positionRef = useRef(0);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const totalWidth = el.offsetWidth / 2; // Because we're duplicating the logos
    let animationFrame: number;

    const update = () => {
      positionRef.current -= scrollSpeedRef.current;

      // Wrap logic: reset when exceeding width
      if (positionRef.current <= -totalWidth) {
        positionRef.current = 0;
      } else if (positionRef.current >= 0) {
        positionRef.current = -totalWidth;
      }

      el.style.transform = `translateX(${positionRef.current}px)`;
      animationFrame = requestAnimationFrame(update);
    };

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollRef.current;
      lastScrollRef.current = currentScroll;

      scrollSpeedRef.current = delta * 0.5; // Adjust multiplier for speed feel
    };

    window.addEventListener("scroll", onScroll);
    animationFrame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-2">
        <div ref={containerRef} className="overflow-hidden relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-10 items-center opacity-80 will-change-transform"
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center min-w-[200px]">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
