import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useGSAP(() => {
    const tl = gsap.timeline();
    const li = document.querySelectorAll("li");
    tl.to(li, {
      scrollTrigger: {
        trigger: "#services",
        start: "-=50",
        scrub: 1,
        pin: true,
        markers: true,
      },
      stagger: 0.1,
      color: "black",
    });
  }, []);
  return (
    <>
      <section className="my-8 flex flex-col gap-8" id="services">
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
