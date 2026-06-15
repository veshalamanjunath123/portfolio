import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl px-6 pb-10 pt-4 text-slate-400 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-slate-300">Manjunath Veshala</p>
          <p>Designed for recruiters seeking premium, secure, and modern engineering portfolios.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#home" className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-white">
            Back to top
            <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com/veshalamanjunath123" target="_blank" rel="noreferrer" className="text-cyan-300 transition hover:text-white">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/manjunath-veshala-666741368" target="_blank" rel="noreferrer" className="text-cyan-300 transition hover:text-white">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
