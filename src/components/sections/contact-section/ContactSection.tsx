import styles from './styles.module.css'
import Icon from '@/components/common/Icon'

function ContactSection() {
  const openEmail = () => {
    window.location.href = 'mailto:contato@nexoceo.com.br'
  }

  return (
    <section
      className={styles.ctaBar}
      id="contato"
    >
      <div className={`${styles.container} ${styles.ctaBarGrid}`}>
        <h2>
          Pronto para transformar
          <br />
          seu negócio?
        </h2>

        <p>
          Fale com nosso time e descubra
          como podemos gerar mais
          resultados para você.
        </p>

        <button
          type="button"
          className={styles.ctaBarButton}
          onClick={openEmail}
        >
          Fale com um especialista

          <Icon
            name="arrow"
            size={18}
          />
        </button>
      </div>
    </section>
  )
}

export default ContactSection