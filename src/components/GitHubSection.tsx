import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';

const repoList = [
  { name: 'AirCanvas', url: 'https://github.com/veshalamanjunath123' },
  { name: 'ShowZo', url: 'https://github.com/veshalamanjunath123' },
  { name: 'Book A Mechanic', url: 'https://github.com/veshalamanjunath123' },
  { name: 'Network Traffic Analyzer', url: 'https://github.com/veshalamanjunath123/network-traffic-analyzer' },
];

const GitHubSection = () => {
  return (
    <section id="github" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">GitHub</p>
        <h2 className="text-3xl font-semibold text-white">Code Portfolio</h2>
      </motion.div>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_0.5fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="rounded-[2rem] border border-white/10 bg-[#070a16]/95 p-8 shadow-glow backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">GitHub Profile</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">veshalamanjunath123</h3>
            </div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
              <Github size={28} />
            </div>
          </div>
          <p className="mt-6 text-slate-300 leading-7">Explore repositories, open-source experiments, and security-focused tooling designed for reliability and scalability.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-4 text-center">
              <p className="text-2xl font-semibold text-cyan-300">120+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">Commits</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-4 text-center">
              <p className="text-2xl font-semibold text-cyan-300">35</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">Followers</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-4 text-center">
              <p className="text-2xl font-semibold text-cyan-300">48</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">Stars</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="space-y-4 rounded-[2rem] border border-white/10 bg-[#080c19]/90 p-6 shadow-glow backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Recent Repositories</h3>
          <div className="space-y-3">
            {repoList.map((repo) => (
              <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-cyan-300/40 hover:bg-cyan-400/10">
                <span>{repo.name}</span>
                <Star size={18} className="text-cyan-300" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
