import { useEffect } from 'react'
import StarRating from './StarRating'
import './BlogModal.css'

export default function BlogModal({ review, onClose }) {
  useEffect(() => {
    if (!review) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [review])

  useEffect(() => {
    if (!review) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [review, onClose])

  if (!review) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal>
      <article className="modal" onClick={e => e.stopPropagation()}>
        {/* Header image */}
        <div className="modal__hero">
          <img src={review.image} alt={review.title} className="modal__hero-img" />
          <div className="modal__hero-overlay" />
          <button className="modal__close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="modal__hero-content">
            <div className="modal__meta-top">
              <span className="modal__cats">{review.categories.join(' / ')}</span>
              <span className="modal__date">{review.date}</span>
            </div>
            <h2 className="modal__title">{review.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="modal__body">
          <div className="modal__rating">
            <span className="modal__rating-label">Rating: {review.rating}/{review.maxRating}</span>
            <StarRating rating={review.rating} size={20} />
          </div>
          <div className="modal__text">
            {review.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
