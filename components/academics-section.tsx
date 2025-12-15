"use client";

import { useEffect, useState, useRef } from "react";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Globe,
  BadgeCheck
} from "lucide-react";
import { organizations, globalPrograms, awards, certifications } from "@/data/resume";

// Education data
const education = {
  degree: "Bachelor of Science in Mathematics (Computer Science)",
  institution: "Institut Teknologi Sepuluh Nopember",
  period: "2022 - Present",
  location: "Surabaya, Indonesia",
  description: "Core curriculum focused on mathematics, data science, machine learning, and software development methodologies.",
};

function AnimatedCard({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
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
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
}

function OrganizationCard({
  organization,
  index,
}: {
  organization: typeof organizations[number];
  index: number;
}) {
  return (
    <AnimatedCard index={index}>
      <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold text-slate-50">{organization.role}</h4>
            <p className="text-blue-400">{organization.name}</p>
          </div>
          <Users className="h-5 w-5 text-slate-600 transition-colors group-hover:text-blue-400" />
        </div>
        <div className="mb-4 flex items-center gap-1.5 text-sm text-slate-400">
          <Calendar className="h-4 w-4" />
          <span>{organization.period}</span>
        </div>
        <ul className="space-y-2">
          {organization.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex items-start gap-2 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
              <span className="text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}

function GlobalProgramCard({
  program,
  index,
}: {
  program: typeof globalPrograms[number];
  index: number;
}) {
  return (
    <AnimatedCard index={index}>
      <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50 hover:bg-slate-900/80">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold text-slate-50">{program.title}</h4>
            <p className="text-green-400">{program.role}</p>
          </div>
          <Globe className="h-5 w-5 text-slate-600 transition-colors group-hover:text-green-400" />
        </div>
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{program.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{program.location}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {program.highlights.map((highlight, highlightIndex) => (
            <li key={highlightIndex} className="flex items-start gap-2 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
              <span className="text-sm leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}

function AwardBadge({ award, index }: { award: string; index: number }) {
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
      className={`transform transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-slate-900/80">
        <Trophy className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
        <span className="text-sm text-slate-300">{award}</span>
      </div>
    </div>
  );
}

function CertificationCard({ 
  certification, 
  index 
}: { 
  certification: typeof certifications[number]; 
  index: number;
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
      className={`transform transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900/80">
        <div className="rounded-lg bg-purple-500/20 p-2">
          <BadgeCheck className="h-5 w-5 text-purple-400" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-50">{certification.name}</h4>
          <p className="text-sm text-purple-400">{certification.issuer}</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="h-3 w-3" />
            <span>{certification.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AcademicsSection() {
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
    <section ref={ref} className="py-16 md:py-24" id="education">
      {/* Section Header */}
      <div
        className={`mb-12 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-50 md:text-4xl">Education</h2>
        <p className="mt-2 text-slate-400">Academic Background</p>
      </div>

      {/* Main Education Card */}
      <div
        className={`mb-16 transform transition-all delay-200 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/20 p-3">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">{education.degree}</h3>
                  <p className="text-blue-400">{education.institution}</p>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                </div>
              </div>
              <p className="text-slate-300">{education.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Organizations Section */}
      <div className="mb-16">
        <div
          className={`mb-8 flex items-center gap-3 transform transition-all delay-300 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-lg bg-blue-500/20 p-2">
            <Users className="h-5 w-5 text-blue-400" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-50">Organizations & Leadership</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {organizations.map((org, index) => (
            <OrganizationCard key={index} organization={org} index={index} />
          ))}
        </div>
      </div>

      {/* Global Programs Section */}
      <div className="mb-16">
        <div
          className={`mb-8 flex items-center gap-3 transform transition-all delay-400 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-lg bg-green-500/20 p-2">
            <Globe className="h-5 w-5 text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-50">Global Programs</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {globalPrograms.map((program, index) => (
            <GlobalProgramCard key={index} program={program} index={index} />
          ))}
        </div>
      </div>

      {/* Awards & Achievements Section */}
      <div className="mb-16">
        <div
          className={`mb-8 flex items-center gap-3 transform transition-all delay-500 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-lg bg-yellow-500/20 p-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-50">Awards & Achievements</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {awards.map((award, index) => (
            <AwardBadge key={index} award={award} index={index} />
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div
          className={`mb-8 flex items-center gap-3 transform transition-all delay-600 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-lg bg-purple-500/20 p-2">
            <BadgeCheck className="h-5 w-5 text-purple-400" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-50">Certifications</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
