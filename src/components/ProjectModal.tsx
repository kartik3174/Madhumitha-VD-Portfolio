import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Layers, AlertCircle, CheckCircle, Cpu, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 shadow-2xl p-6 sm:p-8 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 light:border-slate-200 pb-5">
          <div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 light:bg-cyan-50 text-cyan-300 light:text-cyan-800 border border-cyan-800/60 light:border-cyan-200">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white light:text-slate-900 mt-2">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 light:text-slate-500 mt-1">
              Architecture &amp; Technical Deep-Dive
            </p>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 light:text-slate-600 light:hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Description */}
        <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 leading-relaxed">
          {project.description}
        </p>

        {/* Architectural Flow Diagram */}
        <div className="rounded-xl p-5 bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700 font-bold">
              End-to-End System Pipeline
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.architectureFlow.map((step, sIdx) => (
              <React.Fragment key={step.label}>
                <div
                  className={`px-3 py-2 rounded-lg text-xs font-mono flex flex-col items-center justify-center text-center ${
                    step.accent
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 light:bg-cyan-100 light:text-cyan-800 font-bold'
                      : 'bg-slate-900 text-slate-200 border border-slate-800 light:bg-white light:text-slate-800 light:border-slate-300'
                  }`}
                >
                  <span>{step.label}</span>
                  {step.sublabel && (
                    <span className="text-[10px] text-slate-400 light:text-slate-500 font-normal">
                      {step.sublabel}
                    </span>
                  )}
                </div>
                {sIdx < project.architectureFlow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700 font-bold">
                Problem Statement
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700 font-bold">
                Engineered Solution
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Technical Concept */}
        <div className="p-4 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700 font-bold">
              Core Technical Concept
            </h5>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed font-mono">
            {project.technicalConcept}
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
            Key Highlights:
          </h5>
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 light:text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
            Technologies &amp; Libraries:
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 light:bg-slate-100 text-cyan-300 light:text-cyan-800 border border-slate-700 light:border-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer / Repository note strictly adhering to rule: DO NOT fabricate GitHub URLs */}
        <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 light:text-slate-500">
          <span>Source Code: Available upon technical interview walkthrough</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 light:bg-slate-200 light:text-slate-800 font-sans text-xs font-semibold cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
