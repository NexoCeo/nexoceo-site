import styles from './styles.module.css'

import BrandMark from '../../common/brand-mark/BrandMark'
import Metric from '../Metric'

interface DashboardMockProps {
  compact?: boolean
}

const chartData = [
  26,
  36,
  31,
  42,
  34,
  49,
  39,
  58,
  48,
  44,
  62,
  68,
]

const navigationItems = [
  'Resumo',
  'Atendimentos',
  'Agendamentos',
  'Clientes',
  'Mensagens',
  'Relatórios',
  'Configurações',
]

const chartLines = [
  24,
  58,
  92,
  126,
  160,
]

function DashboardMock({
  compact = false,
}: DashboardMockProps) {
  return (
    <div
      className={`${styles.dashboard} ${
        compact ? styles.dashboardCompact : ''
      }`}
    >
      <aside className={styles.dashboardSidebar}>
        <BrandMark compact />

        <div className={styles.sideNav}>
          {navigationItems.map((item, index) => (
            <div
              key={item}
              className={`${styles.sideNavItem} ${
                index === 0 ? styles.active : ''
              }`}
            >
              <span className={styles.sideNavDot} />

              {item}
            </div>
          ))}
        </div>
      </aside>

      <div className={styles.dashboardContent}>
        <div className={styles.dashboardTop}>
          <span>Resumo geral</span>

          <span>
            Olá, Produtor <b>●</b>
          </span>
        </div>

        <div className={styles.dashboardMetrics}>
          <Metric
            label="Atendimentos"
            value="128"
            change="+12%"
          />

          <Metric
            label="Agendamentos"
            value="72"
            change="+8%"
          />

          <Metric
            label="Clientes"
            value="96"
            change="+15%"
          />
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartCardHead}>
            <span>
              Evolução de atendimentos
            </span>

            <b>
              Últimos 6 meses
            </b>
          </div>

          <div className={styles.chartGrid}>
            <svg
              viewBox="0 0 440 170"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {chartLines.map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="440"
                  y2={y}
                  stroke="#e8edf3"
                  strokeWidth="1"
                />
              ))}

              <polyline
                fill="none"
                stroke="#2d72ff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={chartData
                  .map(
                    (value, index) =>
                      `${index * 40},${165 - value * 2.1}`,
                  )
                  .join(' ')}
              />

              {chartData.map((value, index) => (
                <circle
                  key={`${index}-${value}`}
                  cx={index * 40}
                  cy={165 - value * 2.1}
                  r="3.5"
                  fill="#2d72ff"
                />
              ))}
            </svg>

            <div className={styles.chartLabels}>
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMock