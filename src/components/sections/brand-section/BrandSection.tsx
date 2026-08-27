import styles from './styles.module.css'
import BrandMark from '@/components/common/brand-mark/BrandMark'

function BrandSection() {
  return (
    <section
      className={styles.brandPanelWrap}
      id="quem-somos"
    >
      <div className={styles.container}>
        <div className={styles.brandPanel}>
          <div className={styles.brandPanelText}>
            <span className={styles.eyebrow}>
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

            <span className={styles.eyebrow}>
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

          <div className={styles.brandPanelMark}>
            <BrandMark compact />
          </div>

          <div className={styles.brandPanelApps}>
            <span className={styles.eyebrow}>
              APLICAÇÕES DO ÍCONE
            </span>

            <div className={styles.appIcons}>
              <div
                className={`${styles.appIcon} ${styles.appIconDark}`}
              >
                <BrandMark compact />
              </div>

              <div
                className={`${styles.appIcon} ${styles.appIconLight}`}
              >
                <BrandMark compact />
              </div>

              <div
                className={`${styles.appIcon} ${styles.appIconBlue}`}
              >
                <BrandMark compact />
              </div>
            </div>

            <div className={styles.brandSignature}>
              <BrandMark />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSection