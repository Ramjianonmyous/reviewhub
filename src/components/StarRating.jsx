import './StarRating.css'

export default function StarRating({ rating, max = 5, size = 16 }) {
  return (
    <div className="stars" style={{ '--star-size': `${size}px` }}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= Math.floor(rating)
        const half   = !filled && i < rating && rating % 1 >= 0.5
        return (
          <span key={i} className={`star ${filled ? 'star--full' : half ? 'star--half' : 'star--empty'}`}>
            ★
          </span>
        )
      })}
    </div>
  )
}
