import { motion } from 'framer-motion';
import type { TimelineEntry } from '../types';

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}

const ICON_MAP: Record<string, string> = {
  briefcase: '💼',
  'graduation-cap': '🎓',
  'git-merge': '🔀',
  'book-open': '📖',
};

export default function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const isExperience = entry.type === 'experience';
  const accentColor = isExperience ? 'var(--cyan)' : 'var(--violet)';
  const accentMuted = isExperience ? 'rgba(0,240,255,0.12)' : 'rgba(168,85,247,0.12)';
  const borderColor = isExperience ? 'rgba(0,240,255,0.3)' : 'rgba(168,85,247,0.3)';

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
      className="relative flex gap-5 md:gap-0"
    >
      {/* ── Mobile: left-aligned layout ── */}
      {/* ── Desktop: alternating left/right ── */}

      {/* Desktop: left column (even = content, odd = empty) */}
      <div className="hidden md:block md:w-[calc(50%-1.5rem)] md:pr-10">
        {index % 2 === 0 && <TimelineCard entry={entry} accentColor={accentColor} accentMuted={accentMuted} borderColor={borderColor} />}
      </div>

      {/* Center node */}
      <div className="hidden md:flex md:flex-col md:items-center md:w-12 md:flex-shrink-0 md:relative">
        <div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 flex-shrink-0 timeline-node-pulse"
          style={{
            borderColor: accentColor,
            background: 'var(--bg-base)',
            boxShadow: `0 0 16px ${accentColor}50, 0 0 4px ${accentColor}80`,
          }}
          aria-hidden="true"
        >
          <span className="text-base leading-none">{ICON_MAP[entry.icon || 'briefcase']}</span>
        </div>
        {/* Connector line */}
        {!isLast && (
          <div
            className="absolute top-10 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${accentColor}60, var(--bg-border))`,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Desktop: right column (odd = content, even = empty) */}
      <div className="hidden md:block md:w-[calc(50%-1.5rem)] md:pl-10">
        {index % 2 !== 0 && <TimelineCard entry={entry} accentColor={accentColor} accentMuted={accentMuted} borderColor={borderColor} />}
      </div>

      {/* ── Mobile layout ── */}
      <div className="flex md:hidden gap-4 w-full">
        {/* Mobile node */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-9 h-9 rounded-full border-2 flex items-center justify-center z-10"
            style={{
              borderColor: accentColor,
              background: 'var(--bg-base)',
              boxShadow: `0 0 12px ${accentColor}50`,
            }}
            aria-hidden="true"
          >
            <span className="text-sm">{ICON_MAP[entry.icon || 'briefcase']}</span>
          </div>
          {!isLast && (
            <div
              className="flex-1 w-px mt-2"
              style={{ background: `linear-gradient(to bottom, ${accentColor}60, var(--bg-border))` }}
              aria-hidden="true"
            />
          )}
        </div>
        {/* Mobile card */}
        <div className="flex-1 pb-8">
          <TimelineCard entry={entry} accentColor={accentColor} accentMuted={accentMuted} borderColor={borderColor} />
        </div>
      </div>
    </motion.div>
  );
}

function TimelineCard({
  entry,
  accentColor,
  accentMuted,
  borderColor,
}: {
  entry: TimelineEntry;
  accentColor: string;
  accentMuted: string;
  borderColor: string;
}) {
  return (
    <div
      className="card-glass p-5 mb-8 group"
      style={{ '--hover-border': borderColor } as React.CSSProperties}
    >
      {/* Type badge */}
      <span
        className="inline-block px-2 py-0.5 rounded font-mono text-[11px] font-semibold mb-3"
        style={{ color: accentColor, background: accentMuted, border: `1px solid ${borderColor}` }}
      >
        {entry.type === 'experience' ? '// experience' : '// education'}
      </span>

      {/* Role & org */}
      <h3 className="font-semibold text-base text-[var(--text-primary)] leading-snug mb-1">
        {entry.role}
      </h3>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
        <span className="text-sm font-medium" style={{ color: accentColor }}>
          {entry.organization}
        </span>
        <span className="text-[var(--text-muted)] text-xs">·</span>
        <span className="text-xs text-[var(--text-muted)]">{entry.location}</span>
      </div>
      <span className="font-mono text-xs text-[var(--text-muted)] block mb-4">
        {entry.startDate} — {entry.endDate}
      </span>

      {/* Description */}
      <ul className="space-y-1.5 mb-4" role="list">
        {entry.description.map((point, i) => (
          <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2 leading-relaxed">
            <span style={{ color: accentColor }} aria-hidden="true" className="flex-shrink-0 mt-0.5">▸</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Tags */}
      {entry.tags && (
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded font-mono text-[10px] text-[var(--text-muted)] border border-[var(--bg-border)]"
              style={{ background: 'var(--bg-elevated)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
