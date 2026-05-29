import { motion } from 'framer-motion';
import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({ children, delay = 0, className = '', style }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.65, delay: delay / 1000, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}