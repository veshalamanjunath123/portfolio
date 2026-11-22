"use client";
import React, { useEffect, useState } from 'react'
const ico = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style: { marginRight: '0.4rem' } };
const SunIcon = () => <svg {...ico}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2m-7.07-15.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2m-13.66 5.66-1.41 1.41m14.14-14.14-1.41 1.41" /></svg>;
const MoonIcon = () => <svg {...ico}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
export default function ThemeButton() {
  const [theme, setTheme] = useState('light');
  useEffect(() => { setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'); }, []);
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  };
  const isDark = theme === 'dark';
  return (
    <button type="button" onClick={toggle} className="nav_btn_lg nav_btn_light flex items-center justify-center hover:bg-brblue py-6 cursor-pointer">
      {isDark ? <SunIcon /> : <MoonIcon />}{isDark ? 'LIGHT' : 'DARK'}
    </button>
  )
}
