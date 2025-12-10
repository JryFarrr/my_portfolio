"use client";

import Image from "next/image";

export function ProfileCircle({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Animated rotating circle border */}
      <svg
        className="absolute h-[250px] w-[250px] animate-spin-slow sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dashed circle segments */}
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="rgb(59, 130, 246)"
          strokeWidth="3"
          strokeDasharray="40 20"
          strokeLinecap="round"
          fill="none"
          className="opacity-80"
        />
        {/* Accent dots on the circle */}
        <circle cx="200" cy="10" r="6" fill="rgb(59, 130, 246)" />
        <circle cx="390" cy="200" r="6" fill="rgb(59, 130, 246)" />
        <circle cx="200" cy="390" r="6" fill="rgb(59, 130, 246)" />
        <circle cx="10" cy="200" r="6" fill="rgb(59, 130, 246)" />
      </svg>

      {/* Second rotating circle (opposite direction) */}
      <svg
        className="absolute h-[220px] w-[220px] animate-spin-slow-reverse sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px] lg:h-[330px] lg:w-[330px]"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="175"
          cy="175"
          r="165"
          stroke="rgb(59, 130, 246)"
          strokeWidth="2"
          strokeDasharray="30 40 10 40"
          strokeLinecap="round"
          fill="none"
          className="opacity-50"
        />
      </svg>

      {/* Profile image container */}
      <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full border-4 border-blue-500/30 bg-slate-900 sm:h-[210px] sm:w-[210px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px]">
        <Image
          src={imageSrc}
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
