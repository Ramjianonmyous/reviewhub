import StarRating from './StarRating'
import './FeaturedReview.css'

export default function FeaturedReview({ review, onClick }) {
  return (
    <section className="featured-section section">
      <div className="container">
        <div className="featured-card" onClick={() => onClick(review)} role="button" tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onClick(review)}>
          <div className="featured-card__text">
            <div className="featured-card__meta">
              <span className="featured-card__rating-label">Rating: {review.rating}/{review.maxRating}</span>
              <StarRating rating={review.rating} size={18} />
            </div>
            <h2 className="featured-card__title">{review.title}</h2>
            <p className="featured-card__excerpt">{review.excerpt}</p>
            <button className="btn-red featured-card__btn" onClick={e => { e.stopPropagation(); onClick(review) }}>
              Read Review
            </button>
          </div>
          <div className="featured-card__img-wrap">
            <img src={review.image} alt={review.title} className="featured-card__img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
