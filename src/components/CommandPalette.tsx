import React, { useState, useEffect } from 'react';
import { Search, X, Home, User, Code, Briefcase, FolderGit2, GraduationCap, Award, Mail, ExternalLink, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          // will be handled by parent or prop
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Go Home', section: 'home', icon: Home, category: 'Navigation' },
    { label: 'About Me', section: 'about', icon: User, category: 'Navigation' },
    { label: 'Technical Skills', section: 'skills', icon: Code, category: 'Navigation' },
    { label: 'Internship Experience', section: 'experience', icon: Briefcase, category: 'Navigation' },
    { label: 'Featured Projects', section: 'projects', icon: FolderGit2, category: 'Navigation' },
    { label: 'Education & Academics', section: 'education', icon: GraduationCap, category: 'Navigation' },
    { label: 'Achievements & Honors', section: 'achievements', icon: Award, category: 'Navigation' },
    { label: 'Contact Information', section: 'contact', icon: Mail, category: 'Navigation' },
    {
      label: 'Open Developer Terminal ($ whoami)',
      action: () => {
        onClose();
        onOpenTerminal();
      },
      icon: Terminal,
      category: 'Developer Tools',
    },
    {
      label: 'Open GitHub (vdmadhu)',
      url: PERSONAL_INFO.githubUrl,
      icon: ExternalLink,
      category: 'External Links',
    },
    {
      label: 'Open LinkedIn Profile',
      url: PERSONAL_INFO.linkedinUrl,
      icon: ExternalLink,
      category: 'External Links',
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: typeof actions[0]) => {
    onClose();
    if (item.action) {
      item.action();
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.section) {
      const el = document.getElementById(item.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="command-palette-dialog"
        className="w-full max-w-xl rounded-2xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 light:border-slate-200">
          <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            id="command-palette-input"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 light:bg-slate-100 rounded border border-slate-700 light:border-slate-300">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  id={`cmd-item-${idx}`}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-medium text-slate-300 light:text-slate-700 hover:text-white hover:bg-slate-800/80 light:hover:bg-slate-100 light:hover:text-slate-900 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 light:group-hover:text-cyan-600" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 light:text-slate-400">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-950/60 light:bg-slate-50 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with arrows or click</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
