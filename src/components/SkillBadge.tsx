import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="skill-badge"
      style={{
        '--badge-color': skill.color || 'var(--cyan)',
      } as React.CSSProperties}
    >
      {/* Colored dot indicator */}
      <span
        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: skill.color || 'var(--cyan)', boxShadow: `0 0 6px ${skill.color || 'var(--cyan)'}60` }}
        aria-hidden="true"
      />
      {skill.name}
    </motion.span>
  );
}
