import styles from './styles.module.css'

import Icon from '@/components/common/Icon'
import DashboardMock from '@/components/mocks/dashboard-mock/DashboardMock'

import { appointments } from '@/components/data/appointments'
import { whyFeatures } from '@/components/data/whyFeatures'

function WhyNexoSection() {
  return (
    <section
      className={`section ${styles.why}`}
      id="recursos"
    >
      <div className={`container ${styles.whyGrid}`}>
        <div className={styles.whyCopy}>
          <span className="eyebrow">
            POR QUE NEXOCEO?
          </span>

          <h2>
            Tudo o que você precisa
            <br />
            para crescer, em um só lugar.
          </h2>

          <ul>
            {whyFeatures.map((feature) => (
              <li key={feature.text}>
                <Icon name={feature.icon} />
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.whyVisual}>
          <DashboardMock compact />

          <div className={styles.appointmentPopover}>
            <b>Próximos agendamentos</b>

            {appointments.map((appointment) => (
              <div
                key={`${appointment.time}-${appointment.client}`}
              >
                <strong>
                  {appointment.time}
                </strong>

                <span>
                  {appointment.service}

                  <small>
                    {appointment.client}
                  </small>
                </span>
              </div>
            ))}

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