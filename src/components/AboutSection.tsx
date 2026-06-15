import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

const timeline = [
  {
    year: '2022',
    title: 'Cyber Security Student',
    description: 'Built foundational security knowledge while learning network protocols, penetration testing, and secure coding practices.',
  },
  {
    year: '2023',
    title: 'Software Development Journey',
    description: 'Developed full stack applications with React, Node.js, and database integrations to support real-world workflows.',
  },
  {
    year: '2024',
    title: 'Project-Based Portfolio',
    description: 'Created practical apps for computer vision, booking systems, and network monitoring with a security-first mindset.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">About Me</p>
        <h2 className="text-3xl font-semibold text-white">Professional Summary</h2>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="space-y-6 rounded-3xl border border-white/10 bg-[#080c19]/80 p-8 shadow-glow backdrop-blur-xl">
          <p className="text-slate-300 leading-8">
            Motivated Computer Science (Cyber Security) student with strong foundations in software development, web technologies, cybersecurity concepts, and problem-solving. Passionate about learning new technologies and building impactful software solutions.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-5">
              <h3 className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">Education</h3>
              <p className="text-slate-200">Bachelor of Engineering (B.E.)</p>
              <p className="text-slate-400">Computer Science and Engineering (Cyber Security)</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-5">
              <h3 className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">Career Objective</h3>
              <p className="text-slate-200">Seeking internship and entry-level software engineering opportunities to apply technical skills, gain practical experience, and contribute to innovative projects.</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.15 }} className="space-y-5 rounded-3xl border border-white/10 bg-[#070a16]/80 p-6 shadow-glow backdrop-blur-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-3xl border border-cyan-400/20 bg-[#0b1729]/80 p-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <GraduationCap size={22} />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Academic Focus</p>
                <p className="text-slate-200">Computer Science & Cyber Security</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-cyan-400/20 bg-[#0b1729]/80 p-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <Sparkles size={22} />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Problem Solving</p>
                <p className="text-slate-200">Structured, analytical approach to technical challenges.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-cyan-400/20 bg-[#0b1729]/80 p-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-500/10 text-slate-200">
                <BookOpen size={22} />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Learning Mindset</p>
                <p className="text-slate-200">Always iterating with projects, certifications, and practice.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 border-t border-white/10 pt-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-6 text-slate-300 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-cyan-400">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.year}</p>
                <h4 className="mt-1 text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
