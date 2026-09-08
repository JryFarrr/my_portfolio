"use client";

import Image from "next/image";

export function ProfileCircle({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative flex items-center justify-center py-4 lg:py-6">
      {/* Animated rotating circle border */}
      <svg
        className="absolute h-[290px] w-[290px] animate-spin-slow sm:h-[350px] sm:w-[350px] md:h-[410px] md:w-[410px] lg:h-[460px] lg:w-[460px] xl:h-[490px] xl:w-[490px]"
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
        className="absolute h-[250px] w-[250px] animate-spin-slow-reverse sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px] xl:h-[430px] xl:w-[430px]"
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
      <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border-4 border-blue-500/30 bg-slate-900 shadow-xl sm:h-[270px] sm:w-[270px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[385px] xl:w-[385px]">
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
