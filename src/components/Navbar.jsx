import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'

const LINKS = [
  { to: '/', label: 'Our Story' },
  { to: '/speciality', label: 'Speciality' },
  { to: '/shades', label: 'Shades' },
  { to: '/buy-now', label: 'Buy Now' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '0.9rem 6vw' : '1.6rem 6vw',
          background: scrolled ? 'rgba(251, 245, 236, 0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(173,138,76,0.18)' : '1px solid transparent',
          transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
        }}
      >
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo size={38} wordmark />
        </NavLink>

        <nav className="nav-desktop" style={{ display: 'flex', gap: '2.4rem' }}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold-deep)' : 'var(--ink)',
                position: 'relative',
                paddingBottom: '4px',
              })}
            >
              {({ isActive }) => (
                <span style={{ position: 'relative' }}>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: -6,
                        height: 1,
                        background: 'var(--gold-deep)',
                      }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 4,
          }}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} style={barStyle} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} style={barStyle} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} style={barStyle} />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'var(--paper)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    color: 'var(--ink)',
                  }}
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}

const barStyle = {
  width: 26,
  height: 1,
  background: 'var(--ink)',
  display: 'block',
}
