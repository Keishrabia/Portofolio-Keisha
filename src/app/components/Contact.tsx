import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "mutiaraqalbiakeisha@email.com",
    href: "mailto:mutiaraqalbiakeisha@email.com",
    color: "#7B61FF",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 857 8284 1392",
    href: "tel:+6285782841392",
    color: "#22D3C7",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: null,
    color: "#FF5E5E",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Keishrabia", color: "#E8E8FF" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/keisha-mutiara-qalbia",
    color: "#0A66C2",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/keishrabia",
    color: "#E1306C",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
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
            style={{ color: "#7B61FF", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            LET'S CONNECT
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#E8E8FF",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B61FF, #22D3C7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — CTA + contact info */}
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
                lineHeight: 1.85,
              }}
            >
              I'm currently open to internship opportunities, collaborations, and
              interesting projects. Whether you're looking for a data-driven thinker,
              a frontend developer, or a passionate leader — I'd love to hear from you!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {contacts.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#7A7A9A",
                        fontSize: "0.73rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {label.toUpperCase()}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          color: "#E8E8FF",
                          fontSize: "0.88rem",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500,
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#E8E8FF")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "#E8E8FF",
                          fontSize: "0.88rem",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#7A7A9A",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${color}18`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}40`;
                    (e.currentTarget as HTMLAnchorElement).style.color = color;
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#7A7A9A";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(123,97,255,0.1) 0%, rgba(34,211,199,0.06) 100%)",
                border: "1px solid rgba(123,97,255,0.2)",
              }}
            >
              <div
                className="text-3xl mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                👋
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  color: "#E8E8FF",
                  fontSize: "1.3rem",
                  lineHeight: 1.3,
                }}
              >
                Ready to work together?
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9A9ABB",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}
              >
                Whether it's an internship, a project collaboration, or just a chat
                about tech and data — my inbox is always open.
              </p>
              <a
                href="mailto:mutiaraqalbiakeisha@email.com"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #7B61FF, #A78BFA)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  boxShadow: "0 0 20px rgba(123,97,255,0.3)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 32px rgba(123,97,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(123,97,255,0.3)";
                }}
              >
                <Mail size={15} />
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-20 pt-8 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A7A9A",
              fontSize: "0.82rem",
            }}
          >
            © 2026 Keisha Mutiara Qalbia. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A7A9A",
              fontSize: "0.82rem",
            }}
          >
            Built with{" "}
            <span style={{ color: "#FF5E5E" }}>♥</span>{" "}
            in Jakarta
          </p>
        </div>
      </div>
    </section>
  );
}
