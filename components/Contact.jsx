import { Mail, Phone, FileDown } from "lucide-react";
import { profile } from "../data/profile";
import { WhatsAppIcon, TelegramIcon, LinkedInIcon, GitHubIcon } from "./Icons";
const links = [
  { label: "EMAIL", href: `mailto:${profile.email}`, Icon: Mail, primary: true },
  { label: "CALL", href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "WHATSAPP", href: profile.whatsapp, Icon: WhatsAppIcon },
  { label: "TELEGRAM", href: profile.telegram, Icon: TelegramIcon },
  { label: "LINKEDIN", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "RESUME", href: profile.resume, Icon: FileDown, download: true },
  { label: "GITHUB", href: profile.github, Icon: GitHubIcon },
];
export default function Contact() {
  return (
    <section id="contact-section">
      <span id="ct-eyebrow">Open to full-stack &amp; Java backend roles</span>
      <h2 id="ct-headline">let's talk</h2>
      <a id="ct-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div id="ct-actions">
        {links.map(({ label, href, Icon, primary, download }) => (
          <a key={label} className={primary ? "ct-btn" : "ct-btn-secondary"} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} {...(download ? { download: "Manjunath_Veshala_Resume.pdf" } : {})}>
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    </section>
  );
}
