import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, ArrowDown, MapPin, Phone, Download } from "lucide-react";
import cvFile from "../../imports/CV_Keisha_Mutiara_Qalbia_Sistem_Informasi_1251440158.pdf?url";
import profilePhoto from "../../imports/foto_coach_5x4.jpeg";

const roles = [
  "Information Systems Student",
  "Frontend Developer",
  "UI/UX Designer",
  "Data Analyst",
  "Project Manager",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <span style={{ color: "#22D3C7" }}>
      {displayed}
      <span
        className="inline-block w-0.5 h-5 ml-0.5 align-middle"
        style={{
          background: "#22D3C7",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,199,0.08) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-32 left-12 w-12 h-12 rounded-lg rotate-12 opacity-20 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #7B61FF, #A78BFA)" }}
      />
      <div
        className="absolute bottom-40 right-16 w-8 h-8 rounded-full opacity-25 pointer-events-none"
        style={{ background: "#FF5E5E" }}
      />
      <div
        className="absolute top-1/2 left-8 w-5 h-5 rotate-45 opacity-20 pointer-events-none"
        style={{ background: "#22D3C7" }}
      />
      <div
        className="absolute top-24 right-1/4 w-6 h-6 rounded-full opacity-15 pointer-events-none"
        style={{ background: "#FFB347" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-6"
            style={{
              background: "rgba(123,97,255,0.12)",
              border: "1px solid rgba(123,97,255,0.3)",
              color: "#A78BFA",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#22D3C7" }}
            />
            Open to Opportunities
          </div>

          <p
            className="mb-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A7A9A",
              fontSize: "1rem",
            }}
          >
            Hello, I'm
          </p>

          <h1
            className="mb-3 leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              background: "linear-gradient(135deg, #E8E8FF 0%, #A78BFA 50%, #7B61FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.15,
            }}
          >
            Keisha Mutiara
            <br />
            Qalbia
          </h1>

          <div
            className="text-base mb-5 h-7"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            <TypingText />
          </div>

          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A7A9A",
              fontSize: "0.95rem",
              maxWidth: "480px",
              lineHeight: 1.75,
            }}
          >
            Information Systems student at UIN Syarif Hidayatullah Jakarta,
            specializing in Data Analysis, Digital Media Research, and Tech
            Project Management. Google Student Ambassador & AIESEC Best Coach.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: MapPin, text: "Jakarta, Indonesia" },
              { icon: Mail, text: "mutiaraqalbiakeisha@email.com" },
              { icon: Phone, text: "+6285782841392" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "#7A7A9A", fontFamily: "'DM Sans', sans-serif" }}
              >
                <Icon size={13} style={{ color: "#7B61FF" }} />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("#contact")}
              className="px-7 py-3 rounded-full text-sm text-white flex items-center gap-2 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #7B61FF, #A78BFA)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                boxShadow: "0 0 24px rgba(123,97,255,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(123,97,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(123,97,255,0.35)";
              }}
            >
              <Mail size={15} />
              Get In Touch
            </button>
            <a
              href={cvFile}
              download="CV_Keisha_Mutiara_Qalbia_Sistem_Informasi.pdf"
              className="px-7 py-3 rounded-full text-sm flex items-center gap-2 transition-all duration-200"
              style={{
                border: "1px solid rgba(123,97,255,0.4)",
                color: "#E8E8FF",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                background: "rgba(123,97,255,0.06)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(123,97,255,0.14)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(123,97,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(123,97,255,0.06)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(123,97,255,0.4)";
              }}
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Outer decorative ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #7B61FF, #FF5E5E, #22D3C7, #7B61FF)",
                padding: "3px",
                borderRadius: "50%",
                transform: "scale(1.08)",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 180deg, #22D3C7, #A78BFA, #FF5E5E, #22D3C7)",
                padding: "2px",
                borderRadius: "50%",
                transform: "scale(1.04)",
                opacity: 0.5,
                animation: "spin 5s linear infinite reverse",
              }}
            />

            {/* Avatar circle */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(123,97,255,0.3)",
                boxShadow: "0 0 60px rgba(123,97,255,0.2)",
              }}
            >
              <img
                src={profilePhoto}
                alt="Keisha Mutiara Qalbia"
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ color: "#7A7A9A" }}
      >
        <span
          className="text-xs"
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
        >
          SCROLL
        </span>
        <ArrowDown size={14} style={{ animation: "bounce 2s infinite" }} />
      </motion.button>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg) scale(1.08); }
          to { transform: rotate(360deg) scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
}
