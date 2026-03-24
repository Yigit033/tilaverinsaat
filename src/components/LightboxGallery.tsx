import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxGalleryProps {
  images: string[];
  title: string;
}

const LightboxGallery = ({ images, title }: LightboxGalleryProps) => {
  const [open, setOpen] = useState<number | null>(null);

  const navigate = (dir: 1 | -1) => {
    if (open === null) return;
    setOpen((open + dir + images.length) % images.length);
  };

  return (
    <>
      {/* Horizontal scroll gallery */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] overflow-hidden cursor-pointer snap-center"
            whileHover={{ scale: 0.98 }}
            onClick={() => setOpen(i)}
          >
            <img
              src={img}
              alt={`${title} - ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(null); }}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <AnimatePresence mode="wait">
              <motion.img
                key={open}
                src={images[open]}
                alt={`${title} - ${open + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
            <div className="absolute bottom-6 text-sm text-muted-foreground">
              {open + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LightboxGallery;
