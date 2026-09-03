import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import NeuralHeroVisual from './NeuralHeroVisual';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Terminal, FileCode2 } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Subtle Grid and Glow backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Intentional Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-900/80 border border-cyan-500/40 text-cyan-400 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Software Developer • AI &amp; Data Science Enthusiast</span>
            </div>

            {/* Main Primary Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-slate-200">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Alternative Supporting Statement */}
            <p className="text-base sm:text-lg text-cyan-200/90 font-medium max-w-2xl border-l-2 border-cyan-500/60 pl-3">
              "{PERSONAL_INFO.subtitle}"
            </p>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-cta-projects"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all cursor-pointer"
              >
                <span>Let's Connect</span>
              </button>

              <button
                id="hero-cta-terminal"
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80 border border-dashed border-slate-700/80 transition-colors cursor-pointer"
                title="Open Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>$ whoami</span>
              </button>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="pt-4 flex items-center gap-5 text-sm text-slate-300">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Direct Links:
              </span>

              <a
                id="hero-social-github"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">github.com/{PERSONAL_INFO.githubUsername}</span>
              </a>

              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>

              <a
                id="hero-social-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono text-xs">{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Neural Node Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <NeuralHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
