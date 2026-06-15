import { motion } from 'framer-motion';

const milestones = [
  { title: 'Academic Projects', description: 'Designed course-based apps and security-focused tools to strengthen practical engineering skills.' },
  { title: 'Software Development Learning', description: 'Iterated through React, Node.js, REST APIs, and deployment best practices.' },
  { title: 'Cyber Security Learning Journey', description: 'Studied network defense, vulnerability analysis, and secure architecture design.' },
  { title: 'Technical Skill Development', description: 'Practiced algorithms, data structures, version control, and collaboration workflows.' },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Experience</p>
        <h2 className="text-3xl font-semibold text-white">Learning & Growth Timeline</h2>
      </motion.div>
      <div className="grid gap-6">
        {milestones.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: index * 0.08 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#060c18]/90 p-8 shadow-glow backdrop-blur-xl">
            <div className="absolute left-0 top-6 h-full w-1 rounded-full bg-cyan-400/20" />
            <div className="relative ml-8 space-y-3">
              <div className="flex items-center gap-3 text-cyan-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">{index + 1}</span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-slate-300 leading-7">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
