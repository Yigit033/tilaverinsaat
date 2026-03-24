import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Story side */}
          <ScrollReveal>
            <div className="space-y-6">
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Hakkımızda
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                25 Yıllık Deneyim,{" "}
                <span className="text-primary">Güvenilir</span> Gelecek
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

          {/* Stats side */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
              <div className="border border-border p-8 text-center">
                <AnimatedCounter target={150} suffix="+" label="Tamamlanan Proje" />
              </div>
              <div className="border border-border p-8 text-center">
                <AnimatedCounter target={25} suffix="+" label="Yıllık Deneyim" />
              </div>
              <div className="border border-border p-8 text-center">
                <AnimatedCounter target={500} suffix="K+" label="m² İnşaat Alanı" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
