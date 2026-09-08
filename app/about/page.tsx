import Image from "next/image";
import Link from "next/link";
import { contactDetails, contactLinks, aboutInfo, portraitImagePath } from "@/data/resume";
import { AboutSection } from "@/components/about-section";

export const metadata = {
  title: "About | Jiryan Farokhi",
  description:
    "Learn more about Jiryan Farokhi, an AI Engineer and Data Scientist focused on machine learning, agentic AI, big data, and distributed systems.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_transparent_65%)]" />

      <section className="grid gap-12 pt-16 lg:grid-cols-[1.3fr_0.7fr] items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            About
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            Jiryan Farokhi
          </h1>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            {aboutInfo.paragraphs[0]}
          </p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {aboutInfo.paragraphs[1]}
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            {contactDetails.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200/80 bg-white/70 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/50">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-0.5 font-medium text-slate-900 dark:text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -left-6 top-6 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900/60 max-w-sm">
            <Image
              src={portraitImagePath}
              alt="Portrait of Jiryan Farokhi"
              width={720}
              height={960}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview Pillars */}
      <div className="mt-16">
        <AboutSection />
      </div>
    </main>
  );
}
