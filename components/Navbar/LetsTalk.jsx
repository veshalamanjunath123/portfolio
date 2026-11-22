"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
export default function LetsTalk() {
  const [springs, api] = useSpring(() => ({ from: { x: 0 }, x: -10 }));
  const [op, opApi] = useSpring(() => ({ opacity: 1, x: 0 }));
  const [opR, opRApi] = useSpring(() => ({ opacity: 0, x: -10 }));
  return (
    <a href="#contact-section" aria-label="Contact Section" className="nav_btn_lg nav_btn_dark flex items-center justify-center hover:bg-brblue py-6"
      onMouseEnter={() => { api.start({ x: 20 }); opApi.start({ opacity: 0, x: 5 }); opRApi.start({ opacity: 1, x: 3 }); }}
      onMouseLeave={() => { api.start({ x: 0 }); opApi.start({ opacity: 1, x: 0 }); opRApi.start({ opacity: 0, x: -10 }); }}>
      <animated.span style={opR} className="opacity-0">➔</animated.span>
      <animated.span style={springs}>LET'S TALK &nbsp;</animated.span>
      <animated.span style={op}>&nbsp;•&nbsp;</animated.span>
    </a>
  );
}
