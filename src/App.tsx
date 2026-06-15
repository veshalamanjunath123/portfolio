import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import GitHubSection from './components/GitHubSection';
import LinkedInSection from './components/LinkedInSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.2),_transparent_45%)] blur-3xl" />
      <Navbar />
      <AnimatePresence mode="wait">
        <main className="relative mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col gap-28 px-6 py-8 sm:px-10 lg:px-16">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <AchievementsSection />
          <GitHubSection />
          <LinkedInSection />
          <ContactSection />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
