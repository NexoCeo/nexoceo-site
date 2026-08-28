import styles from './styles.module.css'

import Icon from '@/components/common/Icon'
import Header from '@/components/layout/header/Header'

import DashboardMock from '@/components/mocks/dashboard-mock/DashboardMock'
import PhoneMock from '@/components/mocks/phone-mock/PhoneMock'

import { scrollToSection } from '@/utils/scrollToSection'

function HeroSection() {
  return (
    <section
      className={styles.hero}
      id="inicio"
    >
      <div
        className={`${styles.heroGlow} ${styles.heroGlowOne}`}
      />

      <div
        className={`${styles.heroGlow} ${styles.heroGlowTwo}`}
      />

      <Header />

      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <h1>
            Tecnologia que
            <br />
            conecta, automatiza e
            <br />
            <span>impulsiona</span>{' '}
            seu negócio.
          </h1>

          <p>
            A NexoCEO oferece soluções
            inteligentes para gestão de
            atendimentos e processos,
            ajudando empresas e
            profissionais a crescerem
            com eficiência, organização
            e previsibilidade.
          </p>

          <div className={styles.heroActions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() =>
                scrollToSection('produtos')
              }
            >
              Conheça nossos produtos
            </button>

            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={() =>
                scrollToSection('contato')
              }
            >
              Agendar demonstração

              <Icon
                name="play"
                size={19}
              />
            </button>
          </div>

          <div className={styles.heroRoles}>
            <div>
              <span className={styles.roleIcon}>
                <Icon name="users" />
              </span>

              <b>Cliente</b>

              <small>
                Conexão que inicia
                <br />
                o atendimento
              </small>
            </div>

            <div>
              <span className={styles.roleIcon}>
                <Icon name="calendar" />
              </span>

              <b>NexoCEO</b>

              <small>
                Automação que
                <br />
                organiza e agenda
              </small>
            </div>

            <div>
              <span className={styles.roleIcon}>
                <Icon name="chart" />
              </span>

              <b>Produtor</b>

              <small>
                Seu negócio cresce
                <br />
                com mais resultados
              </small>
            </div>
          </div>
        </div>

        <div
          className={styles.heroVisual}
          aria-label="Painel da plataforma NexoCEO"
        >
          <div className={styles.laptopShell}>
            <div className={styles.laptopCamera} />

            <DashboardMock />
          </div>

          <div className={styles.laptopBase} />

          <PhoneMock />
        </div>
      </div>
    </section>
  )
}

export default HeroSection