import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const floatMotion = {
  animate: {
    y: [0, -12, 0],
    x: [0, 8, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const MotionDiv = ({ children }: { children: ReactNode }) => (
  <motion.div initial="hidden" animate="show" variants={reveal}>
    {children}
  </motion.div>
);
