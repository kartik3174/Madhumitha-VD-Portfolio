import React, { useEffect, useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'cyan' | 'gold'>('cyan');

  useEffect(() => {
    // Check initial preference from localStorage or check legacy keys
    const stored = localStorage.getItem('portfolio-theme');
    const legacy = localStorage.getItem('theme');
    
    if (stored === 'gold' || legacy === 'light' || legacy === 'gold') {
      applyTheme('gold');
    } else {
      applyTheme('cyan');
    }
  }, []);

  const applyTheme = (newTheme: 'cyan' | 'gold') => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    localStorage.setItem('theme', newTheme === 'gold' ? 'light' : 'dark');

    if (newTheme === 'gold') {
      document.documentElement.classList.add('theme-gold', 'light');
      document.documentElement.classList.remove('theme-cyan', 'dark');
    } else {
      document.documentElement.classList.add('theme-cyan', 'dark');
      document.documentElement.classList.remove('theme-gold', 'light');
    }

    // Inform dynamic canvas / ambient visuals
    window.dispatchEvent(
      new CustomEvent('portfolio-theme-change', { detail: { theme: newTheme } })
    );
  };

  const toggleTheme = () => {
    applyTheme(theme === 'cyan' ? 'gold' : 'cyan');
  };

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'cyan' ? 'Gold & Black' : 'Cyber Cyan'} theme`}
      title={theme === 'cyan' ? 'Switch to Gold & Black theme' : 'Switch to Cyber Cyan theme'}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border cursor-pointer select-none group ${
        theme === 'gold'
          ? 'bg-[#14141A] border-amber-500/60 text-amber-300 hover:border-amber-400 hover:bg-[#1A1A22] shadow-[0_0_12px_rgba(245,158,11,0.25)]'
          : 'bg-slate-900/90 border-slate-700/80 text-cyan-300 hover:border-cyan-400 hover:bg-slate-800/90 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
      }`}
    >
      {theme === 'gold' ? (
        <>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-semibold tracking-wide text-amber-300">Gold &amp; Black</span>
        </>
      ) : (
        <>
          <Zap className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="font-semibold tracking-wide text-cyan-300">Cyber Cyan</span>
        </>
      )}
    </button>
  );
}

