import type { Variants, Transition } from 'framer-motion'

// Easings: natural, never mechanical
export const easeOut = [0.22, 1, 0.36, 1] as const
export const easeInOut = [0.65, 0, 0.35, 1] as const
export const easeSmooth = [0.16, 1, 0.3, 1] as const

// Common transitions
export const transitionDefault: Transition = { duration: 0.7, ease: easeOut }
export const transitionSlow: Transition = { duration: 1.0, ease: easeOut }
export const transitionFast: Transition = { duration: 0.4, ease: easeOut }

/* ───────── Section-level reveal (scroll) ───────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionDefault,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionDefault },
}

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitionDefault },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: transitionDefault },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: transitionDefault },
}

/* ───────── Stagger containers ───────── */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

/* ───────── Hero entrance ───────── */

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeSmooth },
  },
}

/* ───────── Microinteractions ───────── */

export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.25, ease: easeOut },
}

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.15, ease: easeOut },
}

export const cardHover = {
  y: -4,
  transition: { duration: 0.3, ease: easeOut },
}

export const linkHover = {
  x: 4,
  transition: { duration: 0.25, ease: easeOut },
}

/* ───────── Viewport defaults ───────── */

// Trigger once when 15% of the element is visible
export const viewportOnce = { once: true, amount: 0.15 } as const

// Trigger every time it enters/leaves (for parallax-like behaviors)
export const viewportRepeat = { once: false, amount: 0.05 } as const
