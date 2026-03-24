import { motion } from "framer-motion";
import { ClipboardList, Pencil, HardHat, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { forwardRef } from "react";

const steps = [
  { icon: ClipboardList, title: "Planlama", desc: "İhtiyaç analizi ve fizibilite çalışmaları" },
  { icon: Pencil, title: "Tasarım", desc: "Mimari ve mühendislik projelerinin hazırlanması" },
  { icon: HardHat, title: "İnşaat", desc: "Kalite standartlarına uygun yapım süreci" },
  { icon: CheckCircle, title: "Teslimat", desc: "Proje teslimi ve satış sonrası destek" },
];

const ProcessTimeline = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="process" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="h-px w-16 bg-primary mx-auto mb-6" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Sürecimiz
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mt-4">
              Çalışma <span className="text-primary">Sürecimiz</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.15}>
                <div className="relative text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-background border-2 border-primary relative z-10"
                    whileHover={{ scale: 1.1, borderColor: "hsl(37, 50%, 75%)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <span className="text-xs text-primary font-bold tracking-widest mb-2 block">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProcessTimeline.displayName = "ProcessTimeline";

export default ProcessTimeline;
