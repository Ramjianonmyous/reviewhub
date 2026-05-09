import { useState } from 'react'
import { reviews } from '../data/reviews'
import ReviewCard from '../components/ReviewCard'
import BlogModal from '../components/BlogModal'
import Newsletter from '../components/Newsletter'
import ParticleBackground from '../components/ParticleBackground'
import './ReviewsPage.css'

export default function ReviewsPage() {
  const [active, setActive] = useState(null)
  const [category, setCategory] = useState('PERSONAL')

  const filteredReviews = reviews.filter(r => r.categories.includes(category))

  const categories = ['PERSONAL', 'TECHNOLOGIES']

  return (
    <div className="reviews-page">
      <div className="reviews-page__hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleBackground numParticles={50} connectionDist={120} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="reviews-page__title">All Projects</h1>
          <p className="reviews-page__sub">Browse my latest projects and technical works</p>
        </div>
      </div>

      <div className="container">
        <div className="reviews-page__filters">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-pill ${category === cat ? 'filter-pill--active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="reviews-page__grid">
          {filteredReviews.map(r => (
            <ReviewCard key={r.id} review={r} onClick={setActive} />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <p className="reviews-page__empty">No projects available yet in this category.</p>
        )}
      </div>

      <Newsletter />

      <BlogModal review={active} onClose={() => setActive(null)} />
    </div>
  )
}