"use client";
import { useMemo, memo } from 'react';
import './GradualBlur.css';
const DEFAULTS = { position:'bottom', strength:2, height:'6rem', divCount:5, zIndex:1000, opacity:1, curve:'linear' };
const CURVES = { linear:p=>p, bezier:p=>p*p*(3-2*p) };
function GradualBlur(props) {
  const { position, strength, height, divCount, zIndex, opacity, curve } = { ...DEFAULTS, ...props };
  const divs = useMemo(() => {
    const out = [], inc = 100 / divCount, f = CURVES[curve] || CURVES.linear;
    const dir = { top:'to top', bottom:'to bottom', left:'to left', right:'to right' }[position] || 'to bottom';
    const r = (n) => Math.round(n * 10) / 10;
    for (let i = 1; i <= divCount; i++) {
      const blur = 0.0625 * (f(i / divCount) * divCount + 1) * strength;
      const [p1,p2,p3,p4] = [inc*i-inc, inc*i, inc*i+inc, inc*i+2*inc].map(r);
      let g = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) g += `, black ${p3}%`;
      if (p4 <= 100) g += `, transparent ${p4}%`;
      const mask = `linear-gradient(${dir}, ${g})`;
      out.push(<div key={i} style={{ position:'absolute', inset:0, maskImage:mask, WebkitMaskImage:mask,
        backdropFilter:`blur(${blur.toFixed(3)}rem)`, WebkitBackdropFilter:`blur(${blur.toFixed(3)}rem)`, opacity }} />);
    }
    return out;
  }, [position, strength, divCount, opacity, curve]);
  return (
    <div className="gradual-blur" style={{ position:'absolute', pointerEvents:'none', height, width:'100%',
      bottom: position==='bottom' ? 0 : undefined, top: position==='top' ? 0 : undefined, zIndex }}>
      <div className="gradual-blur-inner">{divs}</div>
    </div>
  );
}
export default memo(GradualBlur);
