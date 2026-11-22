export default function Logo({ size = 40, fill, ink, className = "" }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="Manjunath Veshala logo">
      <circle cx="50" cy="50" r="48" style={{ fill: fill || "var(--color-text)" }} />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="40" letterSpacing="-2"
        style={{ fill: ink || "var(--color-bg)" }}>MV</text>
    </svg>
  );
}
