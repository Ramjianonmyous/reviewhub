import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ReviewsPage from './pages/ReviewsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Preloader from './components/Preloader'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`app-content ${loading ? 'app-content--hidden' : ''}`}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/projects" element={<ReviewsPage />} />
            <Route path="/about"    element={<AboutPage />} />
            <Route path="/contact"  element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}