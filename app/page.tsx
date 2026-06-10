"use client";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Problem from "./components/Problem";
import Project from "./components/Projects";
import Services from "./components/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Kill any existing instances to avoid StrictMode duplicate creation
    const existingSmoother = ScrollSmoother.get();
    if (existingSmoother) {
      existingSmoother.kill();
    }

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const animatedHero = document.querySelectorAll(".h1-animate");
      const animatedPara = document.querySelectorAll(".h2-animate");

      const textH1 = SplitText.create(animatedHero, {
        type: "chars,words,lines",
      });
      const textH2 = SplitText.create(animatedPara, {
        type: "chars,words,lines",
      });

      tl.from(textH1.chars, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.02,
        delay: 0.3,
      })
      .from(textH2.words, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.02,
      }, "-=0.4")
      .from("#cta > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.3");

      // Cleanup SplitText instances
      return () => {
        textH1.revert();
        textH2.revert();
      };
    });

    return () => {
      ctx.revert();
      smoother.kill();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <header className="relative min-h-screen flex items-center justify-center px-8 py-32 overflow-hidden">
            {/* Background subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-electric/[0.02] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-5xl w-full flex flex-col gap-8 items-start">
              <p className="text-electric text-xs md:text-sm font-mono font-semibold uppercase tracking-widest h1-animate">
                — Content that moves markets
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-syne text-primary tracking-tight leading-[1.05] h1-animate">
                We don&#39;t Make Noise. <br />
                We Make{" "}
                <span className="text-electric relative inline-block">
                  Signal
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-electric/10 -z-10" />
                </span>.
              </h1>

              <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed font-light h2-animate">
                A content and digital marketing agency built for brands that are done blending in.
                We build content ecosystems that attract the right audience, earn their trust,
                and convert them into revenue — consistently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6" id="cta">
                <a
                  href="#work"
                  className="group px-8 py-4 bg-electric text-white rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#c23e0e] hover:shadow-[0_8px_30px_rgba(232,80,26,0.3)] transition-all duration-300 inline-flex items-center gap-2"
                >
                  See our work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-[#E2DDD6] text-primary rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:border-electric hover:bg-electric/5 transition-all duration-300"
                >
                  Book a free strategy call
                </a>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
                <span className="text-xs font-mono text-muted">Scroll to explore</span>
                <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </header>

          <main className="px-8">
            <Problem />
            <Services />
            <Project />
            <Partners />
            <CTA />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
