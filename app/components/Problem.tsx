import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Problem() {
  useGSAP(() => {
    const tl = gsap.timeline();

    const paraText = SplitText.create("#para", {
      type: "words,chars",
    });
    tl.from("#leader", {
      scrollTrigger: {
        trigger: "#problem",
        end: "bottom top",
        scrub: true,
      },
      y: 50,
      autoAlpha: 0,
    });

    tl.to(paraText.chars, {
      scrollTrigger: {
        trigger: "#problem",
        start: "-=100",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
      stagger: 1,
      color: "black",
      autoAlpha: 1,
    });

    return () => {
      ScrollTrigger?.killAll();
      paraText.revert();
    };
  }, []);
  return (
    <>
      <section className="flex flex-col items-center gap-4" id="problem">
        <p className="text-center font-light text-muted text-sm" id="leader">
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
