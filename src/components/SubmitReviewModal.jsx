import { useState, useEffect } from 'react'
import './SubmitReviewModal.css'

export default function SubmitReviewModal({ onClose }) {
  const [step, setStep] = useState(1)
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="sr-backdrop" onClick={onClose}>
      <div className="sr-modal" onClick={e => e.stopPropagation()}>
        <button className="sr-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {submitted ? (
          <div className="sr-success">
            <div className="sr-success__icon">✓</div>
            <h3>Review Submitted!</h3>
            <p>Thanks for sharing your experience. Our editors will review it shortly.</p>
            <button className="btn-red" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="sr-header">
              <div className="sr-logo">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h2 className="sr-title">Submit a Review</h2>
              <p className="sr-sub">Share your honest experience with our community</p>
            </div>

            <form className="sr-form" onSubmit={handleSubmit}>
              <div className="sr-field">
                <label className="sr-label">Product / Service Name</label>
                <input className="sr-input" type="text" placeholder="e.g. Sony WH-1000XM5" required />
              </div>

              <div className="sr-field">
                <label className="sr-label">Category</label>
                <select className="sr-input sr-select" required>
                  <option value="">Select a category</option>
                  <option>Tech / Electronics</option>
                  <option>Phones</option>
                  <option>Cameras</option>
                  <option>Drones</option>
                  <option>Smart Home</option>
                  <option>Tablets</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sr-field">
                <label className="sr-label">Your Rating</label>
                <div className="sr-stars">
                  {[1,2,3,4,5].map(n => (
                    <button
                      key={n} type="button"
                      className={`sr-star ${n <= (hovered || rating) ? 'sr-star--on' : ''}`}
                      onMouseEnter={() => setHovered(n)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setRating(n)}
                    >★</button>
                  ))}
                  <span className="sr-stars-label">{rating > 0 ? `${rating}/5` : 'Click to rate'}</span>
                </div>
              </div>

              <div className="sr-field">
                <label className="sr-label">Your Review</label>
                <textarea className="sr-input sr-textarea"
                  placeholder="Share your honest experience..."
                  required rows={5}
                />
              </div>

              <div className="sr-field">
                <label className="sr-label">Your Name (optional)</label>
                <input className="sr-input" type="text" placeholder="Anonymous" />
              </div>

              <button type="submit" className="btn-red sr-submit">
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
