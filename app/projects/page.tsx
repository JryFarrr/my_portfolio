"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  notebookProjects,
  deployedProjects,
  visualizationProjects,
  projectsTabs,
  ProjectCard,
  ProjectModal,
  VideoModal,
  ProjectItem,
} from "@/components/projects-section";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("notebook");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getProjects = () => {
    switch (activeTab) {
      case "notebook":
        return notebookProjects;
      case "deployed":
        return deployedProjects;
      case "visualization":
        return visualizationProjects;
      default:
        return [];
    }
  };

  const getCurrentTab = () => projectsTabs.find((tab) => tab.id === activeTab);
  const projects = getProjects();

  return (
    <main ref={ref} className="mx-auto max-w-6xl px-4 pb-24 pt-24 md:px-6">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_60%)]" />

      {/* Header */}
      <div
        className={`mb-8 text-center transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="mb-4 text-4xl font-bold text-slate-50 md:text-5xl">Projects</h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          Gained tons of experience from lots of data projects.
          <br />
          Below are all of my works, feel free to check them out!
        </p>
      </div>

      {/* Tabs */}
      <div
        className={`mb-8 flex justify-center transform transition-all delay-200 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/50 p-1.5 backdrop-blur-sm">
          {projectsTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Description */}
      <div
        className={`mb-8 text-center transform transition-all delay-300 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-sm text-blue-400">{getCurrentTab()?.description}</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState
              description="Projects for this category will be added soon. Check back later for updates!"
            />
          </div>
        )}
      </div>

      {/* View More Link */}
      {projects.length > 0 && (
        <div
          className={`mt-12 text-center transform transition-all delay-500 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="https://github.com/JryFarrr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-blue-500 hover:text-blue-400"
          >
            <Github className="h-5 w-5" />
            View All on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}

      {/* Full Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenVideo={(url, title) => {
            setSelectedProject(null);
            setVideoUrl(url);
            setVideoTitle(title);
          }}
        />
      )}

      {/* Video Demo Modal */}
      <VideoModal
        isOpen={!!videoUrl}
        onClose={() => setVideoUrl("")}
        videoUrl={videoUrl}
        title={videoTitle}
      />
    </main>
  );
}

function EmptyState({ description }: { description: string }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-8 text-center">
      <div className="mb-4 rounded-full bg-slate-800 p-4">
        <Github className="h-8 w-8 text-slate-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-slate-400">Coming Soon</h3>
      <p className="max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}
