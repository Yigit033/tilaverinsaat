import { forwardRef } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = forwardRef<HTMLDivElement>((_, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <div ref={ref}>
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-[3px] z-50 origin-top bg-border/20"
      >
        <motion.div
          className="w-full bg-primary origin-top"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />
      </motion.div>
    </div>
  );
});

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
