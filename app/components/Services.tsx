"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const listItems = sectionRef.current.querySelectorAll("li");

    if (listItems.length === 0) return;

    gsap.to(listItems, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
      },
      stagger: 0.1,
      color: "black",
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: sectionRef, dependencies: [] });

  return (
    <>
      <section ref={sectionRef} className="my-8 flex flex-col gap-8" id="services">
        <p className="text-center text-electric font-light text-sm">Services</p>
        <ul className="font-extrabold text-[#d4d4d4] flex flex-col items-center text-3xl text-center gap-3 ">
          <li className="transition-colors">Content Strategy</li>
          <li className="transition-colors">Short-Form Video</li>
          <li className="transition-colors">Social Media Management</li>
          <li className="transition-colors">Paid Social & Ads</li>
          <li className="transition-colors">Brand Copywriting</li>
          <li className="transition-colors">
            Influencer & Creator Partnerships
          </li>
        </ul>
      </section>
    </>
  );
}
