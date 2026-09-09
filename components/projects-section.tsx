"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Github, BookOpen, Rocket, BarChart3, Play } from "lucide-react";
import { VideoModal } from "./video-modal";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image: string;
  videoUrl?: string;
}

// Notebook Projects Data (Data Science & Machine Learning Projects)
const notebookProjects: ProjectItem[] = [
  {
    title: "Satria Data [Penyisihan] - Top 8 From 400 Teams",
    description: "Klasifikasi sentimen video konten reels instagram. Menggunakan ekstraksi text dari audio dengan Whisper Small, sentiment analysis dengan TF-IDF dan Logistic Regression serta Hyperparameter Tuning.",
    tags: ["Sentiment Analysis", "NLP", "Scikit-learn", "Machine Learning Models", "Classification"],
    github: "https://www.kaggle.com/code/fadheliqbal/text-sisi-bdc",
    image: "/images/projects/satdat_penyisihan.png"
  },
  {
    title: "Predictive Analytics on Sustainable Energy",
    description: "In-depth statistical analysis and feature engineering on combined energy, weather, and solar datasets to understand and model energy baseline behavior under varying weather conditions.",
    tags: ["Time Series", "Scikit-learn", "Machine Learning Models", "Forecasting", "Seasonality Patterns"],
    github: "https://colab.research.google.com/drive/1FBj7IoJlln0Bgmgmf4RhjuRtFbjPVhsT?usp=sharing",
    image: "/images/projects/predictive_analytics.jpg",
  },
  {
    title: "Commodity Price Prediction",
    description: "Predict commodity price in Indonesia from various province using Global Commodity Price, Google Trend, and Currency Value data.",
    tags: ["Time Series", "Scikit-learn", "Machine Learning Models", "Forecasting", "Economic Data"],
    github: "https://www.kaggle.com/code/jiryanfarokhi/arkavidia",
    image: "/images/projects/Commodity_Price_Prediction(Arkavidia ITB).png",
  },
  {
    title: "Time Series Predict Sales in GPBL Japan",
    description: "Predict sales from stores using Random Forest, XGBoost, and feature engineering. Project for International Experience in Japan.",
    tags: ["Time Series", "Machine Learning Models", "Forecasting", "Economic Data"],
    github: "https://github.com/JryFarrr/timeseries-predictsales-gpbljapan/tree/main",
    image: "/images/projects/gpbl.png",
  },
  {
    title: "Motion Fall/Non-Fall Classification",
    description: "Machine learning models to solve Motion Fall Classification from video frame data using custom flow system for training and prediction.",
    tags: ["Computer Vision", "Pytorch", "Deep Learning Models", "Detection", "Classification", "Workflow System"],
    github: "https://github.com/JryFarrr/Motion-Fall-Detection",
    image: "/images/projects/motion.jpeg",
  },
  {
    title: "Matos Fashion Classification",
    description: "Multilabel classification of clothing (Hoodie, Shirt) and colors using Segmentation preprocessing and Resnet50 model.",
    tags: ["Computer Vision", "Pytorch", "Deep Learning models", "Classification", "Segmentation"],
    github: "https://github.com/JryFarrr/matos-fashion-classification",
    image: "/images/projects/fashion.jpg",
  },
  {
    title: "Customer Churn Prediction",
    description: "Predict customer churn using Decision Tree classification model.",
    tags: ["Regression", "Scikit-learn", "Machine Learning Models"],
    github: "https://github.com/JryFarrr/Customer-Churn-Prediction-Using-Decision-Tree",
    image: "/images/projects/churn.png",
  },
  {
    title: "2024 Indonesian Presidential Election OCR (GAMMAFEST)",
    description: "Extract information from Ballot Results using custom ONNX model. Implemented Grad-CAM for model analysis.",
    tags: ["Computer Vision", "Pytorch", "Deep Learning models", "OCR", "ONNX", "Grad-CAM"],
    github: "https://colab.research.google.com/drive/162dZDX5n-ecP7UzE-jVb6Y459GyF5Uno?usp=sharing",
    image: "/images/projects/ocr.jpg",
  },
];

