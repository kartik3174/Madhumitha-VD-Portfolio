import React from 'react';
import SectionHeading from './SectionHeading';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" aria-label="Education" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC RIGOR"
          title="Education"
          subtitle="Formal academic engineering foundation in artificial intelligence, mathematical algorithms, and distributed computing systems."
        />

        <div className="max-w-4xl mx-auto">
          <div
            id="education-card"
            className="rounded-2xl bg-slate-900/80 light:bg-white p-6 sm:p-10 border border-slate-800/90 light:border-slate-200/90 shadow-2xl shadow-black/20 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800/80 light:border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 light:text-cyan-600 shrink-0 shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 light:bg-cyan-50 text-cyan-300 light:text-cyan-800 border border-cyan-800/60 light:border-cyan-200">
                      Bachelor of Technology
                    </span>
                    <span className="text-xs font-mono text-emerald-400 light:text-emerald-700 bg-emerald-950/40 light:bg-emerald-50 px-2 py-0.5 rounded border border-emerald-800/40 light:border-emerald-200">
                      Enrolled &amp; Active
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white light:text-slate-900 mt-2">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-base font-semibold text-cyan-400 light:text-cyan-700 mt-1">
                    {EDUCATION_DATA.institution}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 light:text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {EDUCATION_DATA.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {EDUCATION_DATA.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="rounded-xl p-4 bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex flex-col items-center justify-center min-w-[140px] shrink-0 text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
                  Cumulative GPA
                </span>
                <div className="text-2xl sm:text-3xl font-display font-black text-cyan-400 light:text-cyan-600 mt-0.5">
                  {EDUCATION_DATA.cgpa}
                </div>
                <span className="text-[11px] font-mono text-slate-500 light:text-slate-400">
                  Scale of 10.0
                </span>
              </div>
            </div>

            {/* Core Curricular Courses */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700 font-bold">
                  Core Relevant Coursework
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {EDUCATION_DATA.coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-700"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="font-sans font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
