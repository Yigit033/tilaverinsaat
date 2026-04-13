import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <WhyChooseUs />
        <ProcessTimeline />

        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Index;