// Deployed Projects Data (Full-stack & Web Applications)
const deployedProjects: ProjectItem[] = [
  {
    title: "Docs Q&A",
    description: "A NotebookLM-style AI tool that creates isolated notebooks and lets you chat with an AI that answers grounded in those sources only (PDF, pasted text, web URLs).",
    tags: ["Supabase", "Ollama", "Graph RAG", "LangChain", "FastAPI", "NextJS"],
    github: "https://github.com/JryFarrr/docs-qanda.git",
    image: "/images/projects/docsqanda.png",
    videoUrl: "https://youtu.be/dccRO2axlGA"
  },  
  {
    title: "Product Herbal Recommendation System",
    description: "A tool for sellers and resellers of herbal products (such as turmeric-tamarind drinks, honey, etc.) to identify products currently trending on TikTok and Instagram.",
    tags: ["Recommendation System", "Ollama", "Multi-Criteria Decision Analysis", "Data Mining", "Data Analysis", "Apify"],
    github: "https://github.com/JryFarrr/product-herbal-recommendations.git",
    image: "/images/projects/herbal-recommendations.jpeg",
  },
  {
    title: "IDX Stock Warehouse",
    description: "A daily ETL pipeline that tracks Indonesia's top 5 stocks and visualizes their gains, losses, and rupiah correlation.",
    tags: ["ETL", "Data Mining", "Database Managements", "SQL"],
    github: "https://github.com/JryFarrr/etl-mining",
    image: "/images/projects/etl-mining.png",
  },
  {
    title: "SoulMatch Website",
    description: "Full stack project using NEXT JS with Supabase integration. Features Admin and SuperAdmin services.",
    tags: ["Next JS", "Supabase", "PostgreSQL", "Full Stack Developments", "Database Management System"],
    github: "https://github.com/JryFarrr/tugas_web_ets.git",
    image: "/images/projects/soulmatch.jpg",
  },
  {
    title: "Content Engagement Dashboard (Satria Data Finalist)",
    description: "End-to-end project from scraping data to dashboard. Create content performance index that provides insightful recommendations for understanding the dashboard and use LLM for summarization and topic modelling.",
    tags: ["Whisper", "GEMINI API", "Docker", "FastAPI", "NextJS", "Sentiment Analysis", "Topic Modelling"],
    github: "https://github.com/JryFarrr/satria_data.git",
    image: "/images/projects/cgd.png",
    videoUrl: "https://youtu.be/zRa0SWblp6Y", // Video Demo URL
  },
  // {
  //   title: "Digital Narrative Analysis with LDA and LLM for Government Health Policy Evaluation",
  //   description: "This project offer a tool for automatically and systematically evaluating local news, YouTube news comments, and government policies.",
  //   tags: ["NLP", "GEMINI API", "Sentiment Analyst", "Recommendation System", "LDA", "RAG"],
  //   github: "https://github.com/JryFarrr/datmin_gemastik",
  //   image: "/images/projects/gemastik.jpeg",
  // },
  {
    title: "Intelligent Grading System",
    description: "End-to-end Automated Grading System using Machine Learning to automatically grade essay exams integrated with an exam web application.",
    tags: ["NLP", "Scikit-learn", "Hugging Face", "Machine Learning Models", "Next JS", "Automated Grading System", "Supabase"],
    github: "https://github.com/JryFarrr/i-grass.git",
    image: "/images/projects/igrass.png",
  },
  {
    title: "Mapleads AI - Google Maps Analytics",
    description: "API service to collect business data from Google Maps, analyze with OpenAI, and provide insights on strengths, weaknesses, and suitability.",
    tags: ["Integrated API", "Search API", "Open AI API", "Maps API", "Swagger Documentation"],
    github: "https://github.com/JryFarrr/boringai_project_gmaps_analytics",
    image: "/images/projects/mapleads.jpg",
  },
];

// Data Visualization Projects Data
const visualizationProjects: ProjectItem[] = [
  {
    title: "SMS International Transactions Dashboard",
    description: "This is my final year projects to visualize SMS International Transactions services from Telecommunication company in Indonesia. The dashboard is built using Google Looker Studio.",
    tags: ["Data Visualization", "Data Analysis", "Google Looker Studio"],
    github: "https://datastudio.google.com/reporting/81444e99-63d1-4bfa-8621-f2a6d508dd33",
    image: "/images/projects/smsinternational.png",
  },
  {
    title: "OMITS Sales Dashboard",
    description: "Dashboard to visualize sales of merchandise from OMITS (Olimpiade Matematika ITS 2022).",
    tags: ["Data Visualization", "Data Analysis", "Tableau"],
    github: "https://public.tableau.com/views/ProjectKPP_BOOM/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    image: "/images/projects/omits.png",
  },
  {
    title: "Road Accident Dashboard",
    description: "Individual project about Road Accident Dashboard in US using Tableau.",
    tags: ["Data Visualization", "Data Analysis", "Tableau"],
    github: "https://public.tableau.com/views/Project2_16995032921010/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    image: "/images/projects/road.png",
  },
  {
    title: "SQL Projects Collection",
    description: "Kumpulan projek Query SQL untuk menyelesaikan berbagai macam problem.",
    tags: ["SQL", "Data Query", "Data Warehousing"],
    github: "https://github.com/JryFarrr/projek_SQL.git",
    image: "/images/projects/sql.png",
  },
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
  index,
  onOpenVideo,
}: { 
  project: ProjectItem; 
  index: number; 
  onOpenVideo: (url: string, title: string) => void;
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
      <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-blue-400/50 dark:hover:bg-slate-900/80">
        <div>
          {/* Project Image Container */}
          <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-6xl text-slate-400 dark:text-slate-700">📊</div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            {/* Quick Actions overlay on top-right */}
            <div className="absolute right-3 top-3 flex items-center gap-2">
              {project.videoUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenVideo(project.videoUrl!, project.title);
                  }}
                  className="flex items-center gap-1.5 rounded-full bg-red-600/90 px-3 py-1 text-xs font-medium text-white shadow-md backdrop-blur-md transition-all hover:bg-red-500 hover:scale-105"
                  title="Watch Video Demo"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>Demo</span>
                </button>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900/80 p-2 text-white shadow-md backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-105"
                title="View Code on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-2"
            >
              <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-50 dark:group-hover:text-blue-400">
                {project.title}
              </h3>
            </a>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          </div>
        </div>

        {/* Card Footer: Tags & Demo CTA */}
        <div className="p-5 pt-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-lg border border-slate-200 bg-slate-100/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.videoUrl && (
            <button
              onClick={() => onOpenVideo(project.videoUrl!, project.title)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 py-2 text-xs font-semibold text-red-600 transition-all hover:border-red-500/50 hover:bg-red-500/20 dark:text-red-400"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Watch Video Demo</span>
            </button>
          )}
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

  const getCurrentTab = () => tabs.find((tab) => tab.id === activeTab);
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
          {tabs.map((tab) => {
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
              onOpenVideo={handleOpenVideo}
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
