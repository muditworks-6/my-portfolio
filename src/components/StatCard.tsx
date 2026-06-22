import { motion } from 'framer-motion';
import type { StatItem } from '../types';

interface StatCardProps {
  stat: StatItem;
  index: number;
}

const ICON_MAP: Record<string, string> = {
  rocket: '🚀',
  'code-2': '💻',
  'graduation-cap': '🎓',
  'git-merge': '🔀',
};

export default function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="card-glass card-glow-border p-5 flex flex-col items-start gap-3 cursor-default group relative overflow-hidden"
    >
      {/* Icon */}
      <span
        className="text-2xl transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {ICON_MAP[stat.icon] || '⭐'}
      </span>

      {/* Value with gradient */}
      <div>
        <div className="stat-value mb-1">{stat.value}</div>
        <div className="text-sm text-[var(--text-secondary)] leading-snug">
          {stat.label}
        </div>
      </div>

      {/* Subtle bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, var(--cyan), var(--violet))' }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
