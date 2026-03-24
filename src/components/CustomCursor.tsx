import { useEffect, useState, forwardRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = forwardRef<HTMLDivElement>((_, ref) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setVisible(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      }
    };
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={ref}>
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference rounded-full bg-white"
        animate={{
          x: pos.x - (hovering ? 20 : 5),
          y: pos.y - (hovering ? 20 : 5),
          width: hovering ? 40 : 10,
          height: hovering ? 40 : 10,
          opacity: hovering ? 0.5 : 0.8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.5 }}
      />
      <style>{`* { cursor: none !important; } @media (pointer: coarse) { * { cursor: auto !important; } }`}</style>
    </div>
  );
});

CustomCursor.displayName = "CustomCursor";

export default CustomCursor;
