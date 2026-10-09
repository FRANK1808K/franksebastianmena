'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { EASE_FLUID } from '@/lib/motion';

/** translate-y-16 blur-md opacity-0 → translate-y-0 blur-0 opacity-100 */
const hidden = { opacity: 0, y: 64, filter: 'blur(12px)' };
const shown = { opacity: 1, y: 0, filter: 'blur(0px)' };
const DURATION = 0.9;

/** Entrada pesada al hacer scroll (whileInView, sin listeners de scroll), una sola vez. */
export function Reveal({ delay = 0, ...props }: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: DURATION, delay, ease: EASE_FLUID }}
      {...props}
    />
  );
}

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden,
  visible: { ...shown, transition: { duration: DURATION, ease: EASE_FLUID } },
};

/** Contenedor de entradas escalonadas para listas y tarjetas. */
export function Stagger({ as = 'div', ...props }: HTMLMotionProps<'div'> & { as?: 'div' | 'ul' | 'ol' }) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={listVariants}
      {...props}
    />
  );
}

export function StaggerItem({ as = 'div', ...props }: HTMLMotionProps<'div'> & { as?: 'div' | 'li' }) {
  const Component = motion[as] as typeof motion.div;
  return <Component variants={itemVariants} {...props} />;
}

export default Reveal;
