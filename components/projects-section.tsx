"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Github,
  BookOpen,
  Rocket,
  BarChart3,
  Play,
  X,
  ExternalLink,
  Target,
  Globe,
  FileText,
} from "lucide-react";
import { VideoModal } from "./video-modal";

export { VideoModal };

interface ProjectLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProjectItem {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  image: string;
  github?: string;
  videoUrl?: string;
  notebookUrl?: string;
  dashboardUrl?: string;
  liveUrl?: string;
  reportUrl?: string;
}

// Notebook Projects Data (Data Science & Machine Learning Projects)
// NOTE: shared with app/projects/page.tsx — do not fork into a separate copy there.
export const notebookProjects: ProjectItem[] = [
  {
    title: "Satria Data [Penyisihan] - Top 8 From 400 Teams",
    description: "Instagram reels sentiment classification using audio-to-text extraction (Whisper), TF-IDF + Logistic Regression, and hyperparameter tuning.",
    impact: "Led the team in building an end-to-end social media NLP pipeline.",
    tags: ["Sentiment Analysis", "NLP", "Scikit-learn", "Machine Learning Models", "Classification"],
    notebookUrl: "https://www.kaggle.com/code/fadheliqbal/text-sisi-bdc",
    reportUrl : "https://docs.google.com/document/d/1jgo3M4LxjZ9CIIGI7F8QQaManMJzUOyFQ90DnSl7JiA/edit?usp=sharing",
    image: "/images/projects/satdat_penyisihan.png"
  },
  {
    title: "Predictive Analytics on Sustainable Energy",
    description: "Statistical analysis and feature engineering on energy, weather, and solar datasets to model energy baseline behavior under varying conditions.",
    impact: "Weather-aware energy baseline modeling for forecasting.",
    tags: ["Time Series", "Scikit-learn", "Machine Learning Models", "Forecasting", "Seasonality Patterns"],
    notebookUrl: "https://colab.research.google.com/drive/1FBj7IoJlln0Bgmgmf4RhjuRtFbjPVhsT?usp=sharing",
    image: "/images/projects/predictive_analytics.jpg",
  },
  {
    title: "Commodity Price Prediction",
    description: "Predicts commodity prices across Indonesian provinces using global commodity prices, Google Trends, and currency data.",
    impact: "Forecasting commodity movements from multi-source economic signals.",
    tags: ["Time Series", "Scikit-learn", "Machine Learning Models", "Forecasting", "Economic Data"],
    notebookUrl: "https://www.kaggle.com/code/jiryanfarokhi/arkavidia",
    image: "/images/projects/Commodity_Price_Prediction(Arkavidia ITB).png",
  },
  {
    title: "Time Series Predict Sales in GPBL Japan",
    description: "Predicts store sales using Random Forest, XGBoost, and feature engineering.",
    impact: "Applied retail forecasting for an international program in Japan.",
    tags: ["Time Series", "Machine Learning Models", "Forecasting", "Economic Data"],
    github: "https://github.com/JryFarrr/timeseries-predictsales-gpbljapan/tree/main",
    image: "/images/projects/gpbl.png",
  },
  {
    title: "Motion Fall/Non-Fall Classification",
    description: "Classifies fall vs. non-fall motion from video frame data using deep learning with a custom training and prediction workflow.",
    impact: "Reliable fall-detection pipeline for video data.",
    tags: ["Computer Vision", "Pytorch", "Deep Learning Models", "Detection", "Classification", "Workflow System"],
    github: "https://github.com/JryFarrr/Motion-Fall-Detection",
    image: "/images/projects/motion.jpeg",
  },
  {
    title: "Matos Fashion Classification",
    description: "Multilabel classification of clothing and colors using segmentation preprocessing and a ResNet50 model.",
    impact: "Accurate apparel attribute recognition from images.",
    tags: ["Computer Vision", "Pytorch", "Deep Learning models", "Classification", "Segmentation"],
    github: "https://github.com/JryFarrr/matos-fashion-classification",
    image: "/images/projects/fashion.jpg",
  },
  {
    title: "Customer Churn Prediction",
    description: "Predicts customer churn with a Decision Tree classification model.",
    impact: "Early identification of customers at risk of churn.",
    tags: ["Regression", "Scikit-learn", "Machine Learning Models"],
    github: "https://github.com/JryFarrr/Customer-Churn-Prediction-Using-Decision-Tree",
    image: "/images/projects/churn.png",
  },
  {
    title: "2024 Indonesian Presidential Election OCR (GAMMAFEST)",
    description: "Extracts ballot result information with a custom ONNX model and Grad-CAM for model analysis.",
    impact: "Automated extraction of election ballot documents.",
    tags: ["Computer Vision", "Pytorch", "Deep Learning models", "OCR", "ONNX", "Grad-CAM"],
    notebookUrl: "https://colab.research.google.com/drive/162dZDX5n-ecP7UzE-jVb6Y459GyF5Uno?usp=sharing",
    image: "/images/projects/ocr.jpg",
  },
];

