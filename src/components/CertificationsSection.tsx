import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';

const certifications = [
  { title: 'Cyber Security Fundamentals', issuer: 'Online Learning Program' },
  { title: 'Full Stack Development', issuer: 'Project-Based Learning' },
  { title: 'Secure Web Architecture', issuer: 'Industry Training' },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Certifications</p>
        <h2 className="text-3xl font-semibold text-white">Verified Learning</h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div key={cert.title} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="rounded-[2rem] border border-white/10 bg-[#070a16]/95 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Certificate</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{cert.title}</h3>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <BadgeCheck size={22} />
              </span>
            </div>
            <p className="mt-6 text-slate-300">Issued by {cert.issuer} with a secure, modern learning path.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <Award size={16} /> Verified
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
