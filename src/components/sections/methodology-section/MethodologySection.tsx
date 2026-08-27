import styles from './styles.module.css'

import Icon from '@/components/common/Icon'
import { methodologySteps } from '@/components/data/methodology'
import { scrollToSection } from '@/utils/scrollToSection'

function MethodologySection() {
  return (
    <section
      className={`${styles.section} ${styles.methodology}`}
      id="metodologia"
    >
      <div className="container">
        <div
          className={`${styles.sectionHeading} ${styles.sectionHeadingSplit} ${styles.methodHead}`}
        >
          <div>
            <span className={styles.eyebrow}>
              NOSSA METODOLOGIA
            </span>

            <h2>
              Do planejamento
              <br />
              à entrega de valor
            </h2>
          </div>

          <p>
            Seguimos um processo ágil e colaborativo
            para garantir que cada solução entregue
            resultados reais para o seu negócio.
          </p>

          <button
            type="button"
            className={styles.outlineLink}
            onClick={() => scrollToSection('contato')}
          >
            Conheça nosso processo
          </button>
        </div>

        <div className={styles.timeline}>
          {methodologySteps.map((step, index) => (
            <div
              className={styles.timelineItem}
              key={step.number}
            >
              <div className={styles.timelineTop}>
                <span
                  className={`${styles.timelineIcon} ${
                    styles[`timelineIcon${index}`]
                  }`}
                >
                  <Icon name={step.icon} />
                </span>

                <div className={styles.timelineLine} />
              </div>

              <b>{step.number}</b>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MethodologySection