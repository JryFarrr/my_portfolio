"use client";

const particles = [
  { top: "10%", left: "18%", size: 12, delay: "0s", duration: "6s" },
  { top: "22%", left: "68%", size: 14, delay: "1.8s", duration: "7.5s" },
  { top: "62%", left: "26%", size: 10, delay: "1.1s", duration: "6.5s" },
  { top: "74%", left: "72%", size: 16, delay: "2.4s", duration: "8s" },
  { top: "44%", left: "50%", size: 8, delay: "0.6s", duration: "5.8s" },
  { top: "30%", left: "40%", size: 9, delay: "3.2s", duration: "7s" },
  { top: "58%", left: "60%", size: 11, delay: "4s", duration: "7.6s" },
];

export function DataScienceAnimation() {
  return (
    <div className="relative mx-auto flex h-72 w-72 max-w-full items-center justify-center">
      <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-transparent blur-2xl" />

      <div className="data-visual-orbit absolute inset-8 rounded-full border border-blue-500/30" />
      <div className="data-visual-orbit-slower absolute inset-0 rounded-[2.5rem] border border-blue-500/10" />

      <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full bg-slate-900/70 shadow-[0_0_25px_rgba(37,99,235,0.25)] backdrop-blur-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">AI</div>
        <p className="mt-2 text-center text-xs text-slate-300">
          Streaming signals.
          <br />
          Adaptive learning.
        </p>
        <div className="mt-4 h-12 w-32 overflow-hidden rounded-full border border-blue-500/30">
          <div className="data-visual-bar h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />
        </div>
      </div>

      {particles.map((particle) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className="data-visual-particle absolute rounded-full bg-blue-400/70"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
