import { Link } from 'react-router-dom'
import { reviews } from '../data/reviews'
import ReviewCard from './ReviewCard'
import './ReviewGrid.css'

export default function ReviewGrid({ onCardClick }) {
  const gridReviews = reviews.filter(r => !r.featured).slice(0, 6)

  return (
    <section className="review-grid section">
      <div className="container">
        <div className="review-grid__header">
          <h2 className="review-grid__heading">Latest Projects</h2>
          <p className="review-grid__sub">Click any card to view project details</p>
        </div>
        <div className="review-grid__cards">
          {gridReviews.map(review => (
            <ReviewCard key={review.id} review={review} onClick={onCardClick} />
          ))}
        </div>
        <div className="review-grid__footer">
          <Link to="/projects" className="btn-red">View All Projects</Link>
        </div>
      </div>
    </section>
  )
}