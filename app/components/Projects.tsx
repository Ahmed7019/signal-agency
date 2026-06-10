"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: "hive",
    tag: "Social Growth",
    client: "Hive Apparel Co.",
    services: "Content Strategy · Short-Form Video · Paid Social Amplification",
    headline: "A DTC fashion brand went from invisible to impossible to ignore — and sold out their entire launch collection in 72 hours.",
    metrics: [
      { value: "280K", label: "Followers (up from 12K)" },
      { value: "14M", label: "Organic video views" },
      { value: "4.2x", label: "ROAS on paid social" },
      { value: "72h", label: "Sellout on launch day" }
    ]
  },
  {
    slug: "noor",
    tag: "Healthcare · Paid Ads",
    client: "Noor Clinic",
    services: "Brand Messaging · Ad Creative · Paid Social Management",
    headline: "A medical aesthetics clinic tripled their monthly bookings — using the exact same ad budget. The only thing that changed was what the ads said.",
    metrics: [
      { value: "3x", label: "Monthly appointment bookings" },
      { value: "-58%", label: "Reduction in cost per lead" },
      { value: "+41%", label: "Increase in returning clients" },
      { value: "Top 3", label: "Local search in 90 days" }
    ]
  },
  {
    slug: "volta",
    tag: "B2B · Lead Generation",
    client: "Volta",
    services: "LinkedIn Strategy · Thought Leadership Content · Paid Lead Generation",
    headline: "A B2B SaaS company with no content presence generated 22 qualified enterprise leads and $180K in new pipeline — through content alone.",
    metrics: [
      { value: "22", label: "Qualified enterprise leads" },
      { value: "6", label: "Pilot deals closed" },
      { value: "$180K", label: "Pipeline generated" },
      { value: "14K", label: "LinkedIn followers" }
    ]
  }
];

export default function Project() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".project-header > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate project cards
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 flex flex-col gap-12 border-t border-neutral-100" id="work">
      <div className="project-header max-w-[75ch] flex flex-col gap-4">
        <p className="text-electric font-semibold uppercase tracking-widest text-xs font-mono">Our Work</p>
        <h2 className="text-4xl font-bold font-syne text-primary tracking-tight">
          Results we&#39;re proud to put our name on.
        </h2>
        <p className="text-muted text-sm font-light leading-relaxed">
          Every case study below is a real brand, a real challenge, and a real outcome. We don&#39;t round numbers, cherry-pick metrics, or leave out the parts that were hard. This is what working with SIGNAL actually looks like.
        </p>
      </div>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className="project-card group flex flex-col justify-between h-full bg-[#FAF9F6] border border-[#E2DDD6] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(232,80,26,0.08)]"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold bg-electric/10 text-electric px-3 py-1 rounded-full">
                  {project.tag}
                </span>
                <span className="text-xs text-muted/60 font-mono">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold font-syne text-primary mb-1 tracking-tight group-hover:text-electric transition-colors">
                {project.client}
              </h3>
              <p className="text-[11px] text-muted/70 font-mono tracking-wide mb-6 uppercase">
                {project.services}
              </p>
              
              <p className="text-sm font-light text-muted leading-relaxed mb-8">
                {project.headline}
              </p>
            </div>
            
            <div>
              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-200/60 mb-8">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl font-bold font-syne text-electric tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-muted font-mono leading-tight mt-1">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${project.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase font-mono text-primary group-hover:text-electric transition-colors cursor-pointer"
              >
                Read the full story
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
