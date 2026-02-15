'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';

interface BlurInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: `${number}${'px' | '%'}`;
  blur?: string;
  className?: string;
  once?: boolean;
}

export default function BlurIn({
  children,
  duration = 0.75,
  delay = 0,
  yOffset = 8,
  inViewMargin = '-20px',
  blur = '2px',
  className = '',
  once = true
}: BlurInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: inViewMargin,
    once: once
  });

  const variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur})`
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }
    }),
    [yOffset, blur]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
