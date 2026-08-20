// Lightweight CSS/SVG bottle rendition used in grids (the full 3D bottle lives in Bottle3D.jsx).
export default function GlossVial({ color = '#c46a6a', height = 160 }) {
  return (
    <svg width={height * 0.42} height={height} viewBox="0 0 60 160" fill="none">
      <defs>
        <linearGradient id={`glass-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* liquid */}
      <path
        d="M14 58 C10 80, 20 90, 14 112 C10 128, 18 138, 30 138 C42 138, 50 128, 46 112 C40 90, 50 80, 46 58 Z"
        fill={color}
      />
      {/* glass tube overlay */}
      <path
        d="M12 55 C7 80, 19 90, 12 114 C7 132, 17 143, 30 143 C43 143, 53 132, 48 114 C41 90, 53 80, 48 55 C48 50, 12 50, 12 55 Z"
        fill={`url(#glass-${color})`}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1"
      />
      {/* neck */}
      <rect x="22" y="38" width="16" height="14" rx="3" fill="#fff" fillOpacity="0.5" />
      {/* cap */}
      <rect x="17" y="4" width="26" height="38" rx="9" fill="#f2c6cf" />
      <rect x="17" y="14" width="26" height="6" fill="#d9a8ac" />
    </svg>
  )
}
