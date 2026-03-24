import { useEffect, useRef, useState, forwardRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = forwardRef<HTMLDivElement, AnimatedCounterProps>(
  ({ target, suffix = "", label, duration = 2 }, ref) => {
    const [count, setCount] = useState(0);
    const internalRef = useRef(null);
    const isInView = useInView(internalRef, { once: true });

    useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const step = target / (duration * 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return (
      <motion.div
        ref={(node) => {
          (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
          {label}
        </div>
      </motion.div>
    );
  }
);

AnimatedCounter.displayName = "AnimatedCounter";

export default AnimatedCounter;
