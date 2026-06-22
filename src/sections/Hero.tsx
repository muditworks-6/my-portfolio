import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../components/BrandIcons';
import { useTypewriter } from '../hooks/useTypewriter';
import { HERO_TAGLINES, HERO_VALUE_STATEMENT, RESUME_URL, SOCIAL_LINKS } from '../data';

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
  twitter: <TwitterXIcon size={18} />,
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  const typedText = useTypewriter(HERO_TAGLINES, 75, 40, 2000);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — introduction"
    >
      {/* ── Animated Background ── */}
      <div aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />
        {/* Subtle film grain noise */}
        <div className="hero-noise" />
        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--bg-base) 100%)',
          }}
        />
        {/* Bottom gradient blend into next section */}
        <div className="hero-bottom-blend" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 pt-24 pb-16 flex flex-col items-start md:items-center text-left md:text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl"
        >
          {/* Pre-label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 md:justify-center mb-5">
            <span className="inline-block w-8 h-px bg-cyan opacity-70" />
            <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-4"
          >
            <span className="gradient-text-hero">Mudit Bhuraria</span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            variants={itemVariants}
            className="text-[clamp(1.125rem,3vw,1.5rem)] font-semibold text-[var(--text-secondary)] mb-5 min-h-[2em] flex items-center md:justify-center gap-1"
            aria-live="polite"
            aria-label={`Currently showing: ${typedText}`}
          >
            <span className="font-mono">&gt;</span>
            <span className="ml-1">{typedText}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </motion.div>

          {/* Value statement */}
          <motion.p
            variants={itemVariants}
            className="text-[clamp(1rem,2vw,1.125rem)] text-[var(--text-secondary)] max-w-xl md:mx-auto leading-relaxed mb-10"
          >
            {HERO_VALUE_STATEMENT}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 md:justify-center mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              View Projects
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </button>

            <a
              href={RESUME_URL}
              download
              className="btn-secondary"
              aria-label="Download resume PDF"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:justify-center"
          >
            <span className="font-mono text-xs text-[var(--text-muted)]">find me on</span>
            <span className="w-8 h-px bg-[var(--bg-border)]" />
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.icon !== 'mail' ? '_blank' : undefined}
                rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-cyan border border-transparent hover:border-[rgba(0,240,255,0.3)] transition-all duration-200"
                style={{ background: 'var(--bg-elevated)' }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {ICON_MAP[link.icon]}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-cyan transition-colors duration-200 bg-transparent border-0 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
