import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Maximize } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightboxGallery from "@/components/LightboxGallery";
import PageTransition from "@/components/PageTransition";

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

  const infoItems = [
    { icon: MapPin, label: "Konum", value: project.location },
    { icon: Calendar, label: "Teslim", value: project.completionDate },
    { icon: Maximize, label: "Alan", value: project.area },
    { icon: ArrowLeft, label: "Kategori", value: project.category }, // Temporary icon, will check for better one
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <div className="relative h-[60vh] md:h-[75vh]">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider mb-6 hover:gap-3 transition-all group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Tüm Projeler
                </Link>
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    {project.title}
                  </motion.h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content with sticky sidebar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="max-w-2xl mb-16">
                <div className="h-px w-16 bg-primary mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">Proje Hakkında</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                  {project.description}
                </p>
              </div>

              {/* Horizontal scroll gallery with lightbox */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">Proje Görselleri</h3>
                <LightboxGallery images={project.gallery} title={project.title} />
              </div>
            </motion.div>

            {/* Sticky sidebar */}
            <motion.aside
              className="lg:sticky lg:top-28 lg:self-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="border border-border p-8 space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Proje Bilgisi</h3>
                <div className="h-px bg-border" />
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm text-foreground font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
                <div className="h-px bg-border" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Durum</div>
                  <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold ${
                    project.status === "Tamamlandı" ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <button
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-wider font-semibold hover:bg-primary/90 transition-colors"
                >
                  Bu Proje Hakkında Bilgi Al
                </button>
              </div>
            </motion.aside>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
