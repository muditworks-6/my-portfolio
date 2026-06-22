import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { Project } from '../types';

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.55, ease: EASE }}
      className="group relative card-glass card-glow-border overflow-hidden flex flex-col h-full"
      aria-label={`Project: ${project.title}`}
    >
      {/* Featured badge */}
      {project.featured && (
        <span
          className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold text-cyan border border-[rgba(0,240,255,0.3)]"
          style={{ background: 'rgba(0,240,255,0.1)' }}
        >
          ★ featured
        </span>
      )}

      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-[var(--bg-elevated)] flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Graceful fallback if image doesn't load
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center text-[var(--text-muted)] flex-col gap-2">
                  <span style="font-size:2rem">📁</span>
                  <span style="font-size:0.75rem;font-family:monospace">${project.id}</span>
                </div>`;
            }
          }}
        />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,240,255,0.05), rgba(10,10,15,0.4))' }}
          aria-hidden="true"
        />
        {/* Glow border on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-[11px]"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(0,240,255,0.3)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-base text-[var(--text-primary)] group-hover:text-cyan transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded font-mono text-[11px] font-medium text-violet border border-[rgba(168,85,247,0.25)]"
              style={{ background: 'rgba(168,85,247,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-[var(--bg-border)] mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-cyan transition-colors duration-200 font-medium"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
            Source
          </a>
          {project.liveUrl && (
            <>
              <span className="w-px h-4 bg-[var(--bg-border)]" aria-hidden="true" />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-cyan transition-colors duration-200 font-medium"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
