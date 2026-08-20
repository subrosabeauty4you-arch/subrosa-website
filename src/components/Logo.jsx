// Recreated monogram — swap for the real logo file at /public/brand/logo.svg when available.
export default function Logo({ size = 44, mark = true, wordmark = false, color = 'var(--gold-deep)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
      {mark && (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <text
            x="50"
            y="68"
            textAnchor="middle"
            fontFamily="'Marcellus', Georgia, serif"
            fontSize="56"
            fill={color}
          >
            SB
          </text>
        </svg>
      )}
      {wordmark && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.3em',
            fontSize: size * 0.32,
            color,
            textTransform: 'uppercase',
          }}
        >
          Subrosa
        </span>
      )}
    </div>
  )
}
