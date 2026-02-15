'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';

type Direction = 'left' | 'right' | 'up' | 'down';

interface SlideInProps {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  distance?: number;
  inViewMargin?: `${number}${"px" | "%"}`;
  className?: string;
  once?: boolean;
}

export default function SlideIn({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 50,
  inViewMargin = '-20px',
  className = '',
  once = true,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: inViewMargin,
    once: once,
  });

  const variants = useMemo(() => {
    const getInitialPosition = () => {
      switch (direction) {
        case 'left':
          return { x: -distance, y: 0 };
        case 'right':
          return { x: distance, y: 0 };
        case 'up':
          return { x: 0, y: distance };
        case 'down':
          return { x: 0, y: -distance };
        default:
          return { x: 0, y: distance };
      }
    };
    return {
      hidden: {
        opacity: 0,
        ...getInitialPosition(),
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    };
  }, [direction, distance]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
