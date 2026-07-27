import { motion } from "motion/react";
import { ExternalLink, Trophy } from "lucide-react";

const projects = [
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
    gradient: "linear-gradient(135deg, rgba(34,211,199,0.12), rgba(34,211,199,0.03))",
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
    gradient: "linear-gradient(135deg, rgba(123,97,255,0.12), rgba(123,97,255,0.03))",
  },
  {
    title: "FRESH 2026",
    subtitle: "Inauguration & Work Meeting",
    role: "Event Division Committee",
    period: "Jan 2026 – Feb 2026",
    description:
      "Coordinated event preparation and logistics for an organizational inauguration and annual work meeting.",
    points: [
      "Coordinated event preparation and logistics end-to-end.",
      "Managed event timeline and cross-functional team coordination.",
      "Ensured smooth execution of the annual work meeting.",
    ],
    tags: ["Event Management", "Coordination", "Leadership"],
    award: null,
    color: "#FF5E5E",
    gradient: "linear-gradient(135deg, rgba(255,94,94,0.12), rgba(255,94,94,0.03))",
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
    gradient: "linear-gradient(135deg, rgba(255,179,71,0.12), rgba(255,179,71,0.03))",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,94,94,0.3), transparent)" }}
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
            style={{ color: "#FFB347", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
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
              className="p-6 rounded-2xl flex flex-col gap-4 group transition-all duration-300"
              style={{
                background: project.gradient,
                border: `1px solid ${project.color}25`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}50`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}25`;
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        color: "#E8E8FF",
                        fontSize: "1.05rem",
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.award && (
                      <span
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                        style={{
                          background: "rgba(255,179,71,0.15)",
                          color: "#FFB347",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.7rem",
                        }}
                      >
                        <Trophy size={10} />
                        {project.award}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      color: project.color,
                      fontSize: "0.8rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      marginTop: "2px",
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  style={{ color: "#7A7A9A", flexShrink: 0 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                />
              </div>

              {/* Role + period */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-2.5 py-1 rounded-full text-xs"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.73rem",
                  }}
                >
                  {project.role}
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "#7A7A9A",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.73rem",
                  }}
                >
                  {project.period}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9A9ABB",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                }}
              >
                {project.description}
              </p>

              {/* Bullet points */}
              <ul className="flex flex-col gap-1.5">
                {project.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#8A8AAA",
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "#7A7A9A",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.72rem",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
