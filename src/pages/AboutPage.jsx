import AboutMe from '../components/AboutMe'
import Newsletter from '../components/Newsletter'
import ParticleBackground from '../components/ParticleBackground'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page__hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleBackground numParticles={50} connectionDist={120} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="about-page__title">About Me</h1>
          <p className="about-page__sub">Developer, Cloud Associate & IoT Enthusiast</p>
        </div>
      </div>

      <AboutMe />
      
      <Newsletter />
    </div>
  )
}
