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
                39 Yıllık Geçmiş,{" "}
                <span className="text-primary font-display italic">29 Yıllık İnşa</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                TİLAVER YAPI olarak, 1987 yılında başlayan inşaat serüvenimize sektörün en temelinden, çekirdekten yetişerek adım attık. Tam 39 yıllık bu derin köklü geçmişin üzerine, son 29 yıldır kendi adımızla projelere imza atıyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                İnşa ettiğimiz her yapıda, kendi yuvamıza gösterdiğimiz özen ve titizliği standart olarak benimsiyoruz. Her projemizde bu vizyonu koruyarak, yalnızca binalar değil, güven içinde yaşanacak yuvalar inşa etmeyi sürdürüyoruz.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
