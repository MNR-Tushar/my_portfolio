import { useEffect, useRef } from 'react'
import './CursorGlow.css'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    let x = 0, y = 0, tx = 0, ty = 0

    const handleMouseMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }

    const animate = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      if (glow) {
        glow.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}
