import { motion } from 'framer-motion';

const skillGroups = [
  { title: 'Programming', items: ['Python', 'Java', 'JavaScript', 'C'], scores: [92, 90, 94, 97] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'React', 'Vue.js'], scores: [96, 95, 94, 92] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'JDBC'], scores: [94, 92, 90] },
  { title: 'Database', items: ['MySQL', 'MongoDB'], scores: [92, 90] },
  { title: 'Other Skills', items: ['Cyber Security', 'Computer Networks', 'Git', 'GitHub', 'Problem Solving', 'Data Structures'], scores: [92, 91, 93, 92, 94, 90] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Skills</p>
        <h2 className="text-3xl font-semibold text-white">Technical Expertise</h2>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-3xl border border-white/10 bg-[#060911]/90 p-6 shadow-glow backdrop-blur-xl">
            <h3 className="mb-5 text-xl font-semibold text-white">{group.title}</h3>
            <div className="space-y-4">
              {group.items.map((skill, idx) => {
                const score = group.scores?.[idx] ?? 90;
                return (
                  <div key={skill} className="rounded-3xl border border-cyan-400/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-200">
                      <span>{skill}</span>
                      <span>{score}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-900">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all" style={{ width: `${score}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
