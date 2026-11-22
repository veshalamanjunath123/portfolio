import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
export default function Projects() {
  return (
    <section id="projects-section">
      <div className="pj-head"><span className="pj-label">Selected Work</span><h2 className="pj-title">projects</h2></div>
      <ul className="pj-list">
        {profile.projects.map((p, i) => (
          <li key={p.name} className="pj-row">
            <a className="pj-link" href={p.href} target="_blank" rel="noreferrer">
              <span className="pj-num">0{i + 1}</span>
              <div className="pj-meta"><span className="pj-name">{p.name}</span><span className="pj-role">{p.role}</span><span className="pj-note">{p.note}</span></div>
              <span className="pj-kind">{p.kind}</span>
              <span className="pj-arrow"><ArrowUpRight size="100%" strokeWidth={1.5} /></span>
            </a>
            {p.links && (
              <div className="pj-extra">
                {p.links.map((l) => (<a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.icon} {l.label} ↗</a>))}
              </div>
            )}
          </li>))}
      </ul>
    </section>
  );
}
