import Icon from '../common/Icon'
import DashboardMock from '../mocks/DashboardMock'

import { appointments } from '../data/appointments'
import { whyFeatures } from '../data/whyFeatures'

function WhyNexoSection() {
  return (
    <section
      className="section why"
      id="recursos"
    >
      <div className="container why__grid">
        <div className="why__copy">
          <span className="eyebrow">
            POR QUE NEXOCEO?
          </span>

          <h2>
            Tudo o que você precisa
            <br />
            para crescer, em um só lugar.
          </h2>

          <ul>
            {whyFeatures.map(
              (feature) => (
                <li key={feature.text}>
                  <Icon
                    name={feature.icon}
                  />

                  {feature.text}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="why__visual">
          <DashboardMock compact />

          <div className="appointment-popover">
            <b>
              Próximos agendamentos
            </b>

            {appointments.map(
              (appointment) => (
                <div
                  key={`${appointment.time}-${appointment.client}`}
                >
                  <strong>
                    {appointment.time}
                  </strong>

                  <span>
                    {
                      appointment.service
                    }

                    <small>
                      {
                        appointment.client
                      }
                    </small>
                  </span>
                </div>
              ),
            )}

            <button type="button">
              Ver todos

              <Icon
                name="arrow"
                size={14}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyNexoSection