"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Github, BookOpen, Rocket, BarChart3 } from "lucide-react";

// Notebook Projects Data (Data Science & Machine Learning Projects)
const notebookProjects = [
  {
    title: "Satria Data [Penyisihan] - Top 8 From 400 Teams",
    description: "Klasifikasi sentimen video konten reels instagram. Menggunakan ekstraksi text dari audio dengan Whisper Small, sentiment analysis dengan TF-IDF dan Logistic Regression serta Hyperparameter Tuning.",
    tags: ["Python", "NLP", "Data Science"],
    github: "https://www.kaggle.com/code/fadheliqbal/text-sisi-bdc",
    image: "/images/projects/satdat_penyisihan.png"
  },
  {
    title: "Predictive Analytics on Sustainable Energy",
    description: "In-depth statistical analysis and feature engineering on combined energy, weather, and solar datasets to understand and model energy baseline behavior under varying weather conditions.",
    tags: ["Data Science", "Time Series", "Machine Learning"],
    github: "https://colab.research.google.com/drive/1FBj7IoJlln0Bgmgmf4RhjuRtFbjPVhsT?usp=sharing",
    image: "/images/projects/predictive_analytics.jpg",
  },
  {
    title: "Commodity Price Prediction",
    description: "Predict commodity price in Indonesia from various province using Global Commodity Price, Google Trend, and Currency Value data.",
    tags: ["Time Series", "Machine Learning", "Data Science"],
    github: "https://www.kaggle.com/code/jiryanfarokhi/arkavidia",
    image: "/images/projects/Commodity_Price_Prediction(Arkavidia ITB).png",
  },
  {
    title: "Time Series Predict Sales in GPBL Japan",
    description: "Predict sales from stores using Random Forest, XGBoost, and feature engineering. Project for International Experience in Japan.",
    tags: ["Time Series", "Random Forest", "Machine Learning"],
    github: "https://github.com/JryFarrr/timeseries-predictsales-gpbljapan/tree/main",
    image: "/images/projects/japan.jpg",
  },
  {
    title: "Motion Fall/Non-Fall Classification",
    description: "Machine learning models to solve Motion Fall Classification from video frame data using custom flow system for training and prediction.",
    tags: ["Computer Vision", "Deep Learning", "Data Science"],
    github: "https://github.com/JryFarrr/Motion-Fall-Detection",
    image: "/images/projects/motion.jpeg",
  },
  {
    title: "Matos Fashion Classification",
    description: "Multilabel classification of clothing (Hoodie, Shirt) and colors using Segmentation preprocessing and Resnet50 model.",
    tags: ["Computer Vision", "Machine Learning", "Data Mining"],
    github: "https://github.com/JryFarrr/matos-fashion-classification",
    image: "/images/projects/fashion.jpg",
  },
  {
    title: "Customer Churn Prediction",
    description: "Predict customer churn using Decision Tree classification model.",
    tags: ["Data Science", "Machine Learning", "Classification"],
    github: "https://github.com/JryFarrr/Customer-Churn-Prediction-Using-Decision-Tree",
    image: "/images/projects/churn.png",
  },
  {
    title: "2024 Indonesian Presidential Election OCR (GAMMAFEST)",
    description: "Extract information from Ballot Results using custom ONNX model. Implemented Grad-CAM for model analysis.",
    tags: ["Computer Vision", "Machine Learning", "OCR"],
    github: "https://colab.research.google.com/drive/162dZDX5n-ecP7UzE-jVb6Y459GyF5Uno?usp=sharing",
    image: "/images/projects/ocr.jpg",
  },
];

// Deployed Projects Data (Full-stack & Web Applications)
const deployedProjects: typeof notebookProjects = [
  {
    title: "Graph RAG Knowledge Graph with Pubmed Data",
    description: "Website with Pubmed Data converted to TTL format. Built Knowledge Graph based on Neo4J with node extraction and graph relation for complex document understanding.",
    tags: ["Knowledge Graph", "LLM", "RAG", "Neo4J"],
    github: "https://github.com/JryFarrr/graph_rag.git",
    image: "/images/projects/graph_rag.png",
  },
  {
    title: "SoulMatch Website",
    description: "Full stack project using NEXT JS with Supabase integration. Features Admin and SuperAdmin services.",
    tags: ["Next JS", "Supabase", "PostgreSQL", "Full Stack"],
    github: "https://github.com/JryFarrr/tugas_web_ets.git",
    image: "/images/projects/soulmatch.jpg",
  },
  {
    title: "Content Engagement Dashboard (Satria Data Finalist)",
    description: "End-to-end project from scraping data to dashboard. Using Content Performance Index with PCA method. Use business acumen skills to create a content performance index that provides insightful recommendations for understanding the dashboard and use LLM for summarization and topic modelling.",
    tags: ["EDA", "NLP", "Next JS", "Docker", "Visualization"],
    github: "https://github.com/JryFarrr/satria_data.git",
    image: "/images/projects/cgd.png",
  },
  {
    title: "Digital Narrative Analysis with LDA and LLM for Government Health Policy Evaluation",
    description: "This project offer a tool for automatically and systematically evaluating local news, YouTube news comments, and government policies.",
    tags: ["NLP", "LLM", "Sentiment Analyst", "Recommendation System", "LDA", "RAG"],
    github: "https://github.com/JryFarrr/datmin_gemastik",
    image: "/images/projects/gemastik.jpg",
  }
  {
    title: "Intelligent Grading System",
    description: "End-to-end Automated Grading System using Machine Learning to automatically grade essay exams integrated with an exam web application.",
    tags: ["NLP", "Machine Learning", "Backend", "Frontend"],
    github: "https://github.com/JryFarrr/i-grass.git",
    image: "/images/projects/igrass.png",
  },
  {
    title: "Mapleads AI - Google Maps Analytics",
    description: "API service to collect business data from Google Maps, analyze with OpenAI, and provide insights on strengths, weaknesses, and suitability.",
    tags: ["NLP", "OpenAI API", "Machine Learning", "IBM"],
    github: "https://github.com/JryFarrr/boringai_project_gmaps_analytics",
    image: "/images/projects/mapleads.jpg",
  }
];

// Data Visualization Projects Data
const visualizationProjects: typeof notebookProjects = [
  {
    title: "OMITS Sales Dashboard",
    description: "Dashboard to visualize sales of merchandise from OMITS (Olimpiade Matematika ITS 2022).",
    tags: ["Data Visualization", "Data Analysis"],
    github: "https://public.tableau.com/views/ProjectKPP_BOOM/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    image: "/images/projects/omits.png",
  },
  {
    title: "Road Accident Dashboard",
    description: "Individual project about Road Accident Dashboard in US using Tableau.",
    tags: ["Tableau", "Data Visualization"],
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
        <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
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
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-8 text-center">
      <div className="mb-4 rounded-full bg-slate-800 p-4">
        <Rocket className="h-8 w-8 text-slate-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-slate-400">Coming Soon</h3>
      <p className="max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}

export function ProjectsSection() {
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
    <section ref={ref} className="py-16 md:py-24" id="projects">
      {/* Header */}
      <div
        className={`mb-8 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl">Projects</h2>
        <p className="max-w-2xl text-slate-400">
          Gained tons of experience from lots of data projects.
          Below are all of my works, feel free to check them out!
        </p>
      </div>

      {/* Tabs */}
      <div
        className={`mb-8 transform transition-all delay-200 duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-1.5 backdrop-blur-sm sm:rounded-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all sm:rounded-full ${
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
        className={`mb-8 transform transition-all delay-300 duration-700 ${
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

    </section>
  );
}
