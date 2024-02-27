import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTextCharacterTwo = ({ text, className }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '3rem' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={className ? className : 'text-orange-400'}
          custom={index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
  },
};

const child = {
  visible: index => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
      repeat: Infinity, // Repite la animación infinitamente
      repeatDelay: 4, // Retraso entre cada repetición (4 segundos)
      delay: index * 0.06, // Retraso inicial para cada letra
    },
  }),
  hidden: {
    opacity: 0,
    y: 30,
  },
};

export default AnimatedTextCharacterTwo;
