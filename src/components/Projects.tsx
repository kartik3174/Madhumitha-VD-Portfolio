import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  FileText,
  Lock,
  Workflow,
  Eye,
} from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filterCategories = ['All', 'AI / ML', 'Data Science', 'Full Stack', 'Computer Vision'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" aria-label="Featured Projects" className="py-16 sm:py-24 relative bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO HIGHLIGHTS"
          title="Featured Projects"
          subtitle="Real-world engineering applications focused on privacy-first local AI, NLP automation, OCR computer vision, and machine learning clustering."
        />

        {/* Filter Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                  : 'bg-slate-900/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-800/80 light:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-2xl bg-slate-900/80 light:bg-white border border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/40 shadow-xl shadow-black/15 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 light:bg-cyan-50 text-cyan-300 light:text-cyan-800 border border-cyan-800/60 light:border-cyan-200">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono">
                    <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                    <span>System Architecture</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mt-3 mb-6">
                  {project.description}
                </p>

                {/* Visual Pipeline Architecture Flow */}
                <div className="rounded-xl p-4 bg-slate-950/70 light:bg-slate-50 border border-slate-800/90 light:border-slate-200 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2 flex items-center justify-between">
                    <span>Data Flow &amp; Process:</span>
                    <span className="text-[10px] text-cyan-400 font-bold">LIVE PIPELINE</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.architectureFlow.map((step, sIdx) => (
                      <React.Fragment key={step.label}>
                        <span
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                            step.accent
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 light:bg-cyan-100 light:text-cyan-800 font-semibold'
                              : 'bg-slate-900 text-slate-300 border border-slate-800 light:bg-white light:text-slate-700 light:border-slate-300'
                          }`}
                        >
                          {step.label}
                        </span>
                        {sIdx < project.architectureFlow.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-slate-600 light:text-slate-400 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Problem vs Solution Summary */}
                <div className="space-y-2.5 text-xs text-slate-400 light:text-slate-600 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-amber-400 shrink-0 mt-0.5">
                      PROBLEM:
                    </span>
                    <span className="line-clamp-2">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-cyan-400 shrink-0 mt-0.5">
                      CONCEPT:
                    </span>
                    <span className="line-clamp-2">{project.technicalConcept}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Tech Badges & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/90 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/60 light:border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 light:border-slate-200">
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 light:text-cyan-600 hover:text-cyan-300 light:hover:text-cyan-700 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span
                      title="Code repository available upon technical interview"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 light:text-slate-400 px-2 py-1 rounded bg-slate-950/40 light:bg-slate-100 border border-slate-800/60 light:border-slate-200"
                    >
                      <Lock className="w-3 h-3" />
                      <span>Code on Request</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      </div>
    </section>
  );
}
