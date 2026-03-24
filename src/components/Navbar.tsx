import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const navLinks = [
    { label: "Hakkımızda", href: "#about" },
    { label: "Projeler", href: "#projects" },
    { label: "Neden Biz", href: "#why" },
    { label: "Süreç", href: "#process" },
    { label: "İletişim", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) return;
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              TİLAVER
            </span>
            <span className="text-xl md:text-2xl font-light tracking-widest text-primary">
              İNŞAAT
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              isHome ? (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="relative text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                >
                  {link.label}
                  {/* Animated underline for active section */}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary"
                      layoutId="activeNav"
                      transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    />
                  )}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className="text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
            <motion.button
              onClick={() => handleClick("#contact")}
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-wider font-semibold hover:bg-primary/90 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Teklif Al
            </motion.button>
          </div>

          <button
            className="lg:hidden text-foreground relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-2xl uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
