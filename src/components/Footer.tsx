import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './BrandIcons';

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/muditbhuraria', icon: <GithubIcon size={18} /> }, // TODO: replace
  { label: 'LinkedIn', href: 'https://linkedin.com/in/muditbhuraria', icon: <LinkedinIcon size={18} /> }, // TODO: replace
  { label: 'Twitter', href: 'https://twitter.com/muditbhuraria', icon: <TwitterXIcon size={18} /> }, // TODO: replace
  { label: 'Email', href: 'mailto:mudit@example.com', icon: <Mail size={18} /> }, // TODO: replace
];


export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--bg-border)] relative" role="contentinfo">
      {/* Glow divider */}
      <div className="glow-divider" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + credit */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="font-mono text-base font-semibold text-[var(--text-secondary)] hover:text-cyan transition-colors duration-200 no-underline"
              aria-label="Mudit Bhuraria — scroll to top"
            >
              &lt;mudit<span className="text-violet">.</span>dev /&gt;
            </a>
            <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
              © {year} Mudit Bhuraria · Built with React + TypeScript + Vite
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2" role="list" aria-label="Social links">
            {SOCIAL.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-cyan border border-transparent hover:border-[rgba(0,240,255,0.25)] transition-all duration-200 no-underline"
                style={{ background: 'var(--bg-elevated)' }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                role="listitem"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-cyan transition-colors duration-200 bg-transparent border-0 cursor-pointer group"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            Back to top
            <span
              className="w-7 h-7 rounded-full border border-[var(--bg-border)] group-hover:border-[rgba(0,240,255,0.4)] flex items-center justify-center transition-all duration-200"
              style={{ background: 'var(--bg-elevated)' }}
              aria-hidden="true"
            >
              <ArrowUp size={14} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
