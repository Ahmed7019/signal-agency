"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARTNERS = [
  "Hive Apparel Co.",
  "Noor Clinic",
  "Volta",
  "Apex Digital",
  "Zenith Brands",
  "Pulse Media",
  "Vertex Labs",
  "Lumina Studio"
];

export default function Partners() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partner-title", {
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".partner-item", {
        scrollTrigger: {
          trigger: ".partners-marquee",
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="partners-section py-20 border-t border-neutral-100 flex flex-col gap-12"
    >
      <div className="flex flex-col gap-3 text-center partner-title">
        <p className="text-electric font-mono text-xs tracking-widest uppercase font-semibold">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-syne font-bold tracking-tight text-primary">
          Brands that chose signal over noise
        </h2>
      </div>

      <div className="partners-marquee relative overflow-hidden py-8">
        <div className="flex gap-12 items-center justify-center flex-wrap max-w-5xl mx-auto">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="partner-item group flex items-center justify-center px-8 py-4 rounded-xl bg-[#FAF9F6] border border-[#E2DDD6] hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-sm md:text-base font-semibold font-syne text-primary/70 group-hover:text-electric transition-colors tracking-tight whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-muted/60 font-mono">
        + 50 more brands across e-commerce, healthcare, B2B, and tech
      </p>
    </section>
  );
}
