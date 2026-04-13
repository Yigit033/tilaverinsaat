import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, forwardRef } from "react";

const Preloader = forwardRef<HTMLDivElement, { onComplete: () => void }>(
  ({ onComplete }, ref) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 600);
      }, 1200);
      return () => clearTimeout(timer);
    }, [onComplete]);

    return (
      <div ref={ref}>
        <AnimatePresence>
          {show && (
            <motion.div
              className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                    TİLAVER
                  </span>
                  <motion.span
                    className="text-2xl md:text-3xl font-light tracking-widest text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    YAPI
                  </motion.span>
                </motion.div>
                <motion.div
                  className="h-px bg-primary mt-4 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Preloader.displayName = "Preloader";

export default Preloader;
