import { motion } from 'framer-motion'

export default function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--paper)',
          transformOrigin: 'bottom',
          zIndex: 1500,
          pointerEvents: 'none',
        }}
      />
      {children}
    </motion.main>
  )
}
