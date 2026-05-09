import { companies } from '../data/reviews'
import './TrustedCompanies.css'

// Duplicate list for seamless loop
const list = [...companies, ...companies]

export default function TrustedCompanies() {
  return (
    <section className="trusted section">
      <p className="trusted__label">The Tech Stack For Below Projects </p>
      <div className="trusted__track-wrapper">
        <div className="trusted__track">
          {list.map((name, i) => (
            <span key={i} className="trusted__logo">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
