import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactPage.css'
import Newsletter from '../components/Newsletter'
import ParticleBackground from '../components/ParticleBackground'

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ============================================================
    // PLEASE FILL THESE WITH YOUR ACTUAL IDS FROM EMAILJS DASHBOARD
    // ============================================================
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message: ' + error.text);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-page__hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleBackground numParticles={50} connectionDist={120} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="contact-page__title">Contact Me</h1>
          <p className="contact-page__sub">I'd love to hear from you</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <h2 className="contact-card-title">Let's Connect</h2>
              <p className="contact-desc">
                Have a project in mind or just want to say hi? Feel free to reach out using the form or through my social media links.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Amravati, Maharashtra, India</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>ramjikaithwas@gmail.com</span>
                </div>
              </div>
            </div>
            
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="from_name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="from_email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn-red submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
