import { ReactNode } from 'react'

export const useScrollAnimation = () => {
  return {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.6 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, margin: '-100px' },
      transition: { duration: 0.6 },
    },
    staggerContainer: {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, margin: '-100px' },
      variants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      },
    },
    staggerItem: {
      variants: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      },
    },
  }
}
