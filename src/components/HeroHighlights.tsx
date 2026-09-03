import React from 'react';
import { HERO_HIGHLIGHTS } from '../data/portfolioData';
import { Award, GraduationCap, Briefcase, Cpu } from 'lucide-react';

export default function HeroHighlights() {
  const icons = [Award, GraduationCap, Briefcase, Cpu];

  return (
    <section
      id="hero-highlights"
      aria-label="Core Highlights"
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HERO_HIGHLIGHTS.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={item.label}
              id={`highlight-card-${idx}`}
              className="group relative rounded-xl p-5 bg-slate-900/80 light:bg-white/95 border border-slate-800/90 light:border-slate-200/90 shadow-lg shadow-black/20 hover:border-cyan-500/40 hover:shadow-cyan-950/10 transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
                    {item.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white light:text-slate-900 mt-1 tracking-tight">
                    {item.value}
                  </div>
                  <p className="text-xs text-cyan-300/80 light:text-cyan-700 font-medium mt-1">
                    {item.detail}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 light:bg-slate-100 flex items-center justify-center text-cyan-400 light:text-cyan-600 border border-slate-700/60 light:border-slate-200 group-hover:scale-105 group-hover:bg-cyan-500/10 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
