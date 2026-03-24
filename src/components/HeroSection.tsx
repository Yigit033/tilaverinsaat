import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background video with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[120%] object-cover"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-construction-site-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      {/* Animated subtle gradient accent */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content with text parallax */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          y: textY,
          opacity,
          x: mouse.x,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-block mb-6">
            <motion.div
              className="h-px bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
              Tilaver İnşaat
            </span>
          </div>
        </motion.div>

        {/* Headline with clip-path text reveal */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-foreground"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Geleceği{" "}
            <span className="text-primary">İnşa</span>{" "}
            Ediyoruz
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.p
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light tracking-wide"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Modern, güvenilir ve sürdürülebilir projeler
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Projelerimizi Keşfet</span>
            <motion.div
              className="absolute inset-0 bg-primary-foreground/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-primary text-primary font-semibold uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Teklif Al
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Keşfet</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
