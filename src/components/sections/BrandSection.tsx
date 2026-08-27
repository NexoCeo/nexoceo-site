import BrandMark from '../common/BrandMark'

function BrandSection() {
  return (
    <section
      className="brand-panel-wrap"
      id="quem-somos"
    >
      <div className="container">
        <div className="brand-panel">
          <div className="brand-panel__text">
            <span className="eyebrow">
              SÍMBOLO E CONCEITO
            </span>

            <p>
              Três pontos conectados que
              representam o elo entre
              cliente, NexoCEO e produtor.
              Tecnologia que conecta,
              automatiza e impulsiona o
              crescimento do seu negócio.
            </p>

            <span className="eyebrow">
              O SÍMBOLO
            </span>

            <p>
              <b>
                Conexão · Automação ·
                Crescimento
              </b>

              <br />

              Três pontos. Um objetivo:
              fazer seu negócio avançar.
            </p>
          </div>

          <div className="brand-panel__mark">
            <BrandMark compact />
          </div>

          <div className="brand-panel__apps">
            <span className="eyebrow">
              APLICAÇÕES DO ÍCONE
            </span>

            <div className="app-icons">
              <div className="app-icon app-icon--dark">
                <BrandMark compact />
              </div>

              <div className="app-icon app-icon--light">
                <BrandMark compact />
              </div>

              <div className="app-icon app-icon--blue">
                <BrandMark compact />
              </div>
            </div>

            <div className="brand-signature">
              <BrandMark />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSection