import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import Reveal from '../components/Reveal.jsx'
import Bottle3D from '../components/Bottle3D.jsx'

const FEATURES = [
  {
    title: 'Lightweight Formula',
    copy: 'A near-weightless gel base that never feels tacky or thick — you forget it\'s there until the mirror reminds you.',
    icon: 'feather',
  },
  {
    title: 'Natural Flush',
    copy: 'Sheer, buildable pigment that reacts to your own lip tone instead of masking it.',
    icon: 'petal',
  },
  {
    title: 'Subtle Glow',
    copy: 'A soft-focus shine — never glitter, never wet-look plastic. Just healthy, lit-from-within lips.',
    icon: 'sparkle',
  },
  {
    title: '100% Vegan Base',
    copy: 'Jojoba oil, shea butter and vitamin E stand in for beeswax and carmine, with zero compromise on glide.',
    icon: 'leaf',
  },
]

const INGREDIENTS = [
  { name: 'Jojoba Oil', note: 'Locks in moisture, mimics skin\'s natural lipids' },
  { name: 'Shea Butter', note: 'Softens and cushions for all-day comfort' },
  { name: 'Vitamin E', note: 'Antioxidant protection, keeps color true' },
  { name: 'Candelilla Wax', note: 'The vegan structure — no beeswax, ever' },
]

const FREE_FROM = ['Beeswax', 'Carmine', 'Gelatin', 'Parabens', 'Sulfates', 'Animal Testing']

const RITUAL = [
  { step: '01', title: 'Shake Gently', copy: 'Wake the pigment before every wear.' },
  { step: '02', title: 'Glide On', copy: 'One sweep from the doe-foot wand, center to corner.' },
  { step: '03', title: 'Press & Go', copy: 'Press lips together. No mirror required after the first week.' },
]

const iconPaths = {
  feather: 'M4 20c6-1 10-5 16-16-6 2-12 6-16 16z',
  petal: 'M12 3c4 3 4 9 0 18-4-9-4-15 0-18z',
  sparkle: 'M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z',
  leaf: 'M4 20c8 0 16-6 16-16C12 4 4 12 4 20z',
}

function Icon({ name }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.1">
      <path d={iconPaths[name]} strokeLinejoin="round" />
    </svg>
  )
}

export default function Speciality() {
  return (
    <PageShell>
      <section style={{ paddingTop: '9rem', paddingBottom: '4rem', background: 'linear-gradient(180deg, #fbf5ec, #f4e9db)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.95fr) minmax(0,1.05fr)', gap: '4vw', alignItems: 'center' }}>
          <div>
            <Reveal><p className="eyebrow">The formula</p></Reveal>
            <Reveal delay={0.1}>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', marginTop: '0.9rem', lineHeight: 1.08 }}>
                Vegan by design,<br /> not by compromise.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: '1.2rem', color: 'var(--ink-soft)', marginTop: '1.6rem', maxWidth: 500 }}>
                Every Subrosa gloss is built on three non-negotiables — lightweight wear,
                a natural flush, and a subtle glow — using only plant-derived ingredients.
                Rotate the bottle. That's the entire ingredient list working in one swipe.
              </p>
            </Reveal>
          </div>
          <div style={{ height: 'clamp(300px, 40vw, 460px)' }}>
            <Bottle3D color="#7a2e35" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container" style={{ padding: '5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.6rem' }}>
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 30px 60px -30px rgba(122,46,53,0.25)' }}
                transition={{ duration: 0.35 }}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid rgba(173,138,76,0.2)',
                  borderRadius: 4,
                  padding: '2.2rem 1.8rem',
                  height: '100%',
                }}
              >
                <Icon name={f.icon} />
                <h3 style={{ fontSize: '1.25rem', marginTop: '1.1rem' }}>{f.title}</h3>
                <p style={{ marginTop: '0.6rem', color: 'var(--ink-soft)', fontSize: '0.98rem' }}>{f.copy}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INGREDIENTS */}
      <section style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '7rem 0' }}>
        <div className="container">
          <Reveal><p className="eyebrow" style={{ color: 'var(--gold-light)' }}>What's inside</p></Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.8rem', color: 'var(--cream)' }}>
              Four ingredients doing the real work.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: '2rem', marginTop: '3.5rem' }}>
            {INGREDIENTS.map((ing, i) => (
              <Reveal key={ing.name} delay={i * 0.1}>
                <div style={{ borderLeft: '1px solid var(--gold)', paddingLeft: '1.2rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold-light)' }}>{ing.name}</h4>
                  <p style={{ marginTop: '0.5rem', color: 'rgba(244,233,219,0.7)', fontSize: '0.95rem' }}>{ing.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {FREE_FROM.map((f) => (
                <span
                  key={f}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.55rem 1.1rem',
                    borderRadius: 999,
                    border: '1px solid rgba(244,233,219,0.3)',
                    color: 'rgba(244,233,219,0.85)',
                  }}
                >
                  Free of {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RITUAL */}
      <section className="container" style={{ padding: '7rem 0' }}>
        <Reveal><p className="eyebrow" style={{ textAlign: 'center' }}>The ritual</p></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem,4vw,2.8rem)', marginTop: '0.8rem', marginBottom: '3.5rem' }}>
            Three steps. Ten seconds. All day.
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '2rem', position: 'relative' }}>
          {RITUAL.map((r, i) => (
            <Reveal key={r.step} delay={i * 0.15}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--blush)' }}>{r.step}</span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '0.6rem' }}>{r.title}</h3>
                <p style={{ marginTop: '0.5rem', color: 'var(--ink-soft)' }}>{r.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link className="btn" to="/shades">See Every Shade</Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  )
}
