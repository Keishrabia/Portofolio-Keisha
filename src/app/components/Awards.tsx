import { motion } from "motion/react";
import { Trophy, Medal, BookOpen, Award } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Coach Award",
    org: "AIESEC Future Leaders — Summer Peak 2026",
    desc: "Recognized for excellence in mentorship and participant development during a 10-week leadership program.",
    color: "#FFB347",
  },
  {
    icon: Trophy,
    title: "Best Final Project Award",
    org: "HITLAB Web Development Class",
    desc: "Earned for building an exemplary full-featured web application using HTML, CSS, JavaScript, and Node.js/Express — the PureFlow project.",
    color: "#22D3C7",
  },
  {
    icon: Medal,
    title: "AIESEC Future Leaders",
    org: "Winter Peak 2025 & Summer Peak 2026",
    desc: "Leadership development program focused on communication, teamwork, and self-development. Progressed from Delegate to Coach.",
    color: "#7B61FF",
  },
];

const certifications = [
  {
    icon: BookOpen,
    title: "Web Development Class",
    org: "HITLAB",
    details: "HTML, CSS, JavaScript, Git/GitHub, and backend basics with Node.js and Express.",
    color: "#22D3C7",
  },
  {
    icon: Award,
    title: "UI/UX Design Class",
    org: "Google Developer Groups on Campus",
    details: "Fundamentals of UI/UX design, including wireframing, prototyping, and user-centered design.",
    color: "#7B61FF",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,179,71,0.3), transparent)" }}
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
            RECOGNITION
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Awards &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFB347, #FF5E5E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Certifications
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Awards */}
          <div>
            <p
              className="mb-6 text-xs tracking-widest"
              style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              AWARDS & ACHIEVEMENTS
            </p>
            <div className="flex flex-col gap-4">
              {awards.map((award, i) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${award.color}10, rgba(255,255,255,0.02))`,
                      border: `1px solid ${award.color}25`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${award.color}50`;
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${award.color}25`;
                      (e.currentTarget as HTMLDivElement).style.transform = "none";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${award.color}20` }}
                    >
                      <Icon size={18} style={{ color: award.color }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          color: "#E8E8FF",
                          fontSize: "0.93rem",
                        }}
                      >
                        {award.title}
                      </h3>
                      <p
                        className="mt-0.5"
                        style={{
                          color: award.color,
                          fontSize: "0.78rem",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {award.org}
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          color: "#9A9ABB",
                          fontSize: "0.83rem",
                          fontFamily: "'DM Sans', sans-serif",
                          lineHeight: 1.6,
                        }}
                      >
                        {award.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p
              className="mb-6 text-xs tracking-widest"
              style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              CERTIFICATIONS & COURSES
            </p>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}10, rgba(255,255,255,0.02))`,
                      border: `1px solid ${cert.color}25`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}50`;
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}25`;
                      (e.currentTarget as HTMLDivElement).style.transform = "none";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${cert.color}20` }}
                    >
                      <Icon size={18} style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          color: "#E8E8FF",
                          fontSize: "0.93rem",
                        }}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className="mt-0.5"
                        style={{
                          color: cert.color,
                          fontSize: "0.78rem",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {cert.org}
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          color: "#9A9ABB",
                          fontSize: "0.83rem",
                          fontFamily: "'DM Sans', sans-serif",
                          lineHeight: 1.6,
                        }}
                      >
                        {cert.details}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Fun stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(123,97,255,0.1), rgba(34,211,199,0.06))",
                border: "1px solid rgba(123,97,255,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  color: "#E8E8FF",
                  fontSize: "0.9rem",
                  marginBottom: "6px",
                }}
              >
                Growing every day 🚀
              </p>
              <p
                style={{
                  color: "#9A9ABB",
                  fontSize: "0.82rem",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.65,
                }}
              >
                From delegate to coach at AIESEC, and from student to Best Project winner — always leveling up in both technical and leadership skills.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
