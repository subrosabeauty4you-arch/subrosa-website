import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Reveal from '../components/Reveal.jsx'
import Bottle3D from '../components/Bottle3D.jsx'
import PhotoFrame from '../components/PhotoFrame.jsx'

const VALUES = [
  { title: '100% Vegan', copy: 'No beeswax, no carmine, no gelatin — ever. Just plant-derived shine.' },
  { title: 'Cruelty-Free', copy: 'Never tested on animals, at any stage, by us or anyone we work with.' },
  { title: 'Quietly Formulated', copy: 'Small batches, developed slowly, released only when they feel right.' },
]

export default function BrandStory() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const roseRotate = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <PageShell>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #f4e9db 0%, #fbf5ec 60%)',
        }}
      >
        <motion.svg
          style={{ position: 'absolute', right: '-10%', top: '-10%', rotate: roseRotate, opacity: 0.5 }}
          width="720"
          height="720"
          viewBox="0 0 200 200"
        >
          <g stroke="var(--gold)" strokeWidth="0.4" fill="none" opacity="0.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx="100" cy="100" r={20 + i * 8} />
            ))}
          </g>
        </motion.svg>

        <motion.div style={{ y, opacity }} className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)',
              gap: '4vw',
              alignItems: 'center',
              paddingTop: '7rem',
            }}
          >
            <div>
              <Reveal>
                <p className="eyebrow">Est. in confidence</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', marginTop: '1rem', lineHeight: 1.05 }}>
                  Some secrets<br /> are worn <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>on the lips.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.22}>
                <p style={{ fontSize: '1.25rem', color: 'var(--ink-soft)', marginTop: '1.8rem', maxWidth: 480 }}>
                  Subrosa Beauty is a vegan lip gloss house built on a Latin whisper —
                  <em> sub rosa</em>, "under the rose" — the old sign for something said in
                  confidence. We formulate the same way: quietly, deliberately, one shade at a time.
                </p>
              </Reveal>
              <Reveal delay={0.34}>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2.6rem', flexWrap: 'wrap' }}>
                  <Link className="btn" to="/shades">Discover Shades</Link>
                  <Link className="btn btn-outline" to="/speciality">Why It's Different</Link>
                </div>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: 'clamp(340px, 46vw, 520px)' }}
            >
              <Bottle3D color="#c46a6a" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '2.4rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold-deep)',
          }}
        >
          Scroll
        </motion.div>
      </section>

      {/* FOUNDER / PHOTO */}
      <section style={{ padding: '8rem 0' }} className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)',
            gap: '5vw',
            alignItems: 'center',
          }}
        >
          <Reveal as="div">
            <PhotoFrame />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">The founder</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.9rem' }}>
                A gloss made for the version of you<br /> that doesn't ask permission.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: '1.15rem', color: 'var(--ink-soft)', marginTop: '1.6rem', maxWidth: 560 }}>
                Subrosa began at a bathroom counter crowded with lip products that promised
                shine and delivered stickiness — half of them not vegan, none of them honest
                about it. I wanted a gloss that felt like a secret you keep for yourself: weightless,
                barely-there, unmistakably you. So I built one, shade by shade, tested on nothing
                but my own patience.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ marginTop: '1.4rem', fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--rose)' }}>
                — Founder, Subrosa Beauty
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '6rem 0 9rem', background: 'var(--cream)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ textAlign: 'center' }}>What we stand for</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.8rem', marginBottom: '4rem' }}>
              The promise, in three parts.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.4rem' }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid rgba(173,138,76,0.2)',
                    borderRadius: '4px 4px 60px 4px',
                    padding: '2.6rem 2rem',
                    height: '100%',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginTop: '1rem' }}>{v.title}</h3>
                  <p style={{ marginTop: '0.7rem', color: 'var(--ink-soft)' }}>{v.copy}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
