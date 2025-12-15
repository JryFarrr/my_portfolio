"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, BookOpen, Rocket, BarChart3 } from "lucide-react";

// Notebook Projects Data (Data Science Competition Projects)
const notebookProjects = [
  {
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn using ensemble methods. Built for GAMMAFEST Data Science Competition.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    github: "https://github.com/JryFarr",
    image: "/images/projects/notebook-1.png",
  },
  {
    title: "Sentiment Analysis NLP",
    description: "Natural Language Processing project for sentiment analysis on Indonesian text using deep learning.",
    tags: ["Python", "TensorFlow", "NLTK", "Transformers"],
    github: "https://github.com/JryFarr",
    image: "/images/projects/notebook-2.png",
  },
  {
    title: "Time Series Forecasting",
    description: "Time series analysis and forecasting for supply chain optimization. Collaboration with Japanese partners.",
    tags: ["Python", "Prophet", "ARIMA", "Statsmodels"],
    github: "https://github.com/JryFarr",
    image: "/images/projects/notebook-3.png",
  },
];

// Deployed Projects Data
const deployedProjects: typeof notebookProjects = [
  // Add your deployed projects here
  // {
  //   title: "Project Name",
  //   description: "Project description",
  //   tags: ["Tech1", "Tech2"],
  //   github: "https://github.com/JryFarr/project",
  //   image: "/images/projects/deployed-1.png",
  // },
];

// Data Visualization Projects Data
const visualizationProjects: typeof notebookProjects = [
  // Add your visualization projects here
  // {
  //   title: "Dashboard Name",
  //   description: "Dashboard description",
  //   tags: ["Power BI", "Tableau"],
  //   github: "https://github.com/JryFarr/project",
  //   image: "/images/projects/viz-1.png",
  // },
];

const tabs = [
  { 
    id: "notebook", 
    label: "Notebook Projects", 
    icon: BookOpen,
    description: "Data Science Projects - Collection of competition and research projects"
  },
  { 
    id: "deployed", 
    label: "Deployed Projects", 
    icon: Rocket,
    description: "Production-ready applications and web services"
  },
  { 
    id: "visualization", 
    label: "Data Visualization", 
    icon: BarChart3,
    description: "Interactive dashboards and data visualizations"
  },
];

function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof notebookProjects[number]; 
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="group block h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80"
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          {project.image ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-6xl text-slate-700">📊</div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-6xl text-slate-700">📊</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          <div className="absolute right-3 top-3 rounded-full bg-slate-900/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
            <Github className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Project Info */}
        <div className="p-5">
          <h3 className="mb-2 text-lg font-semibold text-slate-50 transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

function EmptyState({ description }: { description: string }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-8 text-center">
      <div className="mb-4 rounded-full bg-slate-800 p-4">
        <Rocket className="h-8 w-8 text-slate-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-slate-400">Coming Soon</h3>
      <p className="max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("notebook");
  const [isVisible, setIsVisible] = useState(false);
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

  const getCurrentTab = () => tabs.find((tab) => tab.id === activeTab);
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
          {tabs.map((tab) => {
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
            <ProjectCard key={index} project={project} index={index} />
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
            href="https://github.com/JryFarr"
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
    </main>
  );
}
