import Image from "next/image";
import Link from "next/link";
import { contactDetails, contactLinks, summary, portraitImagePath } from "@/data/resume";

export const metadata = {
  title: "About | Jiryan Farokhi",
  description:
    "Learn more about Jiryan Farokhi, a data scientist focused on machine learning, big data, and community-driven tech initiatives.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_65%)]" />
      <section className="grid gap-12 pt-24 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">About</p>
          <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">About Me</h1>
          <p className="text-lg leading-relaxed text-slate-300">{summary}</p>
          <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <p className="text-slate-400">{item.label}</p>
                <p>{item.value}</p>
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
                className="rounded-full border border-slate-800 px-3 py-1 text-xs uppercase tracking-wide text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-6 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/60 shadow-2xl">
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
    </main>
  );
}
