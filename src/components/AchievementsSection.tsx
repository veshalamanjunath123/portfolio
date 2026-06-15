import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 24 },
  { label: 'Technologies Learned', value: 18 },
  { label: 'GitHub Repositories', value: 12 },
  { label: 'Coding Hours', value: 980 },
  { label: 'Certifications', value: 6 },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Achievements</p>
        <h2 className="text-3xl font-semibold text-white">Impact Metrics</h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.05 }} className="rounded-[2rem] border border-white/10 bg-[#070b17]/95 px-6 py-8 text-center shadow-glow backdrop-blur-xl">
            <p className="text-4xl font-semibold text-cyan-300">{stat.value}+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
