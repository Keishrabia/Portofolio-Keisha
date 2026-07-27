import { motion } from "motion/react";

const experiences = [
  {
    role: "Google Student Ambassador 2026",
    org: "Google",
    period: "Apr 2026 – Jul 2026",
    category: "Leadership",
    categoryColor: "#22D3C7",
    points: [
      "Analyzed digital media engagement and user behavior metrics across campus to optimize campaign strategies for AI adoption (Gemini & NotebookLM).",
      "Designed data-driven content and digital tutorials for academic presentation tools, evaluating audience feedback and reach across multiple faculties.",
    ],
  },
  {
    role: "Coach — AIESEC Future Leaders, Summer Peak 2026",
    org: "AIESEC",
    period: "Apr 2026 – Jun 2026",
    category: "Best Coach Award 🏆",
    categoryColor: "#FFB347",
    points: [
      "Mentored and coached a group of delegates throughout a 10-week leadership development program, guiding their personal growth and project execution.",
      'Recognized with the "Best Coach" award for outstanding mentorship, excellence in project guidance, and dedicated support.',
    ],
  },
  {
    role: "Delegate — AIESEC Future Leaders, Winter Peak 2025",
    org: "AIESEC",
    period: "Nov 2025 – Dec 2025",
    category: "Leadership",
    categoryColor: "#7B61FF",
    points: [
      "Completed a 7-week leadership development program covering communication, teamwork, and self-development.",
      "Collaborated in cross-functional teams to solve structured business simulations and project management challenges.",
    ],
  },
  {
    role: "Member",
    org: "Google Developer Group on Campus",
    period: "2025 – Present",
    category: "Tech Community",
    categoryColor: "#22D3C7",
    points: [
      "Actively participated in tech-related events, workshops, and knowledge-sharing sessions.",
      "Completed the Weekly UI/UX Design Class (Jan – Feb 2026), covering wireframing, prototyping, and user-centered design fundamentals.",
    ],
  },
  {
    role: "Member",
    org: "Fatahillah Researchers for Science and Humanity",
    period: "2025 – Present",
    category: "Research",
    categoryColor: "#A78BFA",
    points: [
      "Participated in structured research training covering research methodology, academic writing, and data analysis.",
      "Developed critical thinking and analytical skills through case studies and academic assignments.",
    ],
  },
  {
    role: "Treasurer",
    org: "N3TS Civic Club",
    period: "2022 – 2024",
    category: "Finance",
    categoryColor: "#FF5E5E",
    points: [
      "Managed cash flow for club activities, including receiving, distributing, and monitoring club funds.",
      "Prepared detailed financial reports each period, ensuring full transparency and accountability in fund usage.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,199,0.3), transparent)" }}
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
            style={{ color: "#FF5E5E", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            EXPERIENCE
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Organizations &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF5E5E, #FFB347)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Community
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #7B61FF, #22D3C7, #FF5E5E, transparent)" }}
          />

          <div className="flex flex-col gap-8 pl-12 md:pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.org}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-12 md:-left-16 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.categoryColor,
                    background: `${exp.categoryColor}20`,
                    marginLeft: "-8px",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: exp.categoryColor }}
                  />
                </div>

                <div
                  className="p-5 rounded-2xl transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.categoryColor}30`;
                    (e.currentTarget as HTMLDivElement).style.background = `${exp.categoryColor}06`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          color: "#E8E8FF",
                          fontSize: "0.95rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: "#7A7A9A",
                          fontSize: "0.82rem",
                          marginTop: "2px",
                        }}
                      >
                        {exp.org}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          background: `${exp.categoryColor}18`,
                          color: exp.categoryColor,
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.72rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.category}
                      </span>
                      <span
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "#7A7A9A",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.72rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: "#9A9ABB",
                          fontSize: "0.85rem",
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: exp.categoryColor }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
