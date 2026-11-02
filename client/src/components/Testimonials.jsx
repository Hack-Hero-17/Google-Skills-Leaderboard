import { useEffect, useRef, useState } from 'react'
import FAHMIYA_PHOTO from '../assets/fahmiya-fathima.jpeg'
import KAUSHAL from '../assets/kaushal.png'
import RATHI from '../assets/rathi.jpeg'
import MANOJ from '../assets/manoj.jpeg'
import '../styles/Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Fahmiya Fathima',
    role: 'GDG AIML Team Lead',
    quote: 'Had a really good experience with the Learn with Communities campaign! Got to learn new things, explore Google Skills and gain practical knowledge along the way. Completing the programme and earning 9 badges made it even more special. Overall, it was a fun and valuable learning experience!',
    photo: FAHMIYA_PHOTO,
    accent: 'blue',
  },
  {
    name: 'Kaushal N',
    role: 'GDG Web Team Lead',
    quote: 'My Google Cloud learning experience has been a great opportunity to gain hands-on experience with cloud services through practical labs and challenge labs. It helped me strengthen my technical skills, problem-solving abilities, and understanding of cloud computing. I\'m grateful for this opportunity and excited to learn more!',
    photo: KAUSHAL,
    accent: 'red',
  },
  {
    name: 'Rathichandhrika S',
    role: 'Learn with Communities participant',
    quote: 'GDG Learn with Communities made complex tech genuinely accessible. Between the hands-on sessions and learning alongside such an encouraging peer network, it gave me the exact push and practical confidence I needed to build real-world projects.',
    photo: RATHI,
    accent: 'green',
  },
  {
    name: 'Manoj P',
    role: 'Learn with Communities participant',
    quote: 'Had a great experience with the Learn with Communities programme! Got to explore Google Cloud, learn new concepts, and gain practical knowledge through hands-on labs. Earning badges along the way made the journey even more exciting. Overall, it was a fun and valuable learning experience. Thanks to GDG for this opportunity!',
    photo: MANOJ,
    accent: 'yellow',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section leaderboard-wide-container" aria-labelledby="testimonials-heading">
      <div className="testimonials-heading">
        <p className="testimonials-eyebrow">Community voices</p>
        <h2 id="testimonials-heading" className="testimonials-title">What our learners say</h2>
        <div className="heading-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="testimonials-intro">
          Real experiences from learners growing their Google Cloud skills with the community.
        </p>
      </div>

      <div className="testimonials-viewport" aria-label="Learner testimonials">
        <div className="testimonials-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <article
              className={`testimonial-card testimonial-card--${testimonial.accent}`}
              key={`${testimonial.name}-${index}`}
              aria-hidden={index >= TESTIMONIALS.length}
            >
              <header className="testimonial-author">
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={`${testimonial.name} profile`}
                    className="testimonial-avatar"
                    width="56"
                    height="56"
                  />
                ) : (
                  <span className="testimonial-avatar testimonial-avatar--initials" aria-hidden="true">
                    {testimonial.initials}
                  </span>
                )}
                <span className="testimonial-author-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </span>
              </header>
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsWelcomeModal() {
  const [open, setOpen] = useState(true)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus({ preventScroll: true })

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="testimonials-welcome-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false)
      }}
    >
      <div className="testimonials-welcome-modal" role="dialog" aria-modal="true" aria-labelledby="testimonials-welcome-title">
        <span className="testimonials-welcome-badge">NEW</span>
        <button
          ref={closeRef}
          type="button"
          className="testimonials-welcome-close"
          onClick={() => setOpen(false)}
          aria-label="Close testimonials introduction"
        >
          ×
        </button>
        <p className="testimonials-welcome-eyebrow">Community voices</p>
        <h2 id="testimonials-welcome-title">What our people say</h2>
        <p>
          See how learners are building confidence and real-world skills with GDG - Learn with Communities.
        </p>
        <a className="testimonials-welcome-link" href="/#testimonials" onClick={() => setOpen(false)}>
          Read their stories
        </a>
      </div>
    </div>
  )
}
