import { motion } from 'framer-motion';
import { Linkedin, Users } from 'lucide-react';

const LinkedInSection = () => {
  return (
    <section id="linkedin" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">LinkedIn</p>
        <h2 className="text-3xl font-semibold text-white">Professional Network</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#070a16]/95 p-8 shadow-glow backdrop-blur-xl xl:grid-cols-[0.7fr_0.3fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-600 text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
              <Linkedin size={28} />
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-white">Connect on LinkedIn</h3>
              <p className="text-slate-300">Build a strong professional network and share career-ready achievements.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Interests</p>
              <p className="mt-3 text-slate-200">Software Engineering, Cyber Security, Full Stack Development.</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Social Proof</p>
              <p className="mt-3 text-slate-200">Showcases projects, contributions, and mission-driven learning.</p>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/manjunath-veshala-666741368" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            View LinkedIn Profile
            <Users size={18} />
          </a>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#0a1220]/95 p-6">
          <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-6 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">LinkedIn Summary</p>
            <p className="mt-5 text-slate-200">Aspiring Software Engineer and Cyber Security student with a strong focus on secure systems, performance, and polished UI/UX experiences.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LinkedInSection;
