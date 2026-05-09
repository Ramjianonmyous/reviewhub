import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ParticleBackground from './ParticleBackground'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Replace this with your actual portfolio link
  const PORTFOLIO_LINK = "https://your-portfolio.com"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    // Initial check
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu and force scroll state recalculation on route change
    setMenuOpen(false)
    setScrolled(window.scrollY > 10)
  }, [location.pathname])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {scrolled && <ParticleBackground numParticles={30} connectionDist={80} />}
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 5l1.854 5.706H19.5l-4.927 3.58 1.854 5.706L12 16.412l-4.427 3.58 1.854-5.706L4.5 10.706h5.646L12 5z"
                fill="currentColor"/>
            </svg>
          </span>
          <span>PERSONAL <strong>BLOG</strong></span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`navbar__link ${location.pathname === link.href ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__spacer" />

        {/* Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <Link key={link.href} to={link.href} className="navbar__mobile-link">
            {link.label}
          </Link>
        ))}

      </div>
    </header>
  )
}