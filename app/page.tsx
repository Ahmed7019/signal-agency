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

    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      smoothTouch: 0.1,
      effects: true,
    });

    const tl = gsap.timeline();
    const animatedHero = document.querySelectorAll(".h1-animate");
    const animatedPara = document.querySelectorAll(".h2-animate");
    const textH1 = SplitText.create(animatedHero, {
      type: "chars,words,lines",
    });
    const textH2 = SplitText.create(animatedPara, {
      type: "chars,words,lines",
    });
    tl.from(textH1.chars, {
      y: "200",
      x: "-5.05",
      duration: 0.9,
      stagger: 0.005,
      delay: 0.2,
      ease: "power3.Out",
    });
    tl.from(textH2.words, {
      autoAlpha: 0,
      y: 50,
      x: -5,
      duration: 1.005,
      stagger: 0.005,
      delay: 0.2,
      ease: "power4.out",
    });

    // Cleanup SplitText instances on unmount to prevent double splitting in StrictMode
    return () => {
      textH1.revert();
      textH2.revert();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <header className="grid items-center h-dvh mx-8">
            <div className="flex flex-col gap-3">
              <p className="text-muted text-xs font-dmSans font-light h1-animate">
                — Content that moves markets
              </p>
              <h1 className="text-5xl font-bold font-syne text-primary tracking-tighter h1-animate">
                We don&#39;t Make Noise. We Make{" "}
                <span className="text-electric">Signal</span>.
              </h1>
              <p className="text-muted text-sm text-left leading-5 font-light h2-animate">
                <span className="text-lg text-electric font-semibold font-dmSans">
                  Signal
                </span>{" "}
                is a content and digital marketing agency built for brands that
                are done blending in. We build content ecosystems that attract
                the right audience, earn their trust, and convert them into
                revenue — consistently
              </p>
            </div>
          </header>
          <main className="my-16 mx-8">
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
