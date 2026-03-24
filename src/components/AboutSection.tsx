import { forwardRef } from "react";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Hakkımızda
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.05] tracking-tight">
                25 Yıllık Deneyim,{" "}
                <span className="text-primary font-display italic">Güvenilir</span> Gelecek
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                Tilaver İnşaat, 1999 yılından bu yana Türkiye'nin dört bir yanında konut, ticari
                ve altyapı projelerine imza atmaktadır. Mühendislik mükemmelliği ve müşteri
                memnuniyetini temel alan yaklaşımımızla, sektörün en güvenilir isimlerinden biri
                olmanın gururunu yaşıyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                Her projemizde sürdürülebilirlik ilkesini benimsiyor, en yüksek kalite standartlarını
                uyguluyoruz. Geleceğin yaşam alanlarını bugünden inşa ediyoruz.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
              {[
                { target: 150, suffix: "+", label: "Tamamlanan Proje" },
                { target: 25, suffix: "+", label: "Yıllık Deneyim" },
                { target: 500, suffix: "K+", label: "m² İnşaat Alanı" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="border border-border p-8 text-center group hover:border-primary/50 transition-colors duration-500"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
