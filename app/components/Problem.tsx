"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const paraEl = sectionRef.current.querySelector("#para");
    const leaderEl = sectionRef.current.querySelector("#leader");
    const headingEl = sectionRef.current.querySelector("#heading");

    if (!paraEl || !leaderEl || !headingEl) return;

    const paraText = SplitText.create(paraEl, {
      type: "words,chars",
    });

    // Leader text animation
    gsap.from(leaderEl, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Heading animation
    gsap.from(headingEl, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Paragraph color reveal animation
    gsap.to(paraText.chars, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 30%",
        scrub: 1,
        pin: true,
      },
      stagger: 1,
      color: "#E8501A",
      opacity: 1,
      ease: "none",
    });

    return () => {
      paraText.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: sectionRef, dependencies: [] });
  return (
    <>
      <section ref={sectionRef} className="flex flex-col items-center gap-4 py-20" id="problem">
        <p className="text-center font-light text-electric text-sm" id="leader">
          Creative agency building premium brands
        </p>
        <h2
          className="text-center font-bold font-syne text-3xl leading-7"
          id="heading"
        >
          Your competitors are posting. You need to be converting
        </h2>
        <p className="font-light text-sm text-muted text-justify" id="para">
          Most brands aren&#39;t struggling to create content. They&#39;re
          struggling to get results. They post consistently, stay active, and
          still get ignored. Without strategy, content becomes noise—consuming
          time, budget, and attention without generating revenue. That&#39;s the
          problem SIGNAL was built to solve.
        </p>
      </section>
    </>
  );
}
