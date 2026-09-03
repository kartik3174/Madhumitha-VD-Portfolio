import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950 light:bg-slate-50 py-12 text-slate-400 light:text-slate-600 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Slogan */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-display font-bold text-lg text-white light:text-slate-900 tracking-wide">
              {PERSONAL_INFO.name.toUpperCase()}
            </div>
            <p className="text-xs font-mono text-cyan-400 light:text-cyan-700">
              AI • Data • Software
            </p>
            <p className="text-[11px] text-slate-500 light:text-slate-500 font-mono">
              B.Tech in Artificial Intelligence &amp; Data Science (CGPA: {PERSONAL_INFO.cgpa})
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:text-cyan-400 light:hover:text-cyan-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 hover:text-cyan-400 light:hover:text-cyan-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              title="Back to Top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 text-xs font-mono hover:text-cyan-400 light:hover:text-cyan-600 transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-900 light:border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Crafted with precision • Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
