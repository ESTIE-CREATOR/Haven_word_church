
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MotionInViewProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const MotionInView = ({
  children,
  className = "",
  duration = 0.6,
  delay = 0,
  direction = "up",
}: MotionInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 20, x: 0 };
      case "down":
        return { y: -20, x: 0 };
      case "left":
        return { x: 100, y: 0 };
      case "right":
        return { x: -100, y: 0 };
      default:
        return { y: 20, x: 0 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initial }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionInView;
