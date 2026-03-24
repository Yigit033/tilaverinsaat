import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Maximize } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Proje bulunamadı</h1>
          <Link to="/" className="text-primary hover:underline">Ana sayfaya dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider mb-6 hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Tüm Projeler
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" /> {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" /> {project.completionDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Maximize className="w-4 h-4 text-primary" /> {project.area}
                </span>
                <span className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${
                  project.status === "Tamamlandı" ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
                }`}>
                  {project.status}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="max-w-3xl mb-16">
            <div className="h-px w-16 bg-primary mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Proje Hakkında</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
              {project.description}
            </p>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Proje Görselleri</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  className="aspect-[4/3] overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
