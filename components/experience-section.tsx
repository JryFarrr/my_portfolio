"use client";

import { useEffect, useState, useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/data/resume";

// Stats data for experience section
const experienceStats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Companies Worked" },
  { value: 500, suffix: "+", label: "Code Commits" },
];

function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2000 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number;
}) {
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
    <span ref={ref} className="text-3xl font-bold text-slate-50 md:text-4xl lg:text-5xl">
      {count}
      <span className="text-blue-400">{suffix}</span>
    </span>
  );
}

function ExperienceCard({ 
  experience, 
  index,
  isLatest = false
}: { 
  experience: typeof experiences[number]; 
  index: number;
  isLatest?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={`relative transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 z-10 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-500 md:block" />
      
      {/* Card */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80 md:ml-6">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-slate-50">{experience.role}</h3>
              {isLatest && (
                <span className="rounded-full bg-blue-500/20 px-3 py-0.5 text-xs font-medium text-blue-400">
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-lg text-blue-400">{experience.company}</p>
          </div>
          <Briefcase className="h-5 w-5 text-slate-600 transition-colors group-hover:text-blue-400" />
        </div>

        {/* Meta info */}
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {experience.bullets.map((bullet, bulletIndex) => (
            <li
              key={bulletIndex}
              className="flex items-start gap-2 text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
              <span className="text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section ref={ref} className="py-16 md:py-24" id="experience">
      {/* Section Header */}
      <div
        className={`mb-12 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-50 md:text-4xl">
          Professional Experience
        </h2>
      </div>

      {/* Stats Grid */}
      <div
        className={`mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transform transition-all delay-200 duration-700`}
      >
        {experienceStats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80"
          >
            <AnimatedCounter 
              value={stat.value} 
              suffix={stat.suffix} 
              duration={2000 + index * 200} 
            />
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent md:block" />

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            //   isLatest={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
