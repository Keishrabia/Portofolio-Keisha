import { useState } from "react";
import { motion } from "motion/react";
import { X, ZoomIn, FileText } from "lucide-react";

import bestCoachImg from "../../imports/Salinan_E-Certificate_RnR_-_June.png";
import uiUxImg from "../../imports/UI_UX_Gdgoc_.png";
import bestProjectImg from "../../imports/Best_project_hitlab_web_dev.jpg";
import winterPeakPdf from "../../imports/Winter_peak_AFL_Keisha_Mutiara_Qalba.pdf?url";
import summerPeakPdf from "../../imports/Salinan_Certificate_Keisha_Mutiara_Qalbia.pdf?url";
import hitlabPdf from "../../imports/Hitlab_web_dev_Keisha_Mutiara_Qalbia.pdf?url";

type CertItem = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "image" | "pdf";
  src: string;
  thumbnail?: string;
  color: string;
  badge?: string;
};

const certificates: CertItem[] = [
  {
    id: "best-coach",
    title: "Best Coach Award",
    issuer: "AIESEC Future Leaders — Summer Peak 2026",
    date: "Jun 2026",
    type: "image",
    src: bestCoachImg,
    color: "#FFB347",
    badge: "🏆 Award",
  },
  {
    id: "summer-peak",
    title: "Certificate of Appreciation — Coach",
    issuer: "AIESEC Future Leaders, Summer Peak 2026",
    date: "Apr–Jun 2026",
    type: "pdf",
    src: summerPeakPdf,
    color: "#22D3C7",
    badge: "Leadership",
  },
  {
    id: "winter-peak",
    title: "Certificate of Appreciation — Delegate",
    issuer: "AIESEC Future Leaders, Winter Peak 2025",
    date: "Nov–Dec 2025",
    type: "pdf",
    src: winterPeakPdf,
    color: "#7B61FF",
    badge: "Leadership",
  },
  {
    id: "best-project",
    title: "Best Final Project — Web Developer",
    issuer: "HITLAB Tech Class, UIN Syarif Hidayatullah Jakarta",
    date: "2026",
    type: "image",
    src: bestProjectImg,
    color: "#22D3C7",
    badge: "🏆 Award",
  },
  {
    id: "hitlab-webdev",
    title: "Certificate of Appreciation — Web Development",
    issuer: "HITLAB Tech Class, UIN Syarif Hidayatullah Jakarta",
    date: "2026",
    type: "pdf",
    src: hitlabPdf,
    color: "#A78BFA",
    badge: "Certification",
  },
  {
    id: "uiux-gdgoc",
    title: "Certificate — UI/UX Design Class",
    issuer: "KasirPintar × Google Developer Group on Campus UIN Jakarta",
    date: "Jan–Feb 2026",
    type: "image",
    src: uiUxImg,
    color: "#FF5E5E",
    badge: "Certification",
  },
];

export default function Certificates() {
  const [active, setActive] = useState<CertItem | null>(null);

  return (
    <section id="certificates" className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)" }}
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
            style={{ color: "#A78BFA", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            CREDENTIALS
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Certificates &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #22D3C7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Credentials
            </span>
          </h2>
        </motion.div>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              onClick={() => setActive(cert)}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${cert.color}25`,
                background: `linear-gradient(135deg, ${cert.color}0A, rgba(255,255,255,0.02))`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}55`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${cert.color}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}25`;
                (e.currentTarget as HTMLDivElement).style.transform = "none";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Thumbnail area */}
              <div
                className="relative w-full overflow-hidden flex items-center justify-center"
                style={{ height: "160px", background: `${cert.color}10` }}
              >
                {cert.type === "image" ? (
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* PDF thumbnail — show a styled placeholder with PDF icon */
                  <div className="flex flex-col items-center gap-2 p-4 text-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${cert.color}20` }}
                    >
                      <FileText size={28} style={{ color: cert.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: `${cert.color}CC`, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      PDF Certificate
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(8,8,18,0.55)", backdropFilter: "blur(2px)" }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                    style={{ background: cert.color, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <ZoomIn size={14} />
                    View
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    className="leading-snug"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      color: "#E8E8FF",
                      fontSize: "0.88rem",
                    }}
                  >
                    {cert.title}
                  </h3>
                  {cert.badge && (
                    <span
                      className="flex-shrink-0 px-2 py-0.5 rounded-full text-xs"
                      style={{
                        background: `${cert.color}18`,
                        color: cert.color,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.68rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {cert.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    color: "#7A7A9A",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {cert.issuer}
                </p>
                <p
                  className="mt-1"
                  style={{
                    color: cert.color,
                    fontSize: "0.72rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(8,8,18,0.88)", backdropFilter: "blur(12px)" }}
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{
              background: "#0F0F22",
              border: `1px solid ${active.color}40`,
              boxShadow: `0 0 60px ${active.color}20`,
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-start justify-between gap-3 px-5 py-4"
              style={{ borderBottom: `1px solid ${active.color}20` }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    color: "#E8E8FF",
                    fontSize: "1rem",
                  }}
                >
                  {active.title}
                </h3>
                <p
                  style={{
                    color: "#7A7A9A",
                    fontSize: "0.8rem",
                    fontFamily: "'DM Sans', sans-serif",
                    marginTop: "2px",
                  }}
                >
                  {active.issuer} · {active.date}
                </p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="p-1.5 rounded-lg transition-colors duration-150 flex-shrink-0"
                style={{ color: "#7A7A9A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#E8E8FF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#7A7A9A";
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal content */}
            <div className="overflow-auto" style={{ maxHeight: "calc(90vh - 72px)" }}>
              {active.type === "image" ? (
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-auto block"
                />
              ) : (
                <iframe
                  src={active.src}
                  title={active.title}
                  className="w-full block"
                  style={{ height: "70vh", border: "none" }}
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
