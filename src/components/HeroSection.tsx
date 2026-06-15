import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Software Engineer', 'Cyber Security Enthusiast', 'Full Stack Developer', 'Problem Solver'];

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080b17]/80 p-6 shadow-glow backdrop-blur-xl sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_25%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              Hello, I am
              <strong className="text-slate-100">Manjunath Veshala</strong>
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Premium digital experiences with secure, scalable, and elegant web solutions.
            </h1>
            <div className="space-y-4 rounded-3xl border border-cyan-400/15 bg-white/5 p-5 text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Role</p>
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-100">
                {roles.map((role) => (
                  <span key={role} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <p className="max-w-xl text-slate-300">Aspiring Software Engineer and Cyber Security student passionate about building secure, scalable, and user-friendly applications.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-xl">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-300">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
              <Download size={18} /> Download Resume
            </a>
            <a href="mailto:veshalamanjunath123@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
              <Mail size={18} /> Contact Me
            </a>
            <div className="inline-flex items-center gap-3">
              <a href="https://github.com/veshalamanjunath123" target="_blank" rel="noreferrer" className="rounded-full bg-white/5 p-3 text-cyan-300 transition hover:bg-cyan-400/10">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/manjunath-veshala-666741368" target="_blank" rel="noreferrer" className="rounded-full bg-white/5 p-3 text-cyan-300 transition hover:bg-cyan-400/10">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex max-w-md items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.16),_transparent_48%)] blur-2xl" />
          <div className="relative z-10 rounded-[2rem] border border-cyan-400/25 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="relative mx-auto h-[360px] w-[360px] overflow-hidden rounded-full border border-white/10 bg-[#09111f]/70 p-2 shadow-glow">
              <div className="absolute inset-0 rounded-full border border-cyan-300/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_30%)]" />
              <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.95),_rgba(10,14,24,0.88))]">
                <div className="absolute inset-0 rounded-full border border-white/5" />
                <div className="absolute inset-x-12 top-12 h-10 rounded-full bg-white/5 blur-xl" />
                <div className="absolute inset-x-8 bottom-12 h-24 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="absolute inset-5 rounded-full border border-cyan-300/10 bg-white/5/80 shadow-inner" />
                <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
                  <img
                    src="/profile.jpg"
                    alt="Manjunath Veshala portrait"
                    className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
                  />
                </div>
                <div className="absolute inset-0 animate-[float_6s_ease-in-out_infinite] rounded-full border border-cyan-300/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
