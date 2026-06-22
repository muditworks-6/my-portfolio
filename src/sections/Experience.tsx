import { motion } from 'framer-motion';
import { TIMELINE_ENTRIES } from '../data';
import TimelineItem from '../components/TimelineItem';

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience and Education">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Where I've been</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text-violet">Education</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-base mb-8">
            My journey through internships, open-source contributions, and academic milestones.
          </p>
        </motion.div>

        <div className="glow-divider mb-12" />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-10 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan block" aria-hidden="true" />
            <span className="text-xs text-[var(--text-secondary)] font-mono">// experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet block" aria-hidden="true" />
            <span className="text-xs text-[var(--text-secondary)] font-mono">// education</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px opacity-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--cyan), var(--violet), transparent)',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {TIMELINE_ENTRIES.map((entry, index) => (
              <TimelineItem
                key={entry.id}
                entry={entry}
                index={index}
                isLast={index === TIMELINE_ENTRIES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