// Deployed Projects Data (Full-stack & Web Applications)
export const deployedProjects: ProjectItem[] = [
  {
    title: "Docs Q&A",
    description: "NotebookLM-style AI tool that creates isolated notebooks and answers questions grounded only in your sources (PDF, text, web URLs) with 4 agents: Summarizer, Analysis Report, Researcher, and Math.",
    impact: "Trustworthy AI Q&A with answers grounded in user-provided sources.",
    tags: ["Supabase", "Ollama", "Graph RAG", "LangChain", "FastAPI", "NextJS"],
    github: "https://github.com/JryFarrr/docs-qanda.git",
    image: "/images/projects/docsqanda.png",
    videoUrl: "https://youtu.be/dccRO2axlGA"
  },
  {
    title: "Content Engagement Dashboard (Satria Data Finalist)",
    description: "End-to-end project from data scraping to dashboard with a content performance index and LLM-powered summarization and topic modelling. Achieved Top 5 from 350+ teams in the Satria Data competition.",
    impact: "Actionable content insights with automated LLM analysis.",
    tags: ["Whisper", "GEMINI API", "Docker", "FastAPI", "NextJS", "Sentiment Analysis", "Topic Modelling"],
    github: "https://github.com/JryFarrr/satria_data.git",
    image: "/images/projects/cgd.png",
    videoUrl: "https://youtu.be/zRa0SWblp6Y", // Video Demo URL
  },
  {
    title: "Intelligent Grading System",
    description: "Automated essay grading with machine learning integrated into an exam web application. Funded 15M IDR by the ITS Research Grant 2025.",
    impact: "Faster and more consistent essay exam grading.",
    tags: ["NLP", "Scikit-learn", "Hugging Face", "Machine Learning Models", "Next JS", "Automated Grading System", "Supabase"],
    github: "https://github.com/JryFarrr/i-grass.git",
    liveUrl: "https://i-grass.vercel.app/",
    image: "/images/projects/igrass.png",
  },
  {
    title: "Mapleads AI - Google Maps Analytics",
    description: "API service that collects business data from Google Maps and analyzes it with OpenAI for strengths, weaknesses, and suitability.",
    impact: "Turns raw business listings into actionable insights.",
    tags: ["Integrated API", "Search API", "Open AI API", "Maps API", "Swagger Documentation"],
    github: "https://github.com/JryFarrr/boringai_project_gmaps_analytics",
    image: "/images/projects/mapleads.jpg",
  },
  {
    title: "Product Herbal Recommendation System",
    description: "Helps sellers and resellers of herbal products identify items currently trending on TikTok and Instagram.",
    impact: "Data-driven product selection based on social media trends.",
    tags: ["Recommendation System", "Ollama", "Multi-Criteria Decision Analysis", "Data Mining", "Data Analysis", "Apify"],
    github: "https://github.com/JryFarrr/product-herbal-recommendations.git",
    image: "/images/projects/herbal-recommendations.jpeg",
  },
  {
    title: "IDX Stock Warehouse",
    description: "Daily ETL pipeline tracking Indonesia's top 5 stocks and visualizing their gains, losses, and rupiah correlation.",
    impact: "Automated daily stock tracking and analysis.",
    tags: ["ETL", "Data Mining", "Database Managements", "SQL"],
    github: "https://github.com/JryFarrr/etl-mining",
    image: "/images/projects/etl-mining.png",
  },
  {
    title: "SoulMatch Website",
    description: "Full-stack Next.js project with Supabase integration, featuring Admin and SuperAdmin services.",
    impact: "Role-based management workflow on a full-stack platform.",
    tags: ["Next JS", "Supabase", "PostgreSQL", "Full Stack Developments", "Database Management System"],
    github: "https://github.com/JryFarrr/tugas_web_ets.git",
    image: "/images/projects/soulmatch.jpg",
  },
  
  // {
  //   title: "Digital Narrative Analysis with LDA and LLM for Government Health Policy Evaluation",
  //   description: "This project offer a tool for automatically and systematically evaluating local news, YouTube news comments, and government policies.",
  //   tags: ["NLP", "GEMINI API", "Sentiment Analyst", "Recommendation System", "LDA", "RAG"],
  //   github: "https://github.com/JryFarrr/datmin_gemastik",
  //   image: "/images/projects/gemastik.jpeg",
  // },
  {
    title: "Mapleads AI - Google Maps Analytics",
    description: "API service that collects business data from Google Maps and analyzes it with OpenAI for strengths, weaknesses, and suitability.",
    impact: "Turns raw business listings into actionable insights.",
    tags: ["Integrated API", "Search API", "Open AI API", "Maps API", "Swagger Documentation"],
    github: "https://github.com/JryFarrr/boringai_project_gmaps_analytics",
    image: "/images/projects/mapleads.jpg",
  },
];

