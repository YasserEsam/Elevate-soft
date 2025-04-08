"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "Grandshop", image: "/logos/grandshop.svg" },
  { name: "Agro Data", image: "/logos/Agro-data.svg" },
  { name: "vvcredit.md", image: "/logos/vvcredit.svg" },
  { name: "M2M", image: "/logos/M2M.svg" },
  { name: "Grandshop 2", image: "/logos/grandshop.svg" },
];

export default function LogoCloud() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    // Get original width and duplicate content
    const totalWidth = track.scrollWidth;
    track.innerHTML += track.innerHTML;
    track.style.width = `${totalWidth * 2}px`;

    // Auto-scrolling animation
    const loop = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 60,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    });

    // Scroll-based override animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        // Adjust speed & direction based on scroll velocity
        gsap.to(track, {
          x: `-=${velocity / 10}`,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto",
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
          },
        });
      },
    });

    return () => {
      loop.kill();
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-full mx-auto px-4 md:px-2">
        <div ref={wrapperRef} className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 items-center opacity-80 will-change-transform"
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-3">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="h-10 object-contain max-w-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
