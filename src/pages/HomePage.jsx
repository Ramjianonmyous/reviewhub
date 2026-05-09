import { useState } from 'react'
import Hero from '../components/Hero'
import TrustedCompanies from '../components/TrustedCompanies'
import FeaturedReview from '../components/FeaturedReview'
import ReviewGrid from '../components/ReviewGrid'
import Newsletter from '../components/Newsletter'
import BlogModal from '../components/BlogModal'
import { reviews } from '../data/reviews'

const featuredReview = reviews.find(r => r.featured)

export default function HomePage({ onSubmitClick }) {
  const [activeReview, setActiveReview] = useState(null)

  return (
    <>
      <Hero onLearnMore={() => {
        document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' })
      }} />
      <TrustedCompanies />
      <div id="reviews-section">
        <FeaturedReview review={featuredReview} onClick={setActiveReview} />
        <ReviewGrid onCardClick={setActiveReview} />
      </div>
      <Newsletter />

      <BlogModal review={activeReview} onClose={() => setActiveReview(null)} />
    </>
  )
}
