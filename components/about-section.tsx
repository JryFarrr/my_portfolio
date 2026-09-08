"use client";

import { aboutInfo } from "@/data/resume";
import { Bot, LineChart, Server, Cloud, Sparkles } from "lucide-react";

export function AboutSection() {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case "bot":
        return <Bot className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />;
      case "chart":
        return <LineChart className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />;
      case "server":
        return <Server className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />;
      case "cloud":
        return <Cloud className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <Sparkles className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-200/80 py-16 transition-colors duration-300 dark:border-slate-800/80 md:py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Overview</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl">
            About Me
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Narrative Bio & Philosophy */}
          <div className="space-y-6 lg:col-span-6">
            <h3 className="text-xl font-semibold leading-snug text-slate-900 dark:text-blue-400 md:text-2xl">
              {aboutInfo.headline}
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              {aboutInfo.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Badges / Key Capabilities */}
            <div className="pt-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Competencies & Engineering Methods
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutInfo.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-1 text-xs font-medium text-slate-800 transition-all duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:bg-blue-500/15 dark:hover:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Core Pillars Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutInfo.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-blue-400/40 dark:hover:bg-slate-900/80"
                >
                  <div>
                    <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 dark:bg-blue-950/50 ring-1 ring-blue-500/20">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <h4 className="mb-2 text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                      {pillar.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 md:text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
