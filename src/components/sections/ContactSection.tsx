import Icon from '../common/Icon'

function ContactSection() {
  const openEmail = () => {
    window.location.href =
      'mailto:contato@nexoceo.com.br'
  }

  return (
    <section
      className="cta-bar"
      id="contato"
    >
      <div className="container cta-bar__grid">
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
          className="cta-bar__button"
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