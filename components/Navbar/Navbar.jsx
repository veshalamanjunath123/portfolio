"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { Trail } from "./TrailText";
import LetsTalk from "./LetsTalk";
import MenuButton from "./MenuButton";
import ThemeButton from "./MusicButton";
import { profile } from "../../data/profile";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon, TelegramIcon, LinkedInIcon, GitHubIcon } from "../Icons";
import Logo from "../Logo";
const ITEMS = [
  { label: "HOME", target: "top" }, { label: "ABOUT", target: "about" },
  { label: "WORK", target: "projects-section" }, { label: "CONTACT", target: "contact-section" },
];
export default function Navbar() {
  const [rotate, setRotate] = useSpring(() => ({ transform: "rotate(0deg)" }));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, set] = useState(false);
  useEffect(() => { set(true); }, []);
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  const closeMobile = () => { setMobileOpen(false); setRotate({ transform: "rotate(0deg)" }); };
  const handleMobileNav = (e, target) => {
    e.preventDefault(); closeMobile();
    const section = target === "top" ? 0 : document.getElementById(target);
    setTimeout(() => {
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(section, { duration: 1.4 });
      else if (section === 0) window.scrollTo({ top: 0, behavior: "smooth" });
      else section?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };
  const pill = "flex items-center justify-between rounded-full px-5 py-4 text-sm font-semibold";
  return (
    <>
      <div className="fixed top-0 left-0 z-[100001] w-full py-5 lg:hidden px-5">
        <div className="flex items-center justify-between w-full font-extrabold">
          <Link href="/" onClick={(e) => handleMobileNav(e, "top")} className="flex items-center gap-2.5 cursor-pointer">
            <Logo size={32} />
            <span className="tracking-wider font-semibold text-lg text-fg">{profile.short}</span>
          </Link>
          <button aria-label={mobileOpen ? "Close menu" : "Open menu"} className="nav_btn_sm flex items-center justify-center cursor-pointer"
            onClick={() => { const n = !mobileOpen; setMobileOpen(n); setRotate({ transform: n ? "rotate(45deg)" : "rotate(0deg)" }); }}>
            <animated.div className="text-[0.55rem] leading-none" style={rotate}>{mobileOpen ? "✕" : "⬤ ⬤"}</animated.div>
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 z-[100000] lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-bg" onClick={closeMobile} />
        <div className="relative z-10 h-full w-full flex flex-col pt-24 pb-8 px-6">
          <nav className="flex flex-col gap-1">
            {ITEMS.map((it, i) => (
              <a key={it.target} href={`#${it.target}`} onClick={(e) => handleMobileNav(e, it.target)} className="flex items-center justify-between py-4 border-b border-theme-border text-fg text-3xl font-semibold">
                <span>{it.label}</span><span className="text-fg-muted text-base">0{i + 1}</span>
              </a>))}
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-3">
            <p className="text-fg-muted text-xs tracking-[0.2em] uppercase">Get in touch</p>
            {[[`mailto:${profile.email}`, "EMAIL", Mail, true], [`tel:${profile.phone.replace(/\s/g, "")}`, "CALL", Phone, false], [profile.whatsapp, "WHATSAPP", WhatsAppIcon, false], [profile.telegram, "TELEGRAM", TelegramIcon, false], [profile.linkedin, "LINKEDIN", LinkedInIcon, false], [profile.github, "GITHUB", GitHubIcon, false]].map(([href, label, Icon, primary]) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" onClick={closeMobile} className={`${pill} ${primary ? "bg-fg text-bg" : "border-2 border-fg text-fg"}`}>
                <span className="flex items-center gap-3"><Icon size={18} />{label}</span><span>↗</span>
              </a>))}
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full px-6 lg:px-20 z-[100001] hidden lg:block">
        <div className="items-start justify-between flex pt-14 pb-10">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={40} />
            <span className="font-AeonikMedium text-2xl tracking-wider text-fg uppercase">{profile.short}.</span>
          </Link>
          <div className="hidden lg:flex items-center justify-around font-AeonikMedium">
            <Trail open={open} className="flex"><ThemeButton /><LetsTalk /><MenuButton /></Trail>
          </div>
        </div>
      </div>
    </>
  );
}
