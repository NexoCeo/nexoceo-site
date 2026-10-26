import styles from './styles.module.css'
import Icon from '@/components/common/Icon'

function ContactSection() {
  const openWhatsApp = () => {
    window.location.href = 'https://wa.me/5527997333212?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20NexoCeo.'
  }

  return (
    <section
      className={styles.ctaBar}
      id="contato"
    >
      <div className={`container ${styles.ctaBarGrid}`}>
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
          onClick={openWhatsApp}
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