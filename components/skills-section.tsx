"use client";

import { skillsCategories } from "@/data/resume";
import {
  Bot,
  BarChart3,
  Server,
  Cloud,
  Code2,
  Cpu,
} from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case "bot":
        return <Bot className="h-5 w-5 text-blue-500" />;
      case "chart":
        return <BarChart3 className="h-5 w-5 text-blue-500" />;
      case "server":
        return <Server className="h-5 w-5 text-blue-500" />;
      case "cloud":
        return <Cloud className="h-5 w-5 text-blue-500" />;
      case "code":
        return <Code2 className="h-5 w-5 text-blue-500" />;
      default:
        return <Cpu className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-24 border-t border-slate-200/80 py-16 transition-colors duration-300 dark:border-slate-800/80 md:py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-400 md:text-base">
            Comprehensive toolkit spanning modern artificial intelligence frameworks, data processing, backend architectures, and production deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-blue-400/40 dark:hover:bg-slate-900/80"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 ring-1 ring-blue-500/20">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                    {category.title}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:bg-blue-500/15 dark:hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