// Data Visualization Projects Data
export const visualizationProjects: ProjectItem[] = [
  {
    title: "SMS International Transactions Dashboard",
    description: "Final-year dashboard visualizing SMS international transaction services for an Indonesian telecom company, built with Google Looker Studio.",
    impact: "Service usage insights for telecom operations.",
    tags: ["Data Visualization", "Data Analysis", "Google Looker Studio"],
    dashboardUrl: "https://datastudio.google.com/reporting/81444e99-63d1-4bfa-8621-f2a6d508dd33",
    image: "/images/projects/smsinternational.png",
  },
  {
    title: "OMITS Sales Dashboard",
    description: "Dashboard visualizing merchandise sales for OMITS (Olimpiade Matematika ITS 2022).",
    impact: "Clear sales overview for the event committee.",
    tags: ["Data Visualization", "Data Analysis", "Tableau"],
    dashboardUrl: "https://public.tableau.com/views/ProjectKPP_BOOM/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    image: "/images/projects/omits.png",
  },
  {
    title: "Road Accident Dashboard",
    description: "Analytics dashboard about road accidents in the US using Tableau.",
    impact: "Pattern discovery from US road accident data.",
    tags: ["Data Visualization", "Data Analysis", "Tableau"],
    dashboardUrl: "https://public.tableau.com/views/Project2_16995032921010/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    image: "/images/projects/road.png",
  },
  {
    title: "SQL Projects Collection",
    description: "Collection of SQL query projects solving a variety of data problems.",
    impact: "Strong SQL fundamentals applied across business cases.",
    tags: ["SQL", "Data Query", "Data Warehousing"],
    github: "https://github.com/JryFarrr/projek_SQL.git",
    image: "/images/projects/sql.png",
  },
];

export const projectsTabs = [
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

export function ProjectModal({
  project,
  onClose,
  onOpenVideo,
}: {
  project: ProjectItem;
  onClose: () => void;
  onOpenVideo: (url: string, title: string) => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const links: ProjectLink[] = [];
  if (project.videoUrl) {
    links.push({ label: "Demo Video", href: project.videoUrl, icon: Play });
  }
  if (project.notebookUrl) {
    links.push({ label: "View Notebook", href: project.notebookUrl, icon: BookOpen });
  }
  if (project.liveUrl) {
    links.push({ label: "Live Demo", href: project.liveUrl, icon: Globe });
  }
  if (project.dashboardUrl) {
    links.push({ label: "Open Dashboard", href: project.dashboardUrl, icon: BarChart3 });
  }
  if (project.reportUrl) {
    links.push({ label: "Project Report", href: project.reportUrl, icon: FileText });
  }
  if (project.github) {
    links.push({ label: "GitHub", href: project.github, icon: Github });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-lg bg-slate-900/70 p-1.5 text-white transition hover:bg-slate-900"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Banner Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl">
            {project.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          {/* Impact / Focus */}
          <div className="mb-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 dark:border-blue-400/20 dark:bg-blue-400/5">
            <div className="mb-1.5 flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Impact / Focus
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-lg border border-slate-200 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              if (link.label === "Demo Video") {
                return (
                  <button
                    key={link.label}
                    onClick={() => onOpenVideo(project.videoUrl!, project.title)}
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-500"
                  >
                    <Icon className="h-4 w-4 fill-current" />
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100/70 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-500/50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  onOpen: (project: ProjectItem) => void;
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
      <div
        onClick={() => onOpen(project)}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-blue-400/50 dark:hover:bg-slate-900/80"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onOpen(project);
        }}
      >
        {/* Project Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
        </div>

        {/* Project Info */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-50 dark:group-hover:text-blue-400">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mb-4 mt-auto flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-lg border border-slate-200 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="rounded-lg border border-slate-200 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* View CTA */}
          <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-blue-400">
            View Full Project
            <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ description }: { description: string }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100/50 p-8 text-center dark:border-slate-700 dark:bg-slate-900/30">
      <div className="mb-4 rounded-full bg-slate-200 p-4 dark:bg-slate-800">
        <Rocket className="h-8 w-8 text-slate-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-slate-700 dark:text-slate-400">Coming Soon</h3>
      <p className="max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("deployed");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [videoModalData, setVideoModalData] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
  });
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

  const handleOpenVideo = (url: string, title: string) => {
    setVideoModalData({
      isOpen: true,
      url,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const getCurrentTab = () => projectsTabs.find((tab) => tab.id === activeTab);
  const projects = getProjects();

  return (
    <section ref={ref} className="scroll-mt-24 border-t border-slate-200/80 py-16 transition-colors duration-300 dark:border-slate-800/80 md:py-24" id="projects">
      {/* Header */}
      <div
        className={`mb-8 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl md:text-4xl">Featured Projects</h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm md:text-base">
          Hands-on machine learning, distributed applications, and analytical dashboards built across academic research, client work, and competitions.
        </p>
      </div>

      {/* Tabs */}
      <div
        className={`mb-8 transform transition-all delay-200 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-slate-200/80 bg-slate-100/80 p-1.5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 sm:rounded-full">
          {projectsTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all sm:rounded-full ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-sm dark:bg-blue-500 dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
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
        className={`mb-8 transform transition-all delay-300 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{getCurrentTab()?.description}</p>
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

      {/* Full Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenVideo={handleOpenVideo}
        />
      )}

      {/* Video Demo Modal */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoModalData.url}
        title={videoModalData.title}
      />
    </section>
  );
}
