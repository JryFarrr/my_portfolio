import { ProfileCircle } from "@/components/profile-circle";
import { StatsCounter } from "@/components/stats-counter";
import { HeroContent } from "@/components/hero-content";
import { HeroButtons } from "@/components/hero-buttons";
import { summary, portraitImagePath } from "@/data/resume";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_60%)]" />

      {/* Hero Section - Full viewport height with stats included */}
      <section className="flex min-h-[calc(100vh-80px)] flex-col justify-between py-8">
        {/* Main Hero Content */}
        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          {/* Left Content */}
          <div className="space-y-4">
            <HeroContent summary={summary} />

            {/* CTA and Social Links */}
            <div className="pt-2">
              <HeroButtons />
            </div>
          </div>

          {/* Right Content - Profile Image with Animated Circle */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCircle imageSrc={portraitImagePath} />
          </div>
        </div>

        {/* Stats Section - Always visible without scrolling */}
        <div className="border-t border-slate-800/50 pt-6">
          <StatsCounter />
        </div>
      </section>
    </main>
  );
}

