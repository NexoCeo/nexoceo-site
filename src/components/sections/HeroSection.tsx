import Icon from '../common/Icon'
import Header from '../layout/Header'

import DashboardMock from '../mocks/DashboardMock'
import PhoneMock from '../mocks/PhoneMock'

import { scrollToSection } from '../../utils/scrollToSection'

function HeroSection() {
  return (
    <section
      className="hero"
      id="inicio"
    >
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <Header />

      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>
            Tecnologia que
            <br />
            conecta, automatiza e
            <br />
            <span>
              impulsiona
            </span>{' '}
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

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() =>
                scrollToSection(
                  'produtos',
                )
              }
            >
              Conheça nossos produtos
            </button>

            <button
              type="button"
              className="btn btn--ghost"
              onClick={() =>
                scrollToSection(
                  'contato',
                )
              }
            >
              Agendar demonstração

              <Icon
                name="play"
                size={19}
              />
            </button>
          </div>

          <div className="hero__roles">
            <div>
              <span className="role-icon">
                <Icon name="users" />
              </span>

              <b>
                Cliente
              </b>

              <small>
                Conexão que inicia
                <br />
                o atendimento
              </small>
            </div>

            <div>
              <span className="role-icon">
                <Icon name="calendar" />
              </span>

              <b>
                NexoCEO
              </b>

              <small>
                Automação que
                <br />
                organiza e agenda
              </small>
            </div>

            <div>
              <span className="role-icon">
                <Icon name="chart" />
              </span>

              <b>
                Produtor
              </b>

              <small>
                Seu negócio cresce
                <br />
                com mais resultados
              </small>
            </div>
          </div>
        </div>

        <div
          className="hero__visual"
          aria-label="Painel da plataforma NexoCEO"
        >
          <div className="laptop-shell">
            <div className="laptop-camera" />

            <DashboardMock />
          </div>

          <div className="laptop-base" />

          <PhoneMock />
        </div>
      </div>
    </section>
  )
}

export default HeroSection