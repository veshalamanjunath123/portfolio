"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import GradualBlur from "./GradualBlur/GradualBlur";
import { profile } from "../data/profile";
import Logo from "./Logo";
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
export default function HeroSection() {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const loaderRef = useRef(null);
  const [loaderDone, setLoaderDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentText, setCurrentText] = useState("మంజునాథ్ పోర్ట్‌ఫోలియో");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.set(videoContainerRef.current, { autoAlpha: 0, scale: 1.05 });
    const tl = gsap.timeline({ onComplete: () => { setLoaderDone(true); document.body.style.overflow = ""; } });
    tl.to(loaderRef.current, { y: "-100%", duration: 1.1, ease: "power3.out" }, 3.0);
    tl.to(videoContainerRef.current, { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" }, 3.2);
    const t1 = setTimeout(() => setCurrentText("मंजुनाथ पोर्टफोलियो"), 1000);
    const t2 = setTimeout(() => setCurrentText("MANJUNATH PORTFOLIO"), 2000);
    return () => { tl.kill(); clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = ""; };
  }, []);
  useEffect(() => { // autoplay muted once visible
    const v = videoRef.current;
    if (v) { v.muted = true; v.play().then(() => setIsPlaying(true)).catch(() => {}); }
  }, []);
  const toWork = (e) => {
    e.preventDefault();
    const target = document.getElementById("about");
    window.__lenis ? window.__lenis.scrollTo(target, { duration: 1.4 }) : target?.scrollIntoView({ behavior: "smooth" });
  };
  const toggleSound = () => {
    const v = videoRef.current; if (!v) return;
    const next = !v.muted;
    v.muted = next; v.volume = 1; setIsMuted(next);
    if (!next && v.paused) v.play().then(() => setIsPlaying(true)).catch(console.log);
  };
  const togglePlay = () => {
    const v = videoRef.current; if (!v) return;
    if (isPlaying) { v.pause(); setIsPlaying(false); }
    else { v.play().then(() => setIsPlaying(true)).catch(console.log); }
  };
  return (
    <>
      <div id="loader" ref={loaderRef} style={{ backgroundColor: "#111", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center px-4">
          <Logo size={96} fill="#F9F8FF" ink="#111111" className="mb-6" />
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <motion.div key={currentText} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-[#F5F1EA] text-2xl sm:text-4xl font-extrabold tracking-widest uppercase">{currentText}</motion.div>
          </div>
        </motion.div>
      </div>
      <section id="hero-section" className="relative w-full h-screen min-h-[600px] overflow-hidden select-none">
        <div ref={videoContainerRef} className="absolute inset-0 w-full h-full bg-black">
          <video ref={videoRef} src="/hero-bg-video.mp4" loop playsInline muted preload="auto" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <motion.div initial="hidden" animate={loaderDone ? "visible" : "hidden"}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-20 z-10 max-w-[520px] text-white">
          <motion.span variants={item} className="block text-xs font-semibold tracking-[0.22em] text-white/80 uppercase mb-2">HELLO, I'M MANJUNATH</motion.span>
          <motion.div variants={item} className="w-12 h-[1.5px] bg-white/30 mb-6" />
          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black uppercase leading-[1.05] tracking-tight mb-6">
            FULL STACK <br />DEVELOPER <br /><span className="text-white/65 font-bold">JAVA · SPRING · REACT</span>
          </motion.h1>
          <motion.p variants={item} className="text-xs sm:text-sm text-white/75 leading-relaxed mb-8 max-w-[40ch]">{profile.tagline}</motion.p>
          <motion.div variants={item} className="flex items-center gap-5">
            <a href="#about" onClick={toWork} className="px-6 py-3 bg-white text-black rounded-full text-xs font-semibold flex items-center gap-2"><span>View My Work</span><span>↗</span></a>
            <a href={profile.resume} download="Manjunath_Veshala_Resume.pdf" className="px-5 py-3 border border-white/40 text-white rounded-full text-xs font-semibold">RESUME ↓</a>
            <button onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"} className="px-5 py-3 border border-white/40 text-white rounded-full text-xs font-semibold cursor-pointer">{isPlaying ? "❚❚ PAUSE" : "▶ PLAY"}</button>
            <button onClick={toggleSound} aria-label={isMuted ? "Turn sound on" : "Turn sound off"} className="px-5 py-3 border border-white/40 text-white rounded-full text-xs font-semibold cursor-pointer">{isMuted ? "🔇 SOUND OFF" : "🔊 SOUND ON"}</button>
          </motion.div>
        </motion.div>
        <GradualBlur position="bottom" height="7rem" strength={2} divCount={6} curve="bezier" />
      </section>
    </>
  );
}
