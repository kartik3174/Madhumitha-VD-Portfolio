import React from 'react';

interface SectionHeadingProps {
  id?: string;
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  id,
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className={`space-y-3 mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      }`}
    >
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/60 light:border-cyan-200 text-cyan-300 light:text-cyan-800 shadow-sm ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white light:text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 light:text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
