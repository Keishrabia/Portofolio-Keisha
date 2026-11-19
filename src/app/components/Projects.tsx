import { motion } from "motion/react"
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Code2,
  Eye,
  FileDown,
  Github,
  Presentation,
  Trophy,
  X,
} from "lucide-react"
import bacReportFile from "../../imports/Laporan_BAC_PT_Lion_Solusi_Sejahtera.pdf?url"
import businessAnalysisReportDetail from "../../imports/project-business-analysis-report-detail.png"
import businessAnalysisReportOverview from "../../imports/project-business-analysis-report-overview.png"
import compfestSoilColab from "../../imports/project-compfest-soil-colab.png"
import compfestSoilKaggle from "../../imports/project-compfest-soil-kaggle.png"
import projectFigmaDashboard from "../../imports/project-figma-dashboard.png"
import mediaMlDashboard from "../../imports/project-media-ml-dashboard.png"
import mediaMlPrediction from "../../imports/project-media-ml-prediction.png"
import mediaMonitoringDashboard from "../../imports/project-media-monitoring-dashboard.png"
import mediaMonitoringDataset from "../../imports/project-media-monitoring-dataset.png"
import projectPureFlow from "../../imports/project-pureflow.png"

type ProjectLink = {
  label: string
  url: string
  kind: "prototype" | "presentation" | "repository" | "dashboard" | "app" | "notebook" | "download"
  downloadFileName?: string
}

type ProjectImage = {
  src: string
  alt: string
  caption: string
}

type Project = {
  title: string
  subtitle: string
  role: string
  period: string
  description: string
  points: string[]
  tags: string[]
  award: string | null
  color: string
  gradient: string
  image?: string
  imageAlt?: string
  additionalImages?: ProjectImage[]
  links?: ProjectLink[]
}

