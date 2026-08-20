import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import Reveal from '../components/Reveal.jsx'
import GlossVial from '../components/GlossVial.jsx'
import SHADES from '../data/shades.js'

const PRICE = 22
const BUNDLE_PRICE = 92

export default function BuyNow() {
  const [cart, setCart] = useState({})
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [placed, setPlaced] = useState(false)

  const items = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({ shade: SHADES.find((s) => s.id === id), qty })),
    [cart],
  )

  const total = items.reduce((sum, i) => sum + i.qty * PRICE, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  const addToBag = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
    setDrawerOpen(true)
  }

  const changeQty = (id, delta) => {
    setCart((c) => {
      const next = Math.max(0, (c[id] || 0) + delta)
      return { ...c, [id]: next }
    })
  }

  const addBundle = () => {
    setCart((c) => {
      const next = { ...c }
      SHADES.forEach((s) => {
        next[s.id] = (next[s.id] || 0) + 1
      })
      return next
    })
    setDrawerOpen(true)
  }

  const checkout = (e) => {
    e.preventDefault()
    setPlaced(true)
    setTimeout(() => {
      setCart({})
      setPlaced(false)
      setDrawerOpen(false)
    }, 2600)
  }

  return (
    <PageShell>
      <section style={{ paddingTop: '9rem', paddingBottom: '3rem' }} className="container">
        <Reveal><p className="eyebrow" style={{ textAlign: 'center' }}>Shop the collection</p></Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginTop: '0.8rem' }}>
            Keep the secret close.
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p style={{ textAlign: 'center', color: 'var(--ink-soft)', maxWidth: 560, margin: '1.2rem auto 0', fontSize: '1.1rem' }}>
            Every shade, ${PRICE} · vegan, cruelty-free, 10ml. Free shipping on the full set of five.
          </p>
        </Reveal>
      </section>

      {/* BUNDLE BANNER */}
      <section className="container" style={{ paddingBottom: '3rem' }}>
        <Reveal>
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--cream)',
              borderRadius: '4px 4px 80px 4px',
              padding: 'clamp(1.6rem, 4vw, 3rem)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.4rem',
            }}
          >
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>The full set</p>
              <h3 style={{ color: 'var(--cream)', fontSize: '1.7rem', marginTop: '0.5rem' }}>
                All 5 shades — ${BUNDLE_PRICE} <span style={{ color: 'rgba(244,233,219,0.5)', fontSize: '1.1rem', textDecoration: 'line-through', marginLeft: 8 }}>${PRICE * 5}</span>
              </h3>
            </div>
            <button className="btn btn-outline" style={{ borderColor: 'var(--gold-light)', color: 'var(--cream)' }} onClick={addBundle}>
              Add Full Set to Bag
            </button>
          </div>
        </Reveal>
      </section>

      {/* PRODUCT GRID */}
      <section className="container" style={{ paddingBottom: '7rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.8rem' }}>
          {SHADES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07}>
              <div
                style={{
                  background: 'var(--paper)',
                  border: '1px solid rgba(173,138,76,0.22)',
                  borderRadius: 4,
                  padding: '2rem 1.4rem',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <GlossVial color={s.color} height={140} />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginTop: '1.3rem' }}>{s.name}</h3>
                <p style={{ marginTop: '0.4rem', color: 'var(--ink-soft)', fontSize: '0.92rem', flexGrow: 1 }}>{s.note}</p>
                <p style={{ marginTop: '1rem', fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>${PRICE}</p>
                <button className="btn" style={{ marginTop: '1rem' }} onClick={() => addToBag(s.id)}>
                  Add to Bag
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CART TRIGGER */}
      <button
        onClick={() => setDrawerOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 900,
          background: 'var(--ink)',
          color: 'var(--paper)',
          border: 'none',
          borderRadius: 999,
          padding: '1rem 1.6rem',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          boxShadow: '0 20px 40px -18px rgba(0,0,0,0.4)',
        }}
      >
        Bag {count > 0 ? `(${count})` : ''}
      </button>

      {/* DRAWER */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(42,35,32,0.45)', zIndex: 1200 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(420px, 100vw)',
                background: 'var(--paper)',
                zIndex: 1300,
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {placed ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ margin: 'auto', textAlign: 'center' }}
                >
                  <h3 style={{ fontSize: '1.8rem' }}>It's sealed.</h3>
                  <p style={{ marginTop: '0.8rem', color: 'var(--ink-soft)' }}>
                    Your order is in — a confirmation is on its way. Kept just between us.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem' }}>Your Bag</h3>
                    <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.4rem' }}>
                      ×
                    </button>
                  </div>

                  <div style={{ flexGrow: 1, overflowY: 'auto', marginTop: '1.6rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {items.length === 0 && (
                      <p style={{ color: 'var(--ink-soft)' }}>Nothing here yet — pick a shade.</p>
                    )}
                    {items.map(({ shade, qty }) => (
                      <div key={shade.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ width: 34, height: 34, borderRadius: '50%', background: shade.color, flexShrink: 0 }} />
                        <div style={{ flexGrow: 1 }}>
                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>{shade.name}</p>
                          <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>${PRICE} each</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <button onClick={() => changeQty(shade.id, -1)} style={qtyBtn}>−</button>
                          <span>{qty}</span>
                          <button onClick={() => changeQty(shade.id, 1)} style={qtyBtn}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {items.length > 0 && (
                    <form onSubmit={checkout} style={{ marginTop: '1.6rem', borderTop: '1px solid rgba(173,138,76,0.25)', paddingTop: '1.4rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '1.2rem' }}>
                        <span>Total</span>
                        <span>${total}</span>
                      </div>
                      <input required type="email" placeholder="Email for confirmation" style={inputStyle} />
                      <button className="btn" type="submit" style={{ width: '100%', marginTop: '1rem' }}>
                        Place Secret Order
                      </button>
                    </form>
                  )}
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PageShell>
  )
}

const qtyBtn = {
  width: 26,
  height: 26,
  borderRadius: '50%',
  border: '1px solid var(--ink)',
  background: 'none',
  fontSize: '1rem',
  lineHeight: 1,
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  border: '1px solid rgba(173,138,76,0.35)',
  borderRadius: 4,
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem',
  background: 'var(--cream)',
}
