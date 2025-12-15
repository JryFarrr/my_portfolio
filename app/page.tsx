import { ProfileCircle } from "@/components/profile-circle";
import { HeroContent } from "@/components/hero-content";
import { HeroButtons } from "@/components/hero-buttons";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { AcademicsSection } from "@/components/academics-section";
import { summary, portraitImagePath } from "@/data/resume";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_60%)]" />

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-70px)] flex-col md:min-h-[calc(100vh-80px)]">
        {/* Main Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6 lg:flex-row lg:gap-10 lg:py-8">
          {/* Profile Image - Always first on mobile */}
          <div className="flex justify-center lg:order-2 lg:flex-1 lg:justify-end">
            <ProfileCircle imageSrc={portraitImagePath} />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center space-y-4 text-center lg:order-1 lg:flex-1 lg:items-start lg:text-left">
            <HeroContent summary={summary} />

            {/* CTA and Social Links */}
            <div className="flex justify-center pt-2 lg:justify-start">
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Academics Section */}
      <AcademicsSection />
    </main>
  );
}

