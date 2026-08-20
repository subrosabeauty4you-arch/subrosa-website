import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'var(--cream)',
        padding: '5rem 6vw 2.4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '3rem',
          maxWidth: 1240,
          margin: '0 auto',
        }}
      >
        <div style={{ maxWidth: 320 }}>
          <Logo size={40} wordmark color="var(--gold-light)" />
          <p style={{ marginTop: '1.2rem', color: 'rgba(244,233,219,0.65)', fontSize: '1.02rem' }}>
            Sub rosa — under the rose. Vegan lip gloss formulated in confidence, worn in the open.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-light)', marginBottom: '1rem' }}>Explore</p>
            {[
              { to: '/', label: 'Our Story' },
              { to: '/speciality', label: 'Speciality' },
              { to: '/shades', label: 'Shades' },
              { to: '/buy-now', label: 'Buy Now' },
            ].map((l) => (
              <NavLink key={l.to} to={l.to} style={{ display: 'block', marginBottom: '0.7rem', color: 'rgba(244,233,219,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-light)', marginBottom: '1rem' }}>Connect</p>
            {['Instagram', 'TikTok', 'Pinterest', 'hello@subrosabeauty.com'].map((c) => (
              <a key={c} href="#" style={{ display: 'block', marginBottom: '0.7rem', color: 'rgba(244,233,219,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>
                {c}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1240,
          margin: '3.5rem auto 0',
          paddingTop: '1.6rem',
          borderTop: '1px solid rgba(244,233,219,0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.6rem',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          color: 'rgba(244,233,219,0.45)',
        }}
      >
        <span>© {new Date().getFullYear()} Subrosa Beauty. 100% vegan &amp; cruelty-free.</span>
        <span>Formulated without gelatin, carmine, or beeswax.</span>
      </div>
    </footer>
  )
}
