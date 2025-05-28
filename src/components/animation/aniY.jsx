import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from 'react'

const aniY = ({
  children,
  delay = 0,
  initial = { opacity: 0, y: 40 },
  animate = { opacity: 1, y: 0 },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration: 1.1, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default aniY
