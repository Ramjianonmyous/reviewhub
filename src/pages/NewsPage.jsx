import './NewsPage.css'

const NEWS = [
  {
    id: 1,
    title: 'Review Hub Launches New AI-Powered Rating System',
    excerpt: 'Our new algorithm cross-references thousands of data points to surface the most accurate aggregate scores for tech products.',
    date: 'April 20, 2026',
    category: 'Platform',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
  },
  {
    id: 2,
    title: 'Top 10 Gadgets Expected This Summer',
    excerpt: 'From foldable displays to next-gen earbuds, here\'s what tech enthusiasts have on their radar for the coming months.',
    date: 'April 14, 2026',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
  {
    id: 3,
    title: 'How We Score: Our Review Methodology Explained',
    excerpt: 'Transparency matters. Read how our editorial team assigns ratings, what we test, and how we avoid bias in every review.',
    date: 'April 5, 2026',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
]

export default function NewsPage() {
  return (
    <div className="news-page">
      <div className="news-page__hero">
        <h1>Latest News</h1>
        <p>Stay up to date with Review Hub and the tech world</p>
      </div>
      <div className="container news-page__body">
        {NEWS.map(n => (
          <article key={n.id} className="news-card">
            <div className="news-card__img-wrap">
              <img src={n.image} alt={n.title} />
            </div>
            <div className="news-card__body">
              <div className="news-card__meta">
                <span className="news-card__cat">{n.category}</span>
                <span className="news-card__date">{n.date}</span>
              </div>
              <h2 className="news-card__title">{n.title}</h2>
              <p className="news-card__excerpt">{n.excerpt}</p>
              <button className="btn-red">Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
