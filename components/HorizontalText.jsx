"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WORDS = ["java", "spring boot", "react", "secure by design"];
export default function HorizontalText() {
  const root = useRef(null), track = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const dist = () => track.current.scrollWidth - window.innerWidth;
      gsap.to(track.current, { x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: () => "+=" + dist(), scrub: 1, pin: true, invalidateOnRefresh: true } });
      gsap.from(".hs-char", { yPercent: 40, opacity: 0.2, stagger: 0.02, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 80%", end: "top top", scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section className="Horizontal" ref={root}>
      <div className="hs-sticky">
        <div className="Horizontal__text" ref={track}>
          {WORDS.map((w) => (<h2 key={w} className="heading-xl">{[...w].map((c, i) => <span key={i} className="hs-char">{c === " " ? "\u00A0" : c}</span>)}</h2>))}
        </div>
      </div>
    </section>
  );
}
