import FAHMIYA_PHOTO from '../assets/fahmiya-fathima.jpeg'

const TESTIMONIALS = [
  {
    name: 'Fahmiya Fathima',
    role: 'Learn with Communities participant',
    quote: 'Had a really good experience with the Learn with Communities campaign! Got to learn new things, explore Google Skills and gain practical knowledge along the way. Completing the programme and earning 9 badges made it even more special. Overall, it was a fun and valuable learning experience!',
    photo: FAHMIYA_PHOTO,
    accent: 'blue',
  },
  {
    name: 'Arun Kumar',
    role: 'Google Cloud learner',
    quote: 'The campaign gave me a clear introduction to Google Cloud and helped me build practical skills through hands-on labs. Earning badges along the way kept me motivated and made learning more enjoyable.',
    initials: 'AK',
    accent: 'red',
  },
  {
    name: 'Meera S',
    role: 'GDG on Campus MIT member',
    quote: 'Learn with Communities was a great opportunity to learn at my own pace. The labs were practical, engaging, and helped me feel more confident using Google Cloud technologies.',
    initials: 'MS',
    accent: 'green',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section leaderboard-wide-container" aria-labelledby="testimonials-heading">
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
