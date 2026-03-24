import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

type Filter = "all" | "Tamamlandı" | "Devam Ediyor";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const filters: { label: string; value: Filter }[] = [
    { label: "Tümü", value: "all" },
    { label: "Tamamlanan", value: "Tamamlandı" },
    { label: "Devam Eden", value: "Devam Ediyor" },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="h-px w-16 bg-primary mx-auto mb-6" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Projelerimiz
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mt-4">
              Öne Çıkan <span className="text-primary">Projeler</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-6 py-2.5 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/project/${project.id}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                        Detaylar →
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${
                          project.status === "Tamamlandı"
                            ? "bg-primary text-primary-foreground"
                            : "bg-foreground text-background"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="pt-5 pb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
