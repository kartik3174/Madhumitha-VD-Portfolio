import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpDown } from 'lucide-react';

export default function Experience() {
  const [sortOrder, setSortOrder] = useState<'chronological' | 'reverse'>('reverse');

  // Ordered experiences
  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    // Chronological order: Pumo (May 2024) -> Vebbox (Aug 2024) -> Edunet (Feb 2025) -> Big-Si-Bucks (Nov 2025)
    const chronologicalOrder = ['exp-data-science', 'exp-data-analyst', 'exp-ai-saksham', 'exp-fullstack'];
    const idxA = chronologicalOrder.indexOf(a.id);
    const idxB = chronologicalOrder.indexOf(b.id);
    return sortOrder === 'chronological' ? idxA - idxB : idxB - idxA;
  });

  return (
    <section id="experience" aria-label="Work Experience" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HANDS-ON INDUSTRY PRACTICE"
          title="Internship Experience"
          subtitle="A progressive trajectory spanning data science research, analytics dashboards, machine learning engineering, and full-stack web systems."
        />

        {/* Progression Indicator & Sort Order Control */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800/80 light:border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 light:text-slate-700 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-slate-500 light:text-slate-400 uppercase tracking-wider font-semibold">
              Exposure Spectrum:
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800 light:bg-slate-100 text-cyan-400 light:text-cyan-700">
              Data Science
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-2.5 py-1 rounded bg-slate-800 light:bg-slate-100 text-sky-400 light:text-sky-700">
              Data Analytics
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-2.5 py-1 rounded bg-slate-800 light:bg-slate-100 text-indigo-400 light:text-indigo-700">
              AI Engineering
            </span>
            <span className="text-slate-600">→</span>
            <span className="px-2.5 py-1 rounded bg-slate-800 light:bg-slate-100 text-violet-400 light:text-violet-700">
              Full Stack
            </span>
          </div>

          <button
            id="experience-sort-toggle"
            onClick={() => setSortOrder(sortOrder === 'reverse' ? 'chronological' : 'reverse')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 light:text-slate-700 hover:text-white bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 border border-slate-700 light:border-slate-300 transition-colors whitespace-nowrap self-end sm:self-auto"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Order: {sortOrder === 'reverse' ? 'Most Recent First' : 'Chronological'}</span>
          </button>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-2 border-slate-800/90 light:border-slate-200/90 ml-3 sm:ml-6 md:ml-12 space-y-10">
          {sortedExperiences.map((exp, index) => {
            return (
              <div key={exp.id} id={exp.id} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 light:bg-white border-2 border-cyan-400 light:border-cyan-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-125 transition-transform duration-200">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 light:bg-cyan-600" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-slate-900/80 light:bg-white p-6 sm:p-8 border border-slate-800/90 light:border-slate-200/90 shadow-xl shadow-black/10 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-800/70 light:border-slate-200">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-950/60 light:bg-cyan-50 text-cyan-300 light:text-cyan-800 border border-cyan-800/60 light:border-cyan-200">
                          {exp.domain}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-xs text-slate-400 light:text-slate-500 font-mono">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white light:text-slate-900 mt-2">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 light:text-cyan-700">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-700 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="py-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                      Key Responsibilities &amp; Deliverables:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Emphasis Badges */}
                  <div className="pt-4 border-t border-slate-800/60 light:border-slate-200 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 light:text-slate-500 mr-1">
                      Tech Focus:
                    </span>
                    {exp.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700/60 light:border-slate-200 hover:border-cyan-500/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
