import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import './BackToTop.css'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = totalHeight > 0 ? Math.min(Math.max(window.scrollY / totalHeight, 0), 1) : 0
      setProgress(scrolled)
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const circumference = 2 * Math.PI * 20
  const dashOffset = circumference - (progress * circumference)

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg className="progress-ring" viewBox="0 0 44 44">
        <circle
          className="progress-ring-bg"
          cx="22" cy="22" r="20"
          fill="none"
          strokeWidth="2"
        />
        <circle
          className="progress-ring-fill"
          cx="22" cy="22" r="20"
          fill="none"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <FiArrowUp className="back-to-top-icon" size={18} />
    </button>
  )
}