const projects: Project[] = [
  {
    title: "UIN Jakarta Media Monitoring Dashboard",
    subtitle: "Media Monitoring & Reputation Analysis",
    role: "Media Analyst Intern — Pusat Informasi dan Humas UIN Jakarta",
    period: "Present",
    description:
      "An end-to-end media monitoring workflow that captures external coverage of UIN Jakarta, structures key media attributes, and transforms the data into an interactive Looker Studio dashboard for communication evaluation and decision-making.",
    points: [
      "Monitor and recap coverage from external online media related to UIN Jakarta, including source links, article titles, and relevant keywords.",
      "Classify each article by media tier, source credibility, sentiment, tone, and issue type to create a consistent analytical dataset.",
      "Visualize publication volume, sentiment composition, coverage trends, and media-tier distribution in Google Looker Studio.",
      "Synthesize monthly findings into conclusions and communication recommendations to support institutional reputation management.",
    ],
    tags: [
      "Google Looker Studio",
      "Google Sheets",
      "Media Monitoring",
      "Sentiment Analysis",
      "Data Visualization",
    ],
    award: null,
    color: "#16B8B1",
    gradient:
      "linear-gradient(135deg, rgba(22,184,177,0.13), rgba(22,184,177,0.03))",
    image: mediaMonitoringDashboard,
    imageAlt:
      "Dashboard monitoring pemberitaan UIN Jakarta dengan ringkasan sentimen dan distribusi media",
    additionalImages: [
      {
        src: mediaMonitoringDataset,
        alt: "Dataset media monitoring berisi sumber, judul berita, media tier, kredibilitas, kata kunci, sentimen, dan tone",
        caption: "Structured media monitoring dataset",
      },
    ],
    links: [
      {
        label: "Buka Dashboard Looker Studio",
        url: "https://datastudio.google.com/reporting/5a5d80a3-8a72-4c1d-8f8f-6f8eb3311f0d",
        kind: "dashboard",
      },
    ],
  },
  {
    title: "Media Monitoring ML",
    subtitle: "AI/ML Sentiment & Media Prediction",
    role: "Machine Learning Developer & Data Analyst",
    period: "Jan 2027",
    description:
      "An applied machine learning project developed from UIN Jakarta media monitoring data to analyze sentiment distribution and media composition, then predict the sentiment, tone, and topic of future news coverage.",
    points: [
      "Prepared historical media monitoring data as a structured machine learning dataset containing headlines, media tiers, topics, sentiment, and tone.",
      "Developed an NLP-based classification workflow to predict sentiment, tone, and news topics from article headlines.",
      "Analyzed sentiment distribution and media proportions to produce a data-driven outlook for UIN Jakarta coverage in January 2027.",
      "Built and deployed an interactive Streamlit application combining an instant prediction interface with an exploratory monitoring dashboard.",
    ],
    tags: ["Python", "Streamlit", "Machine Learning", "NLP", "Data Analysis"],
    award: null,
    color: "#E34B5B",
    gradient:
      "linear-gradient(135deg, rgba(227,75,91,0.13), rgba(227,75,91,0.03))",
    image: mediaMlPrediction,
    imageAlt:
      "Antarmuka Media Monitoring ML untuk memprediksi sentimen, tone, dan topik berita",
    additionalImages: [
      {
        src: mediaMlDashboard,
        alt: "Dashboard Media Monitoring ML dengan statistik dan grafik sebaran sentimen",
        caption: "Interactive sentiment and media monitoring dashboard",
      },
    ],
    links: [
      {
        label: "Buka Aplikasi Streamlit",
        url: "https://media-monitoring-ml-dfqo5bnr5x6psskbunf8kr.streamlit.app/",
        kind: "app",
      },
    ],
  },
  {
    title: "Soil Organic Matter Prediction",
    subtitle: "Kaggle Data Science Academy — COMPFEST 18",
    role: "Data Science Competitor",
    period: "2026",
    description:
      "A machine learning regression project for the Data Science Academy COMPFEST 18 competition organized by Universitas Indonesia. The challenge focused on predicting soil organic matter from geographic attributes and compressed optical and mid-infrared spectral features.",
    points: [
      "Explored geographic, sampling, and high-dimensional spectral features to understand their relationship with soil organic matter.",
      "Designed a preprocessing strategy for incomplete MIR spectral data, preserving valuable samples while reducing the impact of missing laboratory measurements.",
      "Prepared categorical and numerical features, evaluated regression approaches, and generated predictions for the Kaggle competition dataset.",
      "Built a reproducible Google Colab workflow covering data inspection, preprocessing, model development, validation, and submission generation.",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Regression",
      "Spectral Data",
      "Missing Data",
      "Kaggle",
    ],
    award: null,
    color: "#20BEFF",
    gradient:
      "linear-gradient(135deg, rgba(32,190,255,0.13), rgba(32,190,255,0.03))",
    image: compfestSoilColab,
    imageAlt:
      "Google Colab berisi eksplorasi dataset prediksi kandungan bahan organik tanah",
    additionalImages: [
      {
        src: compfestSoilKaggle,
        alt: "Halaman submission kompetisi Data Science Academy COMPFEST 18 di Kaggle",
        caption: "Kaggle competition submission",
      },
    ],
    links: [
      {
        label: "Buka Notebook Google Colab",
        url: "https://colab.research.google.com/drive/1A7w2-YxjwREIxlibVyOAFcS5MaS5PW_j?usp=sharing",
        kind: "notebook",
      },
    ],
  },
  {
    title: "B2B Sales Process Redesign",
    subtitle: "Business Analyst Competition — PT Lion Solusi Sejahtera",
    role: "Business Analyst (Team-based)",
    period: "2026",
    description:
      "A business analysis case project focused on redesigning the B2B sales process at PT Lion Solusi Sejahtera, a total water management company. The analysis identified fragmented manual reporting and the absence of a standardized customer pipeline as key barriers to faster conversion and data-driven management decisions.",
    points: [
      "Mapped the existing end-to-end sales process and analyzed operational bottlenecks using quantitative findings and root cause analysis.",
      "Identified risks including unreachable prospects, duplicate data entry, human error, inconsistent follow-up, and customer history loss during sales turnover.",
      "Designed a centralized digital reporting flow with real-time monitoring, automated follow-up reminders, and integrated historical customer records.",
      "Proposed a standardized pipeline from prospecting to closing, supported by a redesigned SOP, to-be swimlane, impact projection, and implementation roadmap.",
    ],
    tags: [
      "Business Process Analysis",
      "Root Cause Analysis",
      "Sales Pipeline",
      "Process Redesign",
      "Data Analysis",
      "SOP Design",
    ],
    award: null,
    color: "#3B82F6",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.13), rgba(59,130,246,0.03))",
    image: businessAnalysisReportOverview,
    imageAlt:
      "Halaman awal laporan redesign proses sales B2B PT Lion Solusi Sejahtera",
    additionalImages: [
      {
        src: businessAnalysisReportDetail,
        alt: "Executive summary dan analisis proses sales PT Lion Solusi Sejahtera",
        caption: "Executive summary and as-is process analysis",
      },
    ],
    links: [
      {
        label: "Buka Analisis Google Colab",
        url: "https://colab.research.google.com/drive/1bRoFlQ-q888F9CdERCtP5Mr14TDOZowP?usp=sharing",
        kind: "notebook",
      },
      {
        label: "Download Laporan BAC",
        url: bacReportFile,
        kind: "download",
        downloadFileName: "Laporan_BAC_PT_Lion_Solusi_Sejahtera.pdf",
      },
    ],
  },
  {
    title: "PureFlow",
    subtitle: "Household Water Usage Monitoring Website",
    role: "Frontend Developer & Project Manager",
    period: "Feb 2026 – Mar 2026",
    description:
      "A website supporting SDGs goals on clean water and sustainability, featuring a water debit calculator, geolocation integration, and a usage statistics dashboard.",
    points: [
      "Led project planning, task delegation, and progress tracking.",
      "Built core features: water debit calculator, geolocation, usage stats dashboard.",
      "Implemented responsive frontend interface improving usability across devices.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    award: "Best Final Project Award",
    color: "#22D3C7",
    gradient:
      "linear-gradient(135deg, rgba(34,211,199,0.12), rgba(34,211,199,0.03))",
    image: projectPureFlow,
    imageAlt:
      "Cover presentasi PureFlow Smart Water Monitoring System untuk SDG 6",
    links: [
      {
        label: "Lihat Presentasi Canva",
        url: "https://canva.link/d167c8bsohed49k",
        kind: "presentation",
      },
      {
        label: "Lihat Repository GitHub",
        url: "https://github.com/udinburgh/PureFlow",
        kind: "repository",
      },
    ],
  },
  {
    title: "Smart Cashier App Redesign",
    subtitle: "Figma Project",
    role: "UI/UX Designer (Team-based)",
    period: "Jan 2026 – Feb 2026",
    description:
      "Evaluated user interaction pain points to optimize navigation flows, reducing transaction steps and operational errors in a cashier application.",
    points: [
      "Evaluated user interaction pain points to optimize navigation flows.",
      "Reduced transaction steps and user operational errors.",
      "Collaborated through ideation, prototyping, and iterative design reviews.",
    ],
    tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
    award: null,
    color: "#7B61FF",
    gradient:
      "linear-gradient(135deg, rgba(123,97,255,0.12), rgba(123,97,255,0.03))",
    image: projectFigmaDashboard,
    imageAlt: "Tampilan dashboard mobile Smart Cashier App",
    links: [
      {
        label: "Buka Prototype Figma",
        url: "https://www.figma.com/proto/Zi7ZdKjlY39vsb4o1LUZli/Wireframe-grup-17?node-id=58-36&starting-point-node-id=58%3A36&t=JjBNV6gGbSpdrJEY-1",
        kind: "prototype",
      },
    ],
  },
  {
    title: "The Escape Room",
    subtitle: "Survive the Digital Maze",
    role: "Project Team Member",
    period: "Nov 2025 – Dec 2025",
    description:
      "Designed an interactive escape-room experience promoting digital literacy aligned with SDGs goals, focused on online safety and digital awareness.",
    points: [
      "Designed concept and user flow for an interactive escape-room experience.",
      "Aligned project with SDGs goals for digital literacy.",
      "Created problem-solving scenarios focused on online safety.",
    ],
    tags: ["UX Design", "Digital Literacy", "SDGs", "Teamwork"],
    award: null,
    color: "#FFB347",
    gradient:
      "linear-gradient(135deg, rgba(255,179,71,0.12), rgba(255,179,71,0.03))",
  },
]

function ProjectGallery({
  project,
  galleryId,
}: {
  project: Project
  galleryId: string
}) {
  if (!project.image) return null

  const images: ProjectImage[] = [
    {
      src: project.image,
      alt: project.imageAlt ?? project.title,
      caption: project.title,
    },
    ...(project.additionalImages ?? []),
  ]

  const scrollGallery = (direction: -1 | 1) => {
    const gallery = document.getElementById(galleryId)
    if (!gallery) return

    gallery.scrollBy({
      left: direction * gallery.clientWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative bg-black">
      <div
        id={galleryId}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={`Galeri ${project.title}`}
      >
        {images.map((image, index) => (
          <figure
            key={image.src}
            className="relative min-w-full snap-center bg-black"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[16/9] h-auto w-full object-contain"
            />
            <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#080812]/85 px-3 py-2 text-xs text-[#B6B6CE] backdrop-blur-md">
              <span>{image.caption}</span>
              {images.length > 1 && (
                <span className="flex-shrink-0 text-[#7A7A9A]">
                  {index + 1} / {images.length}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Gambar sebelumnya"
            onClick={() => scrollGallery(-1)}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#080812]/85 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-[#161632] focus-visible:outline-none focus-visible:ring-2"
            style={{ ["--tw-ring-color" as string]: project.color }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Gambar berikutnya"
            onClick={() => scrollGallery(1)}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#080812]/85 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-[#161632] focus-visible:outline-none focus-visible:ring-2"
            style={{ ["--tw-ring-color" as string]: project.color }}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  )
}

function ProjectPreview({ project }: { project: Project }) {
  const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const dialogId = `${projectSlug}-project-dialog`
  const triggerId = `${projectSlug}-project-trigger`
  const galleryId = `${projectSlug}-project-gallery`

  return (
    <>
      <button
        id={triggerId}
        type="button"
        className="group/preview relative flex h-full w-full flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080812]"
        style={{
          background: project.gradient,
          borderColor: `${project.color}25`,
          boxShadow: "0 18px 42px rgba(0,0,0,0.22)",
          ["--tw-ring-color" as string]: project.color,
        }}
        aria-label={`Lihat detail ${project.title}`}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        onClick={() =>
          (document.getElementById(
            dialogId,
          ) as HTMLDialogElement | null)?.showModal()
        }
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/25">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover/preview:scale-[1.035]"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${project.color}24, transparent 65%)`,
              }}
            >
              <Eye
                size={34}
                style={{ color: project.color }}
                className="opacity-65 transition-transform duration-300 group-hover/preview:scale-110"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080812]/80 via-transparent to-transparent opacity-70" />
          <span
            className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs opacity-0 backdrop-blur-md transition-all group-hover/preview:translate-x-0.5 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100"
            style={{
              background: "rgba(8,8,18,0.82)",
              borderColor: `${project.color}45`,
              color: "#E8E8FF",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            <Eye size={14} style={{ color: project.color }} />
            Lihat detail project
          </span>
        </div>

        <div className="flex w-full items-center justify-between gap-4 p-5">
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              color: "#E8E8FF",
              fontSize: "1rem",
              lineHeight: 1.45,
            }}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="flex-shrink-0 transition-transform group-hover/preview:-translate-y-0.5 group-hover/preview:translate-x-0.5"
            style={{ color: project.color }}
          />
        </div>
      </button>

      <dialog
        id={dialogId}
        aria-labelledby={`${dialogId}-title`}
        aria-describedby={`${dialogId}-description`}
        className="fixed inset-0 m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-xl border-0 bg-transparent p-0 text-left backdrop:bg-black/80"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        onClose={() => document.getElementById(triggerId)?.focus()}
      >
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            background: "#0F0F22",
            boxShadow: `0 30px 100px ${project.color}25`,
          }}
        >
          <button
            type="button"
            aria-label="Tutup detail project"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border text-[#E8E8FF] backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2"
            style={{
              background: "rgba(8,8,18,0.8)",
              borderColor: `${project.color}40`,
              ["--tw-ring-color" as string]: project.color,
            }}
            onClick={(event) => event.currentTarget.closest("dialog")?.close()}
          >
            <X size={17} />
          </button>

          <ProjectGallery project={project} galleryId={galleryId} />

          <div className="p-5 sm:p-7">
            <div className="pr-7">
              <div
                className="mb-1 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{
                  color: project.color,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {project.subtitle}
              </div>
              <h3
                id={`${dialogId}-title`}
                className="text-xl sm:text-2xl"
                style={{
                  color: "#E8E8FF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                }}
              >
                {project.title}
              </h3>
              <p
                id={`${dialogId}-description`}
                className="pt-2"
                style={{
                  color: "#9A9ABB",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: `${project.color}18`,
                  color: project.color,
                }}
              >
                {project.role}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#9A9ABB]">
                {project.period}
              </span>
              {project.award && (
                <span className="flex items-center gap-1.5 rounded-full bg-[#FFB347]/10 px-3 py-1 text-xs font-semibold text-[#FFB347]">
                  <Trophy size={12} />
                  {project.award}
                </span>
              )}
            </div>

            <ul className="my-6 flex flex-col gap-2.5">
              {project.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#A5A5C3]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: project.color }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#8A8AAA]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.links && (
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.links.map((link, index) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.kind === "download" ? undefined : "_blank"}
                    rel={
                      link.kind === "download"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    download={link.downloadFileName}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm transition-all hover:-translate-y-0.5 sm:w-auto"
                    style={{
                      background:
                        index === 0 ? project.color : `${project.color}0D`,
                      borderColor:
                        index === 0 ? project.color : `${project.color}45`,
                      color: index === 0 ? "#FFFFFF" : project.color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      boxShadow:
                        index === 0 ? `0 12px 30px ${project.color}30` : "none",
                    }}
                  >
                    {link.kind === "repository" ? (
                      <Github size={17} />
                    ) : link.kind === "presentation" ? (
                      <Presentation size={17} />
                    ) : link.kind === "dashboard" ? (
                      <BarChart3 size={17} />
                    ) : link.kind === "app" ? (
                      <BrainCircuit size={17} />
                    ) : link.kind === "notebook" ? (
                      <Code2 size={17} />
                    ) : link.kind === "download" ? (
                      <FileDown size={17} />
                    ) : null}
                    {link.label}
                    {link.kind !== "repository" && link.kind !== "download" && (
                      <ArrowUpRight size={17} />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,94,94,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="mb-2 text-sm tracking-widest"
            style={{
              color: "#FFB347",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            PORTFOLIO
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFB347, #FF5E5E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <ProjectPreview project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
