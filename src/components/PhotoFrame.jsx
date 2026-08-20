// Drop the real photo at /public/brand/founder.jpg and swap the background below,
// or render <img src="/brand/founder.jpg" /> in place of the placeholder markup.
export default function PhotoFrame({ src, label = 'Founder photo — drop file at /public/brand/', aspect = '4 / 5' }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspect,
        borderRadius: '4px 4px 120px 4px',
        overflow: 'hidden',
        border: '1px solid rgba(173,138,76,0.35)',
        boxShadow: '0 40px 80px -30px rgba(42,35,32,0.35)',
      }}
    >
      {src ? (
        <img src={src} alt="Subrosa Beauty founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            background:
              'radial-gradient(circle at 30% 20%, #f2ddc4 0%, #e7b7ae 55%, #c46a6a 100%)',
          }}
        >
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
            <text x="50" y="68" textAnchor="middle" fontFamily="'Marcellus', Georgia, serif" fontSize="52" fill="rgba(255,255,255,0.85)">
              SB
            </text>
          </svg>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              padding: '0 2rem',
            }}
          >
            {label}
          </p>
        </div>
      )}
    </div>
  )
}
