import React from 'react';
import SectionHeading from './SectionHeading';
import { ACHIEVEMENTS } from '../data/portfolioData';
import {
  Globe2,
  Award,
  BookOpen,
  Cpu,
  Trophy,
  Sparkles,
  Building,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';

export default function Achievements() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'international':
        return Globe2;
      case 'certification':
        return Award;
      case 'research':
        return BookOpen;
      case 'workshop':
        return Cpu;
      default:
        return Trophy;
    }
  };

  const featuredAchievement = ACHIEVEMENTS.find((a) => a.featured);
  const otherAchievements = ACHIEVEMENTS.filter((a) => !a.featured);

  return (
    <section id="achievements" aria-label="Achievements and Certifications" className="py-16 sm:py-24 relative bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HONORS & MILESTONES"
          title="Achievements & Certifications"
          subtitle="Strictly verified international project presentations, academic distinctions, research publications, and specialized AI workshop completions."
        />

        {/* Prominent Featured IEEE Malaysia Achievement */}
        {featuredAchievement && (
          <div
            id="featured-achievement-ieee"
            className="mb-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 light:from-white light:via-slate-50 light:to-indigo-50/60 p-6 sm:p-10 border-2 border-cyan-500/50 light:border-cyan-400 shadow-2xl shadow-cyan-950/30 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 light:bg-cyan-100 light:text-cyan-800 border border-cyan-500/40">
                    <Trophy className="w-3.5 h-3.5" />
                    INTERNATIONAL DISTINCTION
                  </span>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-500">
                    {featuredAchievement.dateOrDuration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white light:text-slate-900">
                  {featuredAchievement.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 light:text-cyan-700">
                  {featuredAchievement.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
                  {featuredAchievement.description}
                </p>

                {featuredAchievement.bulletPoints && (
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredAchievement.bulletPoints.map((bp, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-mono text-slate-300 light:text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual Badge Card */}
              <div className="rounded-xl p-5 bg-slate-950/80 light:bg-white border border-cyan-500/30 light:border-cyan-200 text-center flex flex-col items-center justify-center min-w-[200px] shrink-0 shadow-lg">
                <Globe2 className="w-12 h-12 text-cyan-400 light:text-cyan-600 mb-2 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white light:text-slate-900">
                  MALAYSIA 2025
                </span>
                <span className="text-[11px] font-mono text-slate-400 light:text-slate-500 mt-1">
                  Global Project Pitch
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAchievements.map((item) => {
            const Icon = getIcon(item.type);
            return (
              <div
                key={item.id}
                id={`achievement-${item.id}`}
                className="group rounded-2xl bg-slate-900/80 light:bg-white p-6 sm:p-7 border border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/40 shadow-xl shadow-black/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-800 light:bg-slate-100 text-cyan-300 light:text-cyan-700 border border-slate-700 light:border-slate-300">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 light:bg-cyan-50 flex items-center justify-center text-cyan-400 light:text-cyan-600">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 light:text-slate-600 mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                {item.bulletPoints && (
                  <div className="pt-4 mt-4 border-t border-slate-800/80 light:border-slate-200 space-y-1.5">
                    {item.bulletPoints.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-xs font-mono text-cyan-300/90 light:text-cyan-700"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
