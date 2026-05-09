import ParticleBackground from './ParticleBackground'
import './Footer.css'

export default function Footer() {

  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground numParticles={40} connectionDist={100} />
      <div className="container footer__inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer__brand">
          <span className="footer__logo">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </span>
          <span>PERSONAL <strong>BLOG</strong></span>
        </div>



        <p className="footer__copy">© {new Date().getFullYear()} Personal Blog. All rights reserved.</p>
      </div>
    </footer>
  )
}