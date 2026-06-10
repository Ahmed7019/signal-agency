"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Pillar {
  number: string;
  title: string;
  description: string;
}

interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

interface TableRow {
  metric: string;
  start: string;
  end: string;
}

export interface CaseStudyData {
  slug: string;
  client: string;
  tag: string;
  services: string[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    resultStrip: string[];
  };
  clientSection: {
    description: string;
  };
  challengeSection: {
    pullQuote: string;
    author: string;
    paragraphs: string[];
  };
  whatWeFound?: {
    intro: string;
  };
  approachSection: {
    intro: string;
    pillars: Pillar[];
    conclusion: string;
  };
  executionSection: {
    timeline: TimelineItem[];
  };
  resultSection: {
    intro: string;
    table: TableRow[];
    conclusion: string;
  };
  testimonial: {
    quote: string;
    author: string;
  };
  closingCTA: {
    headline: string;
    body: string;
    buttonText: string;
  };
  theme: {
    bgClass: string;
    textClass: string;
    accentText: string;
    accentBg: string;
    cardBg: string;
    borderColor: string;
    shadowColor: string;
    tableHeaderBg: string;
    mutedText: string;
  };
}

export default function CaseStudyClient({ data }: { data: CaseStudyData }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stage entrance reveals
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-animate", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Scroll reveals for sections
      const sections = document.querySelectorAll(".scroll-reveal");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  const t = data.theme;

  return (
    <div ref={containerRef} className={`min-h-screen ${t.bgClass} ${t.textClass} font-dmSans transition-colors duration-500`}>
      <Navbar />

      <div className="pt-24 md:pt-32">
        {/* BACK BUTTON */}
        <div className="px-8 max-w-7xl mx-auto py-6">
          <Link
            href="/#work"
            className={`group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider ${t.accentText} hover:opacity-70 transition-all duration-300`}
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to all work
          </Link>
        </div>

        {/* HERO SECTION */}
        <header className="px-8 max-w-7xl mx-auto py-16 md:py-24 border-b border-neutral-200/20">
          <div className="flex flex-col gap-6 max-w-4xl">
            <span className={`hero-animate uppercase tracking-widest text-xs font-mono font-semibold ${t.accentText}`}>
              {data.hero.eyebrow}
            </span>
            <h1 className="hero-animate text-4xl md:text-6xl lg:text-7xl font-bold font-syne tracking-tight leading-[1.05] whitespace-pre-line">
              {data.hero.headline}
            </h1>
            <p className="hero-animate text-lg md:text-xl font-light leading-relaxed max-w-3xl opacity-90">
              {data.hero.subheadline}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="hero-animate grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 pt-8 border-t border-neutral-200/10">
            {data.hero.resultStrip.map((stat, i) => {
              const [val, ...lblArr] = stat.split(" ");
              const lbl = lblArr.join(" ");
              return (
                <div key={i} className="flex flex-col">
                  <span className={`text-3xl md:text-4xl lg:text-5xl font-bold font-syne tracking-tight ${t.accentText}`}>
                    {val}
                  </span>
                  <span className={`text-xs uppercase tracking-wider font-mono mt-2 opacity-80`}>
                    {lbl}
                  </span>
                </div>
              );
            })}
          </div>
        </header>

        {/* CONTENT LAYOUT */}
        <main className="max-w-7xl mx-auto px-8 py-16 md:py-24 flex flex-col gap-20 md:gap-32">
          
          {/* CLIENT & CHALLENGE */}
          <section className="scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-sm uppercase tracking-widest font-mono font-semibold opacity-70">The Client</h2>
              <p className="font-light leading-relaxed text-base opacity-90 whitespace-pre-line">
                {data.clientSection.description}
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              <h2 className="text-sm uppercase tracking-widest font-mono font-semibold opacity-70">The Challenge</h2>
              
              <blockquote className={`pl-6 border-l-4 ${t.borderColor} italic my-2`}>
                <p className="text-xl md:text-2xl font-syne tracking-tight font-medium opacity-95 leading-relaxed">
                  &ldquo;{data.challengeSection.pullQuote}&rdquo;
                </p>
                <cite className="block text-xs font-mono tracking-wider uppercase mt-4 not-italic opacity-85">
                  &mdash; {data.challengeSection.author}
                </cite>
              </blockquote>

              <div className="flex flex-col gap-4">
                {data.challengeSection.paragraphs.map((p, i) => (
                  <p key={i} className="font-light leading-relaxed opacity-90">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT WE FOUND */}
          {data.whatWeFound && (
            <section className="scroll-reveal">
              <div className={`${t.cardBg} border ${t.borderColor} rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-300`} style={{ boxShadow: `0 16px 40px ${t.shadowColor}` }}>
                <div className="max-w-4xl flex flex-col gap-6">
                  <h2 className={`text-xs uppercase tracking-widest font-mono font-semibold ${t.accentText}`}>What We Found</h2>
                  <p className="font-light leading-relaxed text-base opacity-95 whitespace-pre-line">
                    {data.whatWeFound.intro}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* APPROACH */}
          <section className="scroll-reveal flex flex-col gap-12">
            <div className="max-w-4xl flex flex-col gap-4">
              <h2 className="text-sm uppercase tracking-widest font-mono font-semibold opacity-70">Our Approach</h2>
              <p className="text-lg font-light leading-relaxed opacity-90 whitespace-pre-line">
                {data.approachSection.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {data.approachSection.pillars.map((pillar, i) => (
                <div key={i} className={`flex flex-col gap-4 p-8 rounded-2xl border ${t.borderColor} ${t.cardBg}`}>
                  <span className={`text-3xl font-bold font-syne ${t.accentText}`}>
                    {pillar.number}
                  </span>
                  <h3 className="text-xl font-bold font-syne tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed opacity-85">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mt-4">
              <p className="font-light leading-relaxed opacity-90">
                {data.approachSection.conclusion}
              </p>
            </div>
          </section>

          {/* EXECUTION */}
          <section className="scroll-reveal flex flex-col gap-12">
            <div className="max-w-4xl">
              <h2 className="text-sm uppercase tracking-widest font-mono font-semibold opacity-70">The Execution</h2>
            </div>

            <div className="flex flex-col gap-8 max-w-5xl">
              {data.executionSection.timeline.map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-8 border-b border-neutral-200/10 last:border-b-0">
                  <div className="md:col-span-3">
                    <span className={`text-lg font-bold font-syne ${t.accentText}`}>
                      {item.period}
                    </span>
                  </div>
                  <div className="md:col-span-9 flex flex-col gap-2">
                    <h3 className="text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed opacity-85">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RESULTS */}
          <section className="scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-sm uppercase tracking-widest font-mono font-semibold opacity-70">The Result</h2>
              <p className="text-xl font-syne tracking-tight opacity-95 leading-relaxed whitespace-pre-line">
                {data.resultSection.intro}
              </p>
              <p className="text-sm font-light leading-relaxed opacity-85 whitespace-pre-line mt-2">
                {data.resultSection.conclusion}
              </p>
            </div>

            <div className="lg:col-span-7 w-full overflow-hidden rounded-2xl border border-neutral-200/20">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`border-b border-neutral-200/10 ${t.tableHeaderBg}`}>
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-mono font-semibold opacity-80">Metric</th>
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-mono font-semibold opacity-80 text-right">Start</th>
                    <th className="py-4 px-6 text-xs uppercase tracking-wider font-mono font-semibold opacity-80 text-right">End / Result</th>
                  </tr>
                </thead>
                <tbody>
                  {data.resultSection.table.map((row, i) => (
                    <tr key={i} className="border-b border-neutral-200/10 last:border-b-0 hover:bg-neutral-500/5 transition-colors">
                      <td className="py-4 px-6 text-sm font-medium">{row.metric}</td>
                      <td className="py-4 px-6 text-sm font-light text-right opacity-80">{row.start}</td>
                      <td className={`py-4 px-6 text-sm font-bold text-right ${t.accentText}`}>{row.end}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* TESTIMONIAL */}
          <section className="scroll-reveal">
            <div className={`rounded-3xl p-8 md:p-16 border ${t.borderColor} ${t.cardBg} flex flex-col items-center text-center max-w-4xl mx-auto shadow-2xl transition-all duration-300`} style={{ boxShadow: `0 24px 64px ${t.shadowColor}` }}>
              <span className={`text-6xl font-syne leading-none select-none ${t.accentText} opacity-40 mb-4`}>&ldquo;</span>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-95 max-w-3xl mb-8">
                {data.testimonial.quote}
              </p>
              <div className="flex flex-col items-center">
                <span className="h-1 w-8 bg-neutral-200/20 rounded mb-4"></span>
                <span className="text-xs uppercase font-mono tracking-wider font-bold">{data.testimonial.author}</span>
                <span className="text-[10px] uppercase font-mono tracking-widest opacity-60 mt-1">Client Partner</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="scroll-reveal py-16 md:py-24 border-t border-neutral-200/10 text-center max-w-3xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-bold font-syne tracking-tight leading-tight">
              {data.closingCTA.headline}
            </h2>
            <p className="text-base font-light leading-relaxed opacity-90">
              {data.closingCTA.body}
            </p>
            <Link
              href="/#cta"
              className={`px-8 py-4 rounded-full font-mono uppercase text-xs font-bold tracking-wider text-white transition-all duration-300 ${t.accentBg} hover:opacity-90 hover:scale-[1.02] cursor-pointer shadow-lg`}
              style={{ boxShadow: `0 8px 24px ${t.shadowColor}` }}
            >
              {data.closingCTA.buttonText} &rarr;
            </Link>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}
