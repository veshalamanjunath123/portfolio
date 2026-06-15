import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
        <h2 className="text-3xl font-semibold text-white">Let&apos;s build something great</h2>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="rounded-[2rem] border border-white/10 bg-[#070a16]/95 p-8 shadow-glow backdrop-blur-xl">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-[#07101f]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-[#07101f]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell me about your project" className="w-full rounded-3xl border border-white/10 bg-[#07101f]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-[#070a16]/95 p-8 shadow-glow backdrop-blur-xl">
          <div className="space-y-5">
            <div className="flex items-center gap-4 rounded-3xl border border-cyan-400/10 bg-white/5 p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm text-cyan-300/80">Email</p>
                <p className="text-slate-200">veshalamanjunath123@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-cyan-400/10 bg-white/5 p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <Github size={20} />
              </span>
              <div>
                <p className="text-sm text-cyan-300/80">GitHub</p>
                <a href="https://github.com/veshalamanjunath123" className="text-slate-200 transition hover:text-cyan-300" target="_blank" rel="noreferrer">github.com/veshalamanjunath123</a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-cyan-400/10 bg-white/5 p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <Linkedin size={20} />
              </span>
              <div>
                <p className="text-sm text-cyan-300/80">LinkedIn</p>
                <a href="https://www.linkedin.com/in/manjunath-veshala-666741368" className="text-slate-200 transition hover:text-cyan-300" target="_blank" rel="noreferrer">linkedin.com/in/manjunath-veshala-666741368</a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-cyan-400/10 bg-white/5 p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm text-cyan-300/80">Location</p>
                <p className="text-slate-200">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
