import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 8, 18, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(123,97,255,0.18)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm"
            style={{ background: "linear-gradient(135deg, #7B61FF, #FF5E5E)" }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>KMQ</span>
          </div>
          <span
            className="hidden sm:block"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              color: "#E8E8FF",
              fontSize: "0.95rem",
            }}
          >
            Keisha Mutiara
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-sm transition-colors duration-200"
              style={{
                color: "#7A7A9A",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E8E8FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7A9A")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 rounded-full text-sm text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #7B61FF, #A78BFA)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: "#E8E8FF" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pb-6 pt-2"
            style={{ background: "rgba(8, 8, 18, 0.98)" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 px-4 rounded-lg text-sm transition-colors duration-150"
                  style={{
                    color: "#E8E8FF",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(123,97,255,0.12)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mt-3 py-3 rounded-full text-sm text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #7B61FF, #A78BFA)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
