import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, hsl(37 40% 60% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(37 40% 60% / 0.1) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-primary mx-auto mb-6" />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
              Tilaver İnşaat
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Geleceği{" "}
          <span className="text-primary">İnşa</span>{" "}
          Ediyoruz
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Modern, güvenilir ve sürdürülebilir projeler
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Projelerimizi Keşfet
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-primary text-primary font-semibold uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Teklif Al
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Keşfet</span>
        <ChevronDown className="w-5 h-5 text-primary animate-scroll-hint" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
