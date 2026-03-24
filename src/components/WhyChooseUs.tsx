import { Award, Clock, Eye, Gem } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Award,
    title: "Mühendislik Mükemmelliği",
    desc: "Alanında uzman mühendis kadromuz, en karmaşık projeleri bile kusursuz bir şekilde hayata geçirir.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    desc: "Projelerimizi belirlenen takvim dahilinde, hiçbir kalite standardından ödün vermeden teslim ediyoruz.",
  },
  {
    icon: Eye,
    title: "Şeffaf Süreç",
    desc: "Her aşamada müşterilerimizi bilgilendirir, şeffaf ve dürüst bir iletişim politikası izleriz.",
  },
  {
    icon: Gem,
    title: "Kaliteli Malzeme",
    desc: "Yalnızca en yüksek standartlara sahip, sertifikalı yapı malzemelerini kullanarak uzun ömürlü projeler inşa ediyoruz.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="h-px w-16 bg-primary mx-auto mb-6" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Farkımız
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mt-4 tracking-tight">
              Neden <span className="text-primary font-display italic">Tilaver</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <motion.div
                className="group border border-border p-8 text-center hover:border-primary/50 transition-all duration-500 h-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <r.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {r.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
