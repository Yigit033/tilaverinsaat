import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-tight text-foreground">
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
                  className="text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
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
            <button
              onClick={() => handleClick("#contact")}
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-wider font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Teklif Al
            </button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-2xl uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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
