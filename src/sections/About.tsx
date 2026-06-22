import { motion } from 'framer-motion';
import { ABOUT_BIO, ABOUT_STATS } from '../data';
import StatCard from '../components/StatCard';

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};


export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="section-container">
        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">
            About <span className="gradient-text-cyan">Me</span>
          </h2>
        </motion.div>

        <div className="glow-divider mb-12" />

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Photo placeholder ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow rings */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-30 blur-xl"
                style={{ background: 'linear-gradient(135deg, var(--cyan), var(--violet))' }}
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1 rounded-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, var(--cyan), var(--violet))', border: '1px solid rgba(0,240,255,0.3)' }}
                aria-hidden="true"
              />

              {/* Photo frame */}
              <div
                className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-[rgba(0,240,255,0.25)]"
                style={{ background: 'var(--bg-elevated)' }}
              >
                {/* ── PLACEHOLDER: Replace the div below with an <img> tag pointing to your photo ── */}
                {/* Example: <img src="/photo.jpg" alt="Mudit Bhuraria" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-[var(--text-muted)]">
                  <div
                    className="w-20 h-20 rounded-full border-2 border-dashed border-[var(--bg-border)] flex items-center justify-center text-3xl"
                    aria-hidden="true"
                  >
                    👤
                  </div>
                  <span className="font-mono text-xs text-center px-4 leading-relaxed">
                    {/* TODO: Replace with your photo */}
                    Add your photo here<br />
                    <span className="text-[var(--text-muted)] opacity-60">/public/photo.jpg</span>
                  </span>
                </div>

                {/* Shine overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, transparent 50%, rgba(168,85,247,0.05) 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl font-mono text-xs border border-[rgba(168,85,247,0.3)] text-violet"
                style={{ background: 'var(--bg-surface)' }}
                aria-hidden="true"
              >
                Available for hire ✨
              </motion.div>
            </div>
          </motion.div>

          {/* ── Bio + Stats ── */}
          <div className="flex flex-col gap-8">
            {/* Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              {ABOUT_BIO.trim().split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--text-secondary)] leading-relaxed text-base mb-4 last:mb-0"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: '🏙️ Based in India' },
                { label: '🎯 Open to opportunities' },
                { label: '🤝 Love collaboration' },
              ].map((fact) => (
                <span
                  key={fact.label}
                  className="px-3 py-1.5 rounded-full text-sm font-medium text-[var(--text-secondary)] border border-[var(--bg-border)]"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  {fact.label}
                </span>
              ))}
            </motion.div>

            {/* Stat cards grid */}
            <div className="grid grid-cols-2 gap-3">
              {ABOUT_STATS.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
