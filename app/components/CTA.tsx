"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: "SIGNAL didn't just grow our following — they changed how we think about content entirely. We sold out in 72 hours — and the DMs we're still getting a month later are from people who feel like they were part of it.",
    author: "Layla Al-Rashid",
    role: "Co-Founder, Hive Apparel Co.",
  },
  {
    quote: "SIGNAL was the first team that actually diagnosed the problem before prescribing a solution. Within three months, our calendar was full for the first time since we opened. The patients coming in now are the patients we built this clinic for.",
    author: "Dr. Khaled Nour",
    role: "Founder & Director, Noor Clinic",
  },
  {
    quote: "Within 90 days, we had qualified conversations with decision-makers at companies we'd been trying to cold-email for two years. The difference was that they already knew who we were.",
    author: "Omar Siddiqui",
    role: "CEO, Volta",
  }
];

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const testimonialCards = containerRef.current.querySelectorAll(".testimonial-card");
    const ctaContent = containerRef.current.querySelectorAll(".cta-content > *");

    if (testimonialCards.length === 0 || ctaContent.length === 0) return;

    // Testimonials Stagger
    gsap.from(testimonialCards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // CTA Banner animation
    gsap.from(ctaContent, {
      scrollTrigger: {
        trigger: containerRef.current.querySelector(".cta-banner"),
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef, dependencies: [] });

  return (
    <section ref={containerRef} className="py-24 md:py-32 flex flex-col gap-32">
      {/* TESTIMONIALS */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-electric font-mono text-xs tracking-widest uppercase font-semibold">
            The Result
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-bold tracking-tight text-primary">
            Don&#39;t take our word for it.
          </h2>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="testimonial-card flex flex-col justify-between gap-8 p-8 md:p-10 rounded-3xl bg-white border border-[#E2DDD6] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <span className="text-4xl text-electric font-syne opacity-40 leading-none">
                  &ldquo;
                </span>
                <p className="text-sm md:text-base font-light text-primary leading-relaxed opacity-90">
                  {t.quote}
                </p>
              </div>
              <div className="flex flex-col pt-6 border-t border-[#E2DDD6]/50">
                <span className="font-bold font-syne text-primary tracking-tight">
                  {t.author}
                </span>
                <span className="text-xs font-mono text-muted mt-1">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="cta-banner relative overflow-hidden rounded-3xl bg-[#0c0c0b] text-[#f5f5f4] p-12 md:p-24 flex flex-col items-center text-center shadow-2xl">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#e8501a] opacity-10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="cta-content relative z-10 flex flex-col items-center gap-8 max-w-3xl">
          <span className="text-[#e8501a] font-mono text-xs tracking-widest uppercase font-semibold">
            Ready to scale?
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tight leading-[1.1]">
            Let&#39;s build something that matters.
          </h2>
          <p className="text-lg md:text-xl font-light text-[#7a7570] max-w-xl">
            Stop blending in. Partner with SIGNAL to build a content engine that commands attention and drives revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              href="mailto:hello@signal.com"
              className="px-8 py-4 bg-[#e8501a] text-white rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#c23e0e] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(232,80,26,0.3)]"
            >
              Start a Conversation
            </Link>
            <Link 
              href="/#services"
              className="px-8 py-4 bg-transparent border border-[#262624] text-[#f5f5f4] rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
