"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "./contact-modal";
import { SocialLinks } from "./social-links";

export function HeroButtons() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        {/* Download Resume Button */}
        <a
          href="/cv/CV_Jiryan Farokhi.pdf"
          download="CV_Jiryan Farokhi.pdf"
          type="application/pdf"
          className="group flex items-center gap-2 rounded-full border border-blue-500 bg-transparent px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-blue-400 transition-all hover:bg-blue-500 hover:text-slate-950"
        >
          Download CV
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>

        {/* Get in Touch Button */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-slate-600 bg-transparent px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-slate-300 transition-all hover:border-blue-400 hover:text-blue-400"
        >
          Get in Touch
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
