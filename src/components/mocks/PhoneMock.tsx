import BrandMark from '../common/BrandMark'

const phoneStats = [
  {
    label: 'Atendimentos',
    value: '128',
    change: '+12%',
  },
  {
    label: 'Agendamentos',
    value: '72',
    change: '+8%',
  },
  {
    label: 'Clientes',
    value: '96',
    change: '+15%',
  },
]

function PhoneMock() {
  return (
    <div className="phone-mock">
      <div className="phone-mock__notch" />

      <div className="phone-mock__screen">
        <BrandMark compact />

        <h4>
          Bem-vindo!
        </h4>

        <p>
          Tudo conectado.
          <br />
          Seu negócio crescendo.
        </p>

        {phoneStats.map((stat) => (
          <div
            className="phone-stat"
            key={stat.label}
          >
            <span>
              {stat.label}

              <b>
                {stat.value}
              </b>
            </span>

            <em>
              {stat.change}
            </em>
          </div>
        ))}

        <div className="mini-chart">
          <svg
            viewBox="0 0 140 60"
            aria-hidden="true"
          >
            <polyline
              points="4,48 22,38 36,44 52,26 70,35 90,14 108,24 136,7"
              fill="none"
              stroke="#1dd7c1"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PhoneMock