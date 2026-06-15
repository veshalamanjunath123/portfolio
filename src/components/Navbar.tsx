import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="sticky top-0 z-30 mx-auto flex w-full max-w-screen-2xl items-center justify-between rounded-full border border-white/10 bg-[#02030a]/80 px-5 py-3 backdrop-blur-xl shadow-glow"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.2)]">
          MV
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-300/80">Portfolio</p>
          <p className="text-sm text-slate-300">Manjunath Veshala</p>
        </div>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
            {link.name}
          </a>
        ))}
      </div>
      <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300">
        Contact Me
        <ArrowRight size={16} />
      </a>
    </motion.nav>
  );
};

export default Navbar;
