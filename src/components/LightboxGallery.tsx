import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize } from "lucide-react";

interface LightboxGalleryProps {
  images: string[];
  title: string;
}

const LightboxGallery = forwardRef<HTMLDivElement, LightboxGalleryProps>(
  ({ images, title }, ref) => {
    const [open, setOpen] = useState<number | null>(null);

    const [inlineIndex, setInlineIndex] = useState(0);

    const navigate = (dir: 1 | -1) => {
      if (open === null) return;
      setOpen((open + dir + images.length) % images.length);
    };

    const navigateInline = (dir: 1 | -1) => {
      setInlineIndex((inlineIndex + dir + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
      <div ref={ref} className="w-full">
        {/* Main Slider View */}
        <div 
          className="relative aspect-[16/9] w-full overflow-hidden group cursor-pointer bg-secondary/20" 
          onClick={() => setOpen(inlineIndex)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={inlineIndex}
              src={images[inlineIndex]}
              alt={`${title} - ${inlineIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => { e.stopPropagation(); navigateInline(-1); }}
                className="p-3 bg-black/60 text-white rounded-none hover:bg-primary transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateInline(1); }}
                className="p-3 bg-black/60 text-white rounded-none hover:bg-primary transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
          
          <div className="absolute top-4 right-4 bg-black/60 px-4 py-2 text-xs md:text-sm text-white uppercase tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
            <Maximize className="w-4 h-4" />
            Büyüt
          </div>
        </div>

        {/* Thumbnails row */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-4 scrollbar-hide snap-x pt-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setInlineIndex(i)}
                className={`relative flex-shrink-0 w-24 md:w-32 aspect-[4/3] overflow-hidden snap-start transition-all duration-300 ${
                  inlineIndex === i 
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Küçük Görsel ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

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
      </div>
    );
  }
);

LightboxGallery.displayName = "LightboxGallery";

export default LightboxGallery;
