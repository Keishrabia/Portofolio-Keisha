import { motion } from "motion/react";
import { GraduationCap, Users, Trophy, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: "6+", label: "Organizations & Community", color: "#7B61FF" },
  { icon: Briefcase, value: "4+", label: "Projects", color: "#FF5E5E" },
  { icon: Trophy, value: "3", label: "Awards", color: "#FFB347" },
  { icon: GraduationCap, value: "2025", label: "Started Uni", color: "#22D3C7" },
];

const education = [
  {
    school: "UIN Syarif Hidayatullah Jakarta",
    degree: "Information Systems",
    period: "2025 – Present",
    color: "#7B61FF",
  },
  {
    school: "SMAN 3 Tangerang Selatan",
    degree: "Student of Science",
    period: "2022 – 2025",
    color: "#22D3C7",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="mb-2 text-sm tracking-widest"
            style={{ color: "#7B61FF", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            ABOUT ME
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Passionate about tech,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B61FF, #22D3C7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              data & people.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — summary + education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#9A9ABB",
                fontSize: "0.95rem",
                lineHeight: 1.9,
              }}
            >
              I'm an Information Systems student at UIN Syarif Hidayatullah Jakarta with
              a proven track record in{" "}
              <span style={{ color: "#A78BFA", fontWeight: 600 }}>Data Analysis</span>,{" "}
              <span style={{ color: "#22D3C7", fontWeight: 600 }}>Digital Media Research</span>
              , and{" "}
              <span style={{ color: "#FF5E5E", fontWeight: 600 }}>Tech Project Management</span>.
              I've served as a Google Student Ambassador, earned the Best Coach award at
              AIESEC, and led cross-functional teams to build award-winning projects.
              Skilled in both qualitative & quantitative research, data visualization,
              and frontend development.
            </p>

            {/* Education */}
            <div>
              <p
                className="mb-4 text-xs tracking-widest"
                style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                EDUCATION
              </p>
              <div className="flex flex-col gap-3">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-1 h-full self-stretch rounded-full flex-shrink-0"
                      style={{ background: edu.color, minHeight: "40px", width: "3px" }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          color: "#E8E8FF",
                          fontSize: "0.9rem",
                        }}
                      >
                        {edu.school}
                      </p>
                      <p
                        className="mt-0.5"
                        style={{
                          color: "#7A7A9A",
                          fontSize: "0.8rem",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {edu.degree} · {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-2xl flex flex-col gap-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color}40`;
                    (e.currentTarget as HTMLDivElement).style.background = `${color}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: "2rem",
                        color,
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#7A7A9A",
                        fontSize: "0.8rem",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
