import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, partners } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="h-px w-16 bg-primary mx-auto mb-6" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Referanslar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mt-4">
              Müşterilerimiz <span className="text-primary">Ne Diyor?</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center relative">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-8" />
            <div className="min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-8 italic">
                    "{testimonials[current].quote}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{testimonials[current].name}</div>
                    <div className="text-sm text-primary">{testimonials[current].company}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-20 border-t border-border pt-12">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              İş Ortaklarımız
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-sm md:text-base font-semibold text-muted-foreground/40 hover:text-primary/60 transition-colors uppercase tracking-wider"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
