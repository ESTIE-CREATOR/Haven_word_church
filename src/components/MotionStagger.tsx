
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, Children } from "react";

interface MotionStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
}

const MotionStagger = ({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.6,
}: MotionStaggerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default MotionStagger;
