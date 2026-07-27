import { motion } from "motion/react";

const techSkills = [
  { name: "HTML", color: "#FF5E5E" },
  { name: "CSS", color: "#7B61FF" },
  { name: "JavaScript", color: "#FFB347" },
  { name: "Figma", color: "#22D3C7" },
  { name: "Python", color: "#A78BFA" },
  { name: "Canva", color: "#FF5E5E" },
  { name: "CapCut", color: "#22D3C7" },
  { name: "Microsoft Office", color: "#7B61FF" },
  { name: "Git / GitHub", color: "#FFB347" },
  { name: "Node.js", color: "#22D3C7" },
  { name: "Express.js", color: "#A78BFA" },
  { name: "UI/UX Design", color: "#FF5E5E" },
];

const softSkills = [
  "Public Speaking",
  "Critical Thinking",
  "Communication",
  "Teamwork",
  "Project Management",
  "Cross-functional Leadership",
  "Research Methodology",
  "Data Visualization",
];

const languages = [
  { lang: "Bahasa Indonesia", level: "Native", pct: 100, color: "#FF5E5E" },
  { lang: "English", level: "Intermediate", pct: 65, color: "#7B61FF" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(123,97,255,0.3), transparent)" }}
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
            style={{ color: "#22D3C7", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            MY TOOLKIT
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3C7, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <p
              className="mb-5 text-xs tracking-widest"
              style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              TECHNICAL SKILLS
            </p>
            <div className="flex flex-wrap gap-3">
              {techSkills.map(({ name, color }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="px-4 py-2 rounded-full text-sm flex items-center gap-2 cursor-default transition-all duration-200"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                    color,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = `${color}22`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color}60`;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = `${color}12`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`;
                    (e.currentTarget as HTMLDivElement).style.transform = "none";
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: color }}
                  />
                  {name}
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-10">
              <p
                className="mb-5 text-xs tracking-widest"
                style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                LANGUAGES
              </p>
              <div className="flex flex-col gap-4">
                {languages.map(({ lang, level, pct, color }) => (
                  <div key={lang}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          color: "#E8E8FF",
                          fontSize: "0.88rem",
                        }}
                      >
                        {lang}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${color}18`,
                          color,
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      >
                        {level}
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                          background: `linear-gradient(90deg, ${color}, ${color}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p
              className="mb-5 text-xs tracking-widest"
              style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              SOFT SKILLS
            </p>
            <div className="flex flex-col gap-2">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(123,97,255,0.08)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(123,97,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: ["#7B61FF", "#22D3C7", "#FF5E5E", "#FFB347", "#A78BFA"][i % 5],
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#C0C0E0",
                      fontSize: "0.87rem",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
