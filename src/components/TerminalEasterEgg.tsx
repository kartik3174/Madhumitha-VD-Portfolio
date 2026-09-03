import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TerminalEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  cmd: string;
  output: string | React.ReactNode;
}

export default function TerminalEasterEgg({ isOpen, onClose }: TerminalEasterEggProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'whoami',
      output: `${PERSONAL_INFO.name} — AI & Data Science | Software Development`,
    },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: string | React.ReactNode = '';

    switch (cleanCmd) {
      case 'whoami':
        output = `${PERSONAL_INFO.name} — AI & Data Science | Software Development`;
        break;
      case 'help':
        output =
          'Available commands: whoami, skills, experience, projects, education, achievements, contact, clear, exit';
        break;
      case 'skills':
        output =
          'Python, SQL, HTML, CSS, JavaScript, Basic Flask, Scikit-learn, TensorFlow, Keras, OpenCV, NumPy, Pandas, Power BI, VS Code, Git';
        break;
      case 'experience':
        output =
          '1. Big-Si-Bucks (Full Stack Intern) | 2. Edunet Foundations (AI Engineer Intern) | 3. Vebbox Solutions (Data Analyst Intern) | 4. Pumo Tech (Data Science Intern)';
        break;
      case 'projects':
        output =
          '1. Local LLM RAG Pipeline (Offline/Docker) | 2. AI Resume Screening & Ranking | 3. Smart Expense AI (OCR/Next.js) | 4. Dominant Color Analysis (K-Means)';
        break;
      case 'education':
        output = `B.Tech AI & Data Science at Sri Sairam Institute of Technology (CGPA: ${PERSONAL_INFO.cgpa})`;
        break;
      case 'achievements':
        output =
          'IEEE Yesist12 Grand Finale Malaysia (Aug 2025), NPTEL STAR (15+ courses), Research Publications (Climate Resilient Ag / Geo Drone), IIT Madras Research Park Workshop, IBM GenAI Workshop.';
        break;
      case 'contact':
        output = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | GitHub: ${PERSONAL_INFO.githubUsername}`;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'exit':
        onClose();
        setInputVal('');
        return;
      default:
        output = `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div
      id="terminal-easter-egg-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="terminal-window"
        className="w-full max-w-2xl rounded-xl bg-slate-950 border border-slate-800 shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
              title="Close"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-80" />
            <span className="ml-2 text-slate-400 font-sans text-xs">
              bash — vdmadhu@portfolio:~
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-72 sm:h-80 overflow-y-auto space-y-3 bg-slate-950/95 text-slate-300">
          <div className="text-slate-500 text-[11px]">
            Welcome to Madhumitha's Interactive Developer Terminal (v1.0.0). Type{' '}
            <span className="text-cyan-400 font-bold">'help'</span> to see all commands.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span className="text-emerald-400 font-bold">vdmadhu@dev:~$</span>
                <span>{item.cmd}</span>
              </div>
              <div className="text-slate-200 pl-4 border-l border-slate-800 leading-relaxed text-[11px] sm:text-xs">
                {item.output}
              </div>
            </div>
          ))}

          {/* Active Prompt Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold shrink-0">vdmadhu@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              id="terminal-cli-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="whoami, skills, projects, contact..."
              className="flex-1 bg-transparent text-cyan-300 focus:outline-none placeholder-slate-600 font-mono text-xs"
            />
            <button
              type="submit"
              className="text-slate-500 hover:text-cyan-400 transition-colors p-1"
            >
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Window Footer */}
        <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
          <span>Target: Portfolio Inspection Shell</span>
          <span>Press ESC or type 'exit'</span>
        </div>
      </div>
    </div>
  );
}
