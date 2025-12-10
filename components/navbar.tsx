"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Project",
    href: "https://www.datascienceportfol.io/jiryan_farokhi",
    external: true,
  },
  { label: "About Me", href: "/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-2xl font-bold text-slate-100">
          Jiryan<span className="text-blue-400">.</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-7 font-mono text-sm tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:jiryanfarokhi@gmail.com"
            className="rounded-full bg-blue-500 px-5 py-2 font-mono text-sm font-medium text-slate-950 transition hover:bg-blue-400"
          >
            Hire me
          </Link>
        </div>
      </nav>
    </header>
  );
}
