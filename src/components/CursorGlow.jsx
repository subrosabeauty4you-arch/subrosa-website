import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const tick = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      if (el) el.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 440,
        height: 440,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        background:
          'radial-gradient(circle, rgba(212,184,119,0.16) 0%, rgba(231,183,174,0.08) 45%, rgba(0,0,0,0) 70%)',
        willChange: 'transform',
      }}
    />
  )
}
