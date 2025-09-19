"use client";

import React, { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import type { StaticImageData } from "next/image";

type Item = {
  pill: string;
  title: string;
  body: string;
  image: StaticImageData;
};

export default function FeaturesCarousel({ items }: { items: Item[] }) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const slides = Array.from(rail.querySelectorAll<HTMLElement>("[data-idx]"));
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries
          .filter((en) => en.isIntersecting && en.intersectionRatio >= 0.6)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (e?.target) {
          const idxAttr = (e.target as HTMLElement).dataset.idx;
          if (idxAttr) setActive(Number(idxAttr) - 1);
        }
      },
      { root: rail, threshold: [0.6] }
    );
    slides.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items.length]);

  return (
    <div aria-label="What is Backyard">
      {/* КАРУСЕЛЬ: до xl (мобілка + планшет ) */}
      <div
        ref={railRef}
        className="
          xl:hidden
          flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth
        "
      >
        {items.map((it, i) => (
          <FeatureCard
            key={i}
            idx={i + 1}
            pill={it.pill}
            title={it.title}
            body={it.body}
            image={it.image}
          />
        ))}
      </div>

      {/* точки прогресу  */}
      <div className="xl:hidden mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={[
              "h-1.5 rounded-full transition-all",
              i === active ? "w-10 bg-[#9ca3af]" : "w-5 bg-[#e5e7eb]",
            ].join(" ")}
          />
        ))}
      </div>

      {/* СІТКА: з xl і ширше — 3 карточки, без каруселі */}
      <div className="hidden xl:grid xl:grid-cols-3 xl:gap-[78px] 4xl:gap-[145px]">
        {items.map((it, i) => (
          <FeatureCard
            key={`grid-${i}`}
            idx={i + 1}
            pill={it.pill}
            title={it.title}
            body={it.body}
            image={it.image}
          />
        ))}
      </div>
    </div>
  );
}
