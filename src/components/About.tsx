import React from 'react';
import SectionHeading from './SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  MapPin,
  GraduationCap,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'AI & Data Foundations',
      description:
        'Hands-on experience in machine learning pipelines, predictive modeling, data preprocessing, and NLP resume parsing systems.',
      icon: BrainCircuit,
    },
    {
      title: 'Full-Stack Engineering',
      description:
        'Proficient in building clean, responsive web applications utilizing HTML, CSS, JavaScript, and modern full-stack workflows.',
      icon: Code2,
    },
    {
      title: 'Data Analytics & Insights',
      description:
        'Experience building executive dashboards and visual reports using SQL and Power BI to translate complex data into business decisions.',
      icon: Database,
    },
    {
      title: 'Scalable Systems Mindset',
      description:
        'Disciplined problem-solving approach focused on algorithmic rigor, self-learning adaptability, and scalable code architecture.',
      icon: Layers,
    },
  ];

  return (
    <section id="about" aria-label="About Madhumitha V D" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="BACKGROUND & PHILOSOPHY"
          title="About Me"
          subtitle="A dedicated technologist bridging artificial intelligence, data analytics, and modern software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              id="about-profile-card"
              className="relative flex-1 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 light:from-white light:to-slate-50 p-6 sm:p-8 border border-slate-800/90 light:border-slate-200 shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              {/* Corner badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 light:border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-display font-bold text-lg shadow-inner">
                    MD
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white light:text-slate-900">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 light:text-cyan-700">
                      B.Tech AI &amp; DS
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/60 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 border border-emerald-800/50 light:border-emerald-200">
                  Open to Opportunities
                </span>
              </div>

              {/* Exact Required Fields */}
              <div className="py-6 space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2 border-b border-slate-800/40 light:border-slate-200/60">
                  <span className="text-slate-400 light:text-slate-500">Name</span>
                  <span className="font-semibold text-slate-200 light:text-slate-800 font-sans">
                    {PERSONAL_INFO.name}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-slate-800/40 light:border-slate-200/60">
                  <span className="text-slate-400 light:text-slate-500">Role</span>
                  <span className="font-semibold text-slate-200 light:text-slate-800 text-right font-sans">
                    Software Developer / AI &amp; DS Student
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/40 light:border-slate-200/60">
                  <span className="text-slate-400 light:text-slate-500">CGPA</span>
                  <span className="font-bold text-cyan-400 light:text-cyan-600 bg-cyan-950/40 light:bg-cyan-50 px-2 py-0.5 rounded border border-cyan-800/40 light:border-cyan-200">
                    {PERSONAL_INFO.cgpa} / 10.0
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800/40 light:border-slate-200/60">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Location
                  </span>
                  <span className="font-semibold text-slate-200 light:text-slate-800 font-sans">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" /> College
                  </span>
                  <span className="font-medium text-slate-300 light:text-slate-700 text-right text-xs font-sans">
                    Sri Sairam Institute of Technology
                  </span>
                </div>
              </div>

              {/* Personal branding statement */}
              <div className="mt-2 p-4 rounded-xl bg-slate-950/70 light:bg-slate-100/80 border border-slate-800 light:border-slate-200">
                <p className="text-xs font-mono text-slate-400 light:text-slate-600">
                  <span className="text-cyan-400 font-bold">$</span> focus.motto:
                </p>
                <p className="text-sm font-display font-medium text-cyan-200 light:text-cyan-800 mt-1">
                  "{PERSONAL_INFO.brandingStatement}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Summary & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl bg-slate-900/40 light:bg-white/80 p-6 sm:p-8 border border-slate-800/80 light:border-slate-200 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-display font-bold text-white light:text-slate-900">
                Professional Profile
              </h3>
              <p className="text-slate-300 light:text-slate-600 text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {[
                  'Python & SQL Proficient',
                  'Multiple Internship Experience',
                  'Fast Learner & Adaptable',
                  'Data-Driven Decision Maker',
                  'Modern Web Architectures',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/60 light:border-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl p-5 bg-slate-900/60 light:bg-white border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/30 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/20 text-cyan-400 light:text-cyan-600 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-display font-bold text-white light:text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed mt-1.5">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
