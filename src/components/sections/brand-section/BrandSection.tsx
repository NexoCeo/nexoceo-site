import styles from './styles.module.css'

import BrandMark from '@/components/common/brand-mark/BrandMark'

function BrandSection() {
  return (
    <section
      className={styles.brandPanelWrap}
      id="quem-somos"
    >
      <div className="container">
        <div className={styles.brandPanel}>
          <div className={styles.brandPanelText}>
            <span className="eyebrow">
              SÍMBOLO E CONCEITO
            </span>

            <p>
              Três pontos conectados que representam
              o elo entre cliente, NexoCEO e produtor.
              Tecnologia que conecta, automatiza e
              impulsiona o crescimento do seu negócio.
            </p>

            <span className="eyebrow">
              O SÍMBOLO
            </span>

            <p>
              <b>
                Conexão · Automação · Crescimento
              </b>

              <br />

              Três pontos. Um objetivo:
              fazer seu negócio avançar.
            </p>
          </div>

          <div className={styles.brandSignature}>
            <BrandMark />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSection