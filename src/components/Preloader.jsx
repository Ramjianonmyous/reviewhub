import { useState, useEffect } from 'react'
import './Preloader.css'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setExit(true), 800)
          setTimeout(onComplete, 1600)
          return 100
        }
        // Smaller increments for a longer loading feel
        const inc = Math.floor(Math.random() * 6) + 2
        return Math.min(prev + inc, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`preloader ${exit ? 'preloader--exit' : ''}`}>
      <div className="preloader__content">
        <div className="preloader__logo">
          <span>PERSONAL <strong>BLOG</strong></span>
        </div>
        <div className="preloader__bar-container">
          <div className="preloader__bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader__percentage">{progress}%</div>
      </div>
    </div>
  )
}
