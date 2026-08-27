import Icon from '../common/Icon'

import { methodologySteps } from '../data/methodology'
import { scrollToSection } from '../../utils/scrollToSection'

function MethodologySection() {
  return (
    <section
      className="section methodology"
      id="metodologia"
    >
      <div className="container">
        <div className="section-heading section-heading--split method-head">
          <div>
            <span className="eyebrow">
              NOSSA METODOLOGIA
            </span>

            <h2>
              Do planejamento
              <br />
              à entrega de valor
            </h2>
          </div>

          <p>
            Seguimos um processo ágil e
            colaborativo para garantir
            que cada solução entregue
            resultados reais para o seu
            negócio.
          </p>

          <button
            type="button"
            className="outline-link"
            onClick={() =>
              scrollToSection(
                'contato',
              )
            }
          >
            Conheça nosso processo
          </button>
        </div>

        <div className="timeline">
          {methodologySteps.map(
            (step, index) => (
              <div
                className="timeline__item"
                key={step.number}
              >
                <div className="timeline__top">
                  <span
                    className={`timeline__icon timeline__icon--${index}`}
                  >
                    <Icon
                      name={step.icon}
                    />
                  </span>

                  <div className="timeline__line" />
                </div>

                <b>
                  {step.number}
                </b>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {
                    step.description
                  }
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default MethodologySection