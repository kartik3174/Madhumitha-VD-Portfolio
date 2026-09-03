import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Github, Linkedin, Command, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/85 light:bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="group flex items-center gap-2.5 text-slate-100 font-display font-bold tracking-wider text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center shadow-sm shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <span className="text-cyan-400 font-mono text-xs font-semibold">M</span>
            </div>
          </div>
          <span className="tracking-tight sm:tracking-normal group-hover:text-cyan-400 transition-colors">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
          <span className="hidden lg:inline-block text-[11px] font-mono font-normal px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
            AI &amp; DS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 relative cursor-pointer ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & Socials */}
        <div className="hidden sm:flex items-center gap-2 md:gap-3">
          {/* Terminal button */}
          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            aria-label="Open Developer Terminal"
            title="Open Developer Terminal"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors border border-slate-800/80 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Command Palette Trigger */}
          <button
            id="nav-cmd-k-btn"
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors border border-slate-800/80 cursor-pointer"
          >
            <Command className="w-3.5 h-3.5" />
            <span>Cmd+K</span>
          </button>

          {/* Social Links */}
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 light:text-slate-600 light:hover:bg-slate-200 transition-colors border border-slate-800/80 light:border-slate-300"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 light:text-slate-600 light:hover:bg-slate-200 transition-colors border border-slate-800/80 light:border-slate-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 light:text-slate-600 light:hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 light:border-slate-200 px-6 py-4 transition-all"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 light:text-slate-800 hover:bg-slate-800/60 light:hover:bg-slate-100 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-900 light:bg-slate-100 text-cyan-400 light:text-cyan-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 light:text-cyan-600 px-3 py-1.5 rounded-md bg-cyan-950/40 border border-cyan-900/60"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>whoami</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
