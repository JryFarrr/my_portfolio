"use client";

import { TypingName, TypingRole } from "./typing-effect";

const roles = ["Data Scientist", "Data Analyst"];

export function HeroContent({ summary }: { summary: string }) {
  return (
    <>
      <p className="text-sm uppercase tracking-widest text-slate-400">
        <TypingRole roles={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
      </p>
      <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="text-slate-100">Hello I&apos;m</span>
        <br />
        <span className="text-blue-400">
          <TypingName name="Jiryan Farokhi" />
        </span>
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-slate-400 sm:max-w-md md:text-base lg:max-w-xl">
        {summary}
      </p>
    </>
  );
}
