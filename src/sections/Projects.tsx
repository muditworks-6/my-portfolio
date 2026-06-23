import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '../data';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" aria-label="Projects">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-base mb-8">
            A selection of personal projects, academic work, and side experiments.
            All placeholder content — replace with your real projects.
          </p>
        </motion.div>

        <div className="glow-divider mb-10" />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium font-mono transition-all duration-200 cursor-pointer border
                ${activeCategory === cat
                  ? 'text-cyan border-[rgba(0,240,255,0.4)] bg-[rgba(0,240,255,0.08)]'
                  : 'text-[var(--text-muted)] border-[var(--bg-border)] hover:text-[var(--text-secondary)] hover:border-[var(--text-muted)] bg-transparent'
                }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-2 opacity-50 text-xs">
                  ({PROJECTS.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/muditworks-6" // TODO: replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
