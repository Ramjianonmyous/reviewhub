import { useState, useEffect } from 'react'
import './AboutMe.css'

const Typewriter = ({ text, delay = 20, startDelay = 0 }) => {
  const [currentText, setCurrentText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
    }, startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (started && currentText.length < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1))
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [started, currentText, text, delay])

  return <span>{currentText}</span>
}

export default function AboutMe() {
  const p1 = "I am a passionate Software Developer and Cloud Associate with a strong interest in building scalable web applications, cloud-based solutions, and IoT systems. I am currently pursuing my Engineering degree from Sipna College of Engineering & Technology."
  const p2 = "I specialize in MERN Stack development, cloud technologies, and IoT-based projects. I enjoy creating modern, user-friendly, and efficient applications that solve real-world problems. My experience includes developing full-stack web applications, role-based management systems, automation tools, and smart device integrations using modern technologies."
  const p3 = "As a developer, I am always eager to learn new technologies, improve my problem-solving skills, and work on innovative projects in software development, cloud computing, and embedded systems."

  return (
    <section className="about-me">
      <div className="container about-me__inner">
        <div className="about-me__content">
          <h2 className="about-me__title">About Me</h2>
          <div className="about-me__text">
            <p>
              <Typewriter text={p1} delay={10} startDelay={100} />
            </p>
            <p>
              <Typewriter text={p2} delay={10} startDelay={100} />
            </p>
            <p>
              <Typewriter text={p3} delay={10} startDelay={100} />
            </p>
          </div>
        </div>
        <div className="about-me__image-container">
          <div className="about-me__image-circle">
            <img src="/profile.jpg" alt="Profile" className="about-me__image" />
          </div>
        </div>
      </div>
    </section>
  )
}
