import { useState } from 'react'
import styles from './styles.module.css'

import { testimonials } from '@/components/data/testimonials'

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
    <section className={styles.socialProof}>
      <div className={`container ${styles.socialProofGrid}`}>
        <div className={styles.clients}>
          <span className="eyebrow">
            QUEM CONFIA NA NEXOCEO
          </span>

          <div className={styles.clientLogos}>
            <strong>
              ◉ STUDIO
              <br />
              FUSION
            </strong>

            <strong className={styles.serif}>
              BellaForma
            </strong>

            <strong className={styles.script}>
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

          <div className={styles.dots}>
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.name}
                aria-label={`Depoimento ${index + 1}`}
                onClick={() =>
                  setActiveTestimonial(index)
                }
                className={
                  activeTestimonial === index
                    ? styles.active
                    : ''
                }
              />
            ))}
          </div>
        </div>

        <div className={styles.testimonial}>
          <span className={styles.quote}>
            “
          </span>

          <p>
            {testimonial.text}
          </p>

          <div className={styles.testimonialPerson}>
            <div>
              <b>
                {testimonial.name}
              </b>

              <small>
                {testimonial.company}
              </small>
            </div>

            <div className={styles.avatar}>
              {initials}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection