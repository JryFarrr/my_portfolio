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
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold text-blue-400">
          JF
        </Link>
        <div className="flex items-center gap-7 text-base font-semibold tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="text-slate-200 transition hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
