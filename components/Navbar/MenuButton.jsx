"use client";
import React, { useRef, useState } from "react";
import { a, useSpring } from "@react-spring/web";
import Menu from "./Menu";
export default function MenuButton() {
  const [isOpen, open] = useState(false);
  const offset = 10;
  const [dots, dotsApi] = useSpring(() => ({ from: { transform: "rotate(0deg)" } }));
  const [menu, menuApi] = useSpring(() => ({ from: { y: offset, opacity: 1 } }));
  const [close, closeApi] = useSpring(() => ({ from: { y: offset, opacity: 0 } }));
  const ref = useRef();
  const animate = (opening) => {
    menuApi.stop(); closeApi.stop();
    menuApi.start({ y: opening ? -offset : offset, opacity: opening ? 0 : 1 });
    closeApi.start({ y: opening ? -offset : offset, opacity: opening ? 1 : 0 });
  };
  const closeMenu = () => { if (!isOpen) return; open(false); dotsApi.start({ transform: "rotate(0deg)" }); animate(false); };
  const outside = (e) => { if (ref.current && !ref.current.contains(e.target)) closeMenu(); };
  return (
    <>
      <Menu open={isOpen} onOutsideClick={outside} onClose={closeMenu} />
      <div ref={ref} className={`nav_btn_lg py-6 flex items-center justify-center cursor-pointer transition-colors ${isOpen ? "bg-bg-alt" : "bg-brgray hover:bg-bg-alt"}`}
        onMouseEnter={() => !isOpen && dotsApi.start({ transform: "rotate(90deg)" })}
        onMouseLeave={() => !isOpen && dotsApi.start({ transform: "rotate(0deg)" })}
        onClick={() => { animate(!isOpen); open(!isOpen); }}>
        <div className="flex flex-col h-6 items-center justify-center">
          <a.div style={menu}>MENU&nbsp;&nbsp;</a.div><a.div style={close}>CLOSE&nbsp;&nbsp;</a.div>
        </div>
        <a.div style={dots}>•&nbsp;•</a.div>
      </div>
    </>
  );
}
