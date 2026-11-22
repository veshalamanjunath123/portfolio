import { Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";
import Logo from "./Logo";
import { WhatsAppIcon, TelegramIcon, LinkedInIcon, GitHubIcon } from "./Icons";
export default function Footer() {
  const ext = { target: "_blank", rel: "noreferrer" };
  const tel = `tel:${profile.phone.replace(/\s/g, "")}`;
  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo size={64} />
          <h2 className="f-logo">{profile.name}.</h2>
          <p className="f-desc">{profile.role} — Java, Spring Boot &amp; React. {profile.location}.</p>
          <div className="f-socials">
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size="45%" /></a>
            <a href={tel} aria-label="Call"><Phone size="45%" /></a>
            <a href={profile.whatsapp} {...ext} aria-label="WhatsApp"><WhatsAppIcon size="45%" /></a>
            <a href={profile.telegram} {...ext} aria-label="Telegram"><TelegramIcon size="45%" /></a>
            <a href={profile.linkedin} {...ext} aria-label="LinkedIn"><LinkedInIcon size="45%" /></a>
            <a href={profile.github} {...ext} aria-label="GitHub"><GitHubIcon size="45%" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="f-col"><h3>Navigate</h3><a href="#about">About</a><a href="#projects-section">Work</a><a href="#contact-section">Contact</a><a href={profile.resume} download="Manjunath_Veshala_Resume.pdf">Resume</a></div>
          <div className="f-col"><h3>Contact</h3>
            <a href={`mailto:${profile.email}`}>Email</a><a href={tel}>{profile.phone}</a>
            <a href={profile.whatsapp} {...ext}>WhatsApp</a><a href={profile.telegram} {...ext}>Telegram</a>
            <a href={profile.linkedin} {...ext}>LinkedIn</a><a href={profile.github} {...ext}>GitHub</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with Next.js, GSAP &amp; Lenis</span></div>
    </footer>
  );
}
