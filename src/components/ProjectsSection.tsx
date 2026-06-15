import { motion } from 'framer-motion';
import { ExternalLink, Folder, Github, Zap } from 'lucide-react';

const projects = [
  {
    title: 'AirCanvas',
    description: 'Hand gesture-based virtual drawing application developed using Python and OpenCV that enables users to draw in the air without physically touching the screen.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/veshalamanjunath123',
    image: '',
  },
  {
    title: 'ShowZo',
    description: 'Modern movie ticket booking platform inspired by BookMyShow featuring movie listings, responsive UI, and booking functionalities.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/veshalamanjunath123',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Book A Mechanic',
    description: 'Java and JDBC-based application that allows users to find, connect with, and book mechanics efficiently.',
    tags: ['Java', 'JDBC', 'MySQL'],
    github: 'https://github.com/veshalamanjunath123',
    image: 'https://images.unsplash.com/photo-1519648023493-d82b5f8d7b4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Network Traffic Analyzer',
    description: 'Network monitoring and packet analysis tool built for cybersecurity and performance monitoring purposes. Captures and analyzes network traffic data.',
    tags: ['Python', 'Networking', 'Cyber Security'],
    github: 'https://github.com/veshalamanjunath123/network-traffic-analyzer',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="space-y-8" aria-label="Featured Work">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Projects</p>
        <h2 className="text-3xl font-semibold text-white">Featured Work</h2>
      </motion.div>
      <div className="grid gap-8 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 140 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#070a16]/90 shadow-glow backdrop-blur-xl">
            <div className="space-y-5 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Folder size={20} />
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition hover:bg-cyan-400/10">
                  <Github size={18} />
                </a>
              </div>
              <p className="text-slate-300 leading-7">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1">
                  View Code
                  <ExternalLink size={16} />
                </a>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/10">
                  <Zap size={16} /> Quick Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
