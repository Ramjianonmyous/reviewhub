import StarRating from './StarRating'
import './ReviewCard.css'

export default function ReviewCard({ review, onClick }) {
  return (
    <article className="rcard" onClick={() => onClick(review)} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(review)}>
      <div className="rcard__img-wrap">
        <img src={review.image} alt={review.title} className="rcard__img" loading="lazy" />
        <div className="rcard__img-overlay" />
      </div>
      <div className="rcard__body">
        <div className="rcard__meta-top">
          <span className="rcard__rating-label">Rating: {review.rating}/{review.maxRating}</span>
          <StarRating rating={review.rating} />
        </div>
        <h3 className="rcard__title">{review.title}</h3>
        <p className="rcard__excerpt">{review.excerpt}</p>
        <div className="rcard__meta-bottom">
          <span className="rcard__cats">{review.categories.join(' / ')}</span>
          <span className="rcard__date">{review.date}</span>
        </div>
      </div>
    </article>
  )
}
