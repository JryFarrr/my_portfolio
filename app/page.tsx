import Link from "next/link";
import { DataScienceAnimation } from "@/components/data-animation";
import {
  awards,
  coaching,
  contactLinks,
  experiences,
  globalPrograms,
  organizations,
  summary,
  certifications,
} from "@/data/resume";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-28">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.15),_transparent_60%)]" />

      <section id="home" className="grid gap-12 pt-24 md:grid-cols-[1.7fr_1fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Data Scientist & AI Enthusiast</p>
          <h1 className="text-4xl font-semibold leading-tight text-glow md:text-5xl">
            Jiryan Farokhi
          </h1>
          <p className="text-lg text-slate-300">{summary}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.datascienceportfol.io/jiryan_farokhi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-slate-50 transition hover:bg-blue-400 hover:shadow-lg"
            >
              View Projects
            </Link>
            <Link
              href="mailto:500221102@mhs.its.ac.id"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-400 hover:text-blue-300"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-slate-800 px-3 py-1 text-xs uppercase tracking-wide text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <DataScienceAnimation />
      </section>

      <section className="mt-24 space-y-12" aria-labelledby="experience-title">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Experience</p>
          <h2 id="experience-title" className="text-2xl font-semibold text-slate-50">
            Professional Journey
          </h2>
          <p className="max-w-3xl text-slate-300">
            Combining research, analytics, and leadership to deliver reliable data science solutions across startups,
            consulting, and academic environments.
          </p>
        </div>
        <div className="space-y-10">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/50"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-blue-300">{experience.company}</p>
                </div>
                <p className="text-sm text-slate-400 md:text-right">
                  {experience.location}
                  <br />
                  {experience.period}
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-2" aria-labelledby="organizations-title">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Leadership</p>
          <h2 id="organizations-title" className="text-2xl font-semibold text-slate-50">
            Communities & Organisations
          </h2>
          <div className="mt-8 space-y-10">
            {organizations.map((org) => (
              <article key={org.name} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
                <h3 className="text-lg font-semibold text-slate-50">{org.name}</h3>
                <p className="text-sm text-blue-300">{org.role}</p>
                <p className="text-xs uppercase tracking-wider text-slate-400">{org.period}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {org.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-slate-50">International Exposure</h3>
            <div className="mt-4 space-y-6">
              {globalPrograms.map((program) => (
                <div key={program.title} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold text-blue-300">{program.title}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {program.role} - {program.location} - {program.period}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-slate-50">Awards & Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {awards.map((award) => (
                <li key={award} className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-24 grid gap-10 lg:grid-cols-2" aria-labelledby="growth-title">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 id="growth-title" className="text-xl font-semibold text-slate-50">Certifications</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex justify-between gap-4">
                <div>
                  <p>{cert.name}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">{cert.issuer}</p>
                </div>
                <p className="text-xs text-blue-300">{cert.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-slate-50">Coaching & Mentoring</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {coaching.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mt-24 border-t border-slate-800 pt-8 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Jiryan Farokhi. All rights reserved.</p>
          <p className="text-xs">Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

