import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollY } from '../hooks/useScrollY';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_ITEMS } from '../data';

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const activeSection = useActiveSection(SECTION_IDS);
  const isScrolled = scrollY > 60;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-[1280px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-mono text-lg font-semibold tracking-tight flex items-center gap-1 no-underline group"
            aria-label="Mudit Bhuraria — scroll to top"
          >
            <span className="text-cyan group-hover:text-white transition-colors duration-200">&lt;</span>
            <span className="text-[var(--text-primary)] group-hover:text-cyan transition-colors duration-200">mudit</span>
            <span className="text-[var(--violet)]">.</span>
            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200">dev</span>
            <span className="text-cyan group-hover:text-white transition-colors duration-200"> /&gt;</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0" role="list">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer bg-transparent border-0
                      ${isActive
                        ? 'text-cyan'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)' }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-cyan transition-colors duration-200 bg-transparent border-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[var(--bg-surface)] border-l border-[var(--bg-border)] flex flex-col md:hidden"
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-[var(--bg-border)]">
                <span className="font-mono text-sm text-cyan">navigation</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[var(--text-secondary)] hover:text-white transition-colors bg-transparent border-0 cursor-pointer rounded-lg"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 cursor-pointer bg-transparent border-0
                        ${isActive
                          ? 'text-cyan bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.2)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                        }`}
                    >
                      <span className="font-mono text-xs text-[var(--text-muted)] mr-2">0{i + 1}.</span>
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-auto p-6 border-t border-[var(--bg-border)]">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full justify-center"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
