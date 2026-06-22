import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import SkillBadge from '../components/SkillBadge';

const CATEGORY_ACCENTS: Record<string, string> = {
  'Languages': 'var(--cyan)',
  'Frameworks & Libraries': 'var(--violet)',
  'Tools & Platforms': '#38bdf8',
  'Currently Learning': '#f59e0b',
};

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  }),
};


export default function Skills() {
  return (
    <section id="skills" aria-label="Skills">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">
            My <span className="gradient-text-violet">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-base mb-8">
            A curated snapshot of the technologies I use regularly, grouped by domain.
            Always learning, always building.
          </p>
        </motion.div>

        <div className="glow-divider mb-12" />

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={catIndex}
              className="card-glass p-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ background: CATEGORY_ACCENTS[category.category] || 'var(--cyan)' }}
                  aria-hidden="true"
                />
                <h3
                  className="font-semibold text-sm uppercase tracking-widest font-mono"
                  style={{ color: CATEGORY_ACCENTS[category.category] || 'var(--cyan)' }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 font-mono text-xs text-[var(--text-muted)]"
        >
          // and always picking up something new...
        </motion.p>
      </div>
    </section>
  );
}
