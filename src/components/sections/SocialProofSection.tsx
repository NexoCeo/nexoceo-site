import { useState } from 'react'

import { testimonials } from '../data/testimonials'

function SocialProofSection() {
  const [
    activeTestimonial,
    setActiveTestimonial,
  ] = useState(0)

  const testimonial =
    testimonials[activeTestimonial]

  const initials = testimonial.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <section className="social-proof">
      <div className="container social-proof__grid">
        <div className="clients">
          <span className="eyebrow">
            QUEM CONFIA NA NEXOCEO
          </span>

          <div className="client-logos">
            <strong>
              ◉ STUDIO
              <br />
              FUSION
            </strong>

            <strong className="serif">
              BellaForma
            </strong>

            <strong className="script">
              Barbearia

              <small>
                PREMIUM
              </small>
            </strong>

            <strong>
              ✤ Clínica Vitalle

              <small>
                SAÚDE INTEGRADA
              </small>
            </strong>
          </div>

          <div className="dots">
            {testimonials.map(
              (item, index) => (
                <button
                  type="button"
                  key={item.name}
                  aria-label={`Depoimento ${
                    index + 1
                  }`}
                  onClick={() =>
                    setActiveTestimonial(
                      index,
                    )
                  }
                  className={
                    activeTestimonial ===
                    index
                      ? 'active'
                      : ''
                  }
                />
              ),
            )}
          </div>
        </div>

        <div className="testimonial">
          <span className="quote">
            “
          </span>

          <p>
            {testimonial.text}
          </p>

          <div className="testimonial__person">
            <div>
              <b>
                {testimonial.name}
              </b>

              <small>
                {testimonial.company}
              </small>
            </div>

            <div className="avatar">
              {initials}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection