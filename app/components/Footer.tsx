"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!footerRef.current) return;

    const footerChildren = footerRef.current.querySelectorAll(".footer-content > *");

    if (footerChildren.length === 0) return;

    gsap.from(footerChildren, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: footerRef, dependencies: [] });

  return (
    <footer
      ref={footerRef}
      className="border-t border-neutral-200 pt-20 pb-8 mt-32"
    >
      <div className="footer-content flex flex-col gap-16">
        {/* Top Section - Newsletter + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-syne font-bold tracking-tight text-primary">
                Stay in the loop
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed max-w-md">
                Weekly insights on content strategy, platform updates, and case studies that actually move the needle.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-[#E2DDD6] rounded-lg bg-white focus:outline-none focus:border-electric transition-colors text-sm font-mono"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-electric text-white rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#c23e0e] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest font-mono font-semibold text-electric">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Content Strategy",
                  "Short-Form Video",
                  "Social Media",
                  "Paid Ads",
                  "Brand Copywriting",
                  "Influencer Partnerships"
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#services"
                      className="text-sm text-muted hover:text-electric transition-colors font-light"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest font-mono font-semibold text-electric">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "About", href: "/about" },
                  { label: "Work", href: "#work" },
                  { label: "Process", href: "/process" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-electric transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest font-mono font-semibold text-electric">
                Connect
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "Twitter", href: "https://twitter.com" },
                  { label: "YouTube", href: "https://youtube.com" },
                  { label: "TikTok", href: "https://tiktok.com" }
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-electric transition-colors font-light inline-flex items-center gap-2"
                    >
                      {social.label}
                      <span className="text-xs opacity-50">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section - Logo + Tagline */}
        <div className="flex flex-col items-center gap-4 py-12 border-y border-neutral-200">
          <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight text-primary">
            SIGNAL
          </h2>
          <p className="text-sm md:text-base font-mono text-muted">
            Content that moves markets
          </p>
        </div>

        {/* Bottom Section - Legal + Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-muted/60">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            <Link href="/privacy" className="hover:text-electric transition-colors font-mono">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-electric transition-colors font-mono">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-electric transition-colors font-mono">
              Cookie Policy
            </Link>
          </div>

          <p className="font-mono">
            © {new Date().getFullYear()} Signal Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
