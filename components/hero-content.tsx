"use client";

import { TypingName, TypingRole } from "./typing-effect";

const roles = ["AI Engineer", "Data Scientist"];

export function HeroContent({ summary }: { summary: string }) {
  return (
    <>
      <p className="h-6 font-mono text-sm uppercase tracking-widest text-slate-400">
        <TypingRole roles={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
      </p>
      <h1 className="font-mono text-4xl leading-tight md:text-5xl lg:text-6xl">
        <span className="text-slate-100">Hello I'm</span>
        <br />
        <span className="text-blue-400">
          <TypingName name="Jiryan Farokhi" />
        </span>
      </h1>
      <p className="max-w-xl font-mono text-sm leading-relaxed text-slate-400 md:text-base lg:max-w-2xl">
        {summary}
      </p>
    </>
  );
}
