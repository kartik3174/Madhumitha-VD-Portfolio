import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroHighlights from './components/HeroHighlights';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import TerminalEasterEgg from './components/TerminalEasterEgg';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global keyboard shortcuts: Cmd/Ctrl + K for palette, `~` for terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Background Radial Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] opacity-50" />
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] opacity-50" />
      </div>

      {/* Main App Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

          {/* Highlights Metrics */}
          <HeroHighlights />

          {/* About Section */}
          <About />

          {/* Technical Skills Section */}
          <Skills />

          {/* Experience Timeline Section */}
          <Experience />

          {/* Featured Projects Section */}
          <Projects />

          {/* Education Section */}
          <Education />

          {/* Achievements & Certifications */}
          <Achievements />

          {/* Contact CTA Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Terminal Easter Egg */}
      <TerminalEasterEgg
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
