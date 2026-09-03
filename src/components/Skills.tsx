import React, { useState, useMemo } from 'react';
import SectionHeading from './SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Code, Globe, Cpu, Database, Wrench, BookOpen, HeartHandshake, Compass } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code,
    web: Globe,
    'ai-data': Cpu,
    database: Database,
    tools: Wrench,
    coursework: BookOpen,
    'soft-skills': HeartHandshake,
    interests: Compass,
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.filter((category) => {
      // Category tab filter
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return false;
      }
      // Search text filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesCatTitle = category.title.toLowerCase().includes(query);
        const matchesSkills = category.skills.some((skill) =>
          skill.name.toLowerCase().includes(query)
        );
        return matchesCatTitle || matchesSkills;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" aria-label="Technical Skills" className="py-16 sm:py-24 relative bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNICAL TOOLKIT"
          title="Skills & Competencies"
          subtitle="A comprehensive overview of programming languages, machine learning frameworks, data tools, and core academic foundations."
        />

        {/* Controls: Search and Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              id="skill-filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 light:bg-slate-200/70 text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-300/80 border border-slate-800 light:border-slate-300'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 light:bg-slate-200/70 text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-300/80 border border-slate-800 light:border-slate-300'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, SQL)..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-slate-900/90 light:bg-white rounded-lg border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code;
            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className="group rounded-2xl p-6 bg-slate-900/70 light:bg-white border border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/40 light:hover:border-cyan-400 shadow-lg shadow-black/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 light:text-cyan-600">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-base text-white light:text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 light:text-slate-400">
                      {category.skills.length} items
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 light:text-slate-500 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                          skill.level === 'Beginner'
                            ? 'bg-amber-950/30 light:bg-amber-50 text-amber-300 light:text-amber-800 border border-amber-800/40 light:border-amber-200'
                            : 'bg-slate-800/80 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700/80 light:border-slate-200 hover:border-cyan-500/50 hover:text-cyan-300'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            skill.level === 'Beginner' ? 'bg-amber-400' : 'bg-cyan-400'
                          }`}
                        />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-slate-900/30 border border-dashed border-slate-800">
            <p className="text-sm text-slate-400 font-mono">
              No matching skills found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-cyan-400 underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
