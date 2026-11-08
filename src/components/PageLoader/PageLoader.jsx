import { useState, useEffect } from 'react'
import './PageLoader.css'

export default function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        const increment = Math.random() * 25 + 10
        return Math.min(prev + increment, 100)
      })
    }, 180)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsComplete(true), 300)
      setTimeout(() => setIsHidden(true), 900)
    }
  }, [progress])

  if (isHidden) return null

  return (
    <div className={`page-loader ${isComplete ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-bracket">&lt;</span>
          <span className="loader-name">Naimur</span>
          <span className="loader-bracket">/&gt;</span>
        </div>
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="loader-percent">{Math.floor(progress)}%</span>
      </div>
    </div>
  )
}
