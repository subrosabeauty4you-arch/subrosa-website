import { motion } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  duration = 0.9,
  className,
  style,
  as = 'div',
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
