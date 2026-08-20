import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Reveal from '../components/Reveal.jsx'
import Bottle3D from '../components/Bottle3D.jsx'
import GlossVial from '../components/GlossVial.jsx'
import SHADES from '../data/shades.js'

export default function Shades() {
  const [active, setActive] = useState(SHADES[2])

  return (
    <PageShell>
      <section style={{ paddingTop: '9rem', paddingBottom: '3rem' }} className="container">
        <Reveal><p className="eyebrow" style={{ textAlign: 'center' }}>Five secrets</p></Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginTop: '0.8rem' }}>
            Choose what you're<br /> keeping to yourself.
          </h1>
        </Reveal>
      </section>

      {/* INTERACTIVE PICKER */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)',
            gap: '4vw',
            alignItems: 'center',
            background: 'var(--cream)',
            borderRadius: '4px 4px 100px 4px',
            padding: 'clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          <div style={{ height: 'clamp(300px, 34vw, 440px)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ height: '100%' }}
              >
                <Bottle3D color={active.color} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
              >
                <p className="eyebrow" style={{ color: 'var(--gold-deep)' }}>Lip Gloss — 10ml / 0.34 fl oz</p>
                <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', marginTop: '0.6rem' }}>{active.name}</h2>
                <p style={{ marginTop: '1rem', fontSize: '1.15rem', color: 'var(--ink-soft)', maxWidth: 440 }}>
                  {active.note}
                </p>
                <Link className="btn" style={{ marginTop: '2rem' }} to="/buy-now">
                  Shop {active.name}
                </Link>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', gap: '0.9rem', marginTop: '2.6rem', flexWrap: 'wrap' }}>
              {SHADES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  aria-label={s.name}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: s.color,
                    border: active.id === s.id ? '3px solid var(--ink)' : '3px solid transparent',
                    outline: '1px solid rgba(0,0,0,0.1)',
                    outlineOffset: 2,
                    transform: active.id === s.id ? 'scale(1.15)' : 'scale(1)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.6rem' }}>
          {SHADES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <motion.button
                onClick={() => {
                  setActive(s)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  background: 'var(--paper)',
                  border: `1px solid ${active.id === s.id ? 'var(--ink)' : 'rgba(173,138,76,0.25)'}`,
                  borderRadius: 4,
                  padding: '2.2rem 1rem 1.8rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <GlossVial color={s.color} height={130} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginTop: '1.2rem' }}>{s.name}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginTop: '0.4rem' }}>
                  10ml · Vegan
                </p>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
