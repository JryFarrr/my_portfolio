"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 3, label: "Years of\nexperience" },
  { value: 10, label: "Projects\ncompleted" },
  { value: 8, label: "Technologies\nmastered" },
  { value: 500, label: "Code\ncommits" },
];

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  return (
    <span
      ref={ref}
      className="font-mono text-4xl font-bold text-blue-400 transition-all md:text-5xl lg:text-6xl"
    >
      {count}
      <span className="text-blue-400">+</span>
    </span>
  );
}

export function StatsCounter() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-3 transition-transform hover:scale-105"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <AnimatedNumber value={stat.value} duration={2000 + index * 200} />
          <span className="whitespace-pre-line text-sm text-slate-400 md:text-base">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
