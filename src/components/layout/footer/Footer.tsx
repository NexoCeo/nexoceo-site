import BrandMark from '@/components/common/brand-mark/BrandMark'
import Icon from '@/components/common/Icon'

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <BrandMark />

          <p>
            Conectamos tecnologia, estratégia e
            pessoas para impulsionar negócios e
            criar o futuro.
          </p>

          <div className={styles.socials}>
            <button
              type="button"
              aria-label="Instagram"
            >
              <Icon name="instagram" />
            </button>

            <button
              type="button"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </button>

            <button
              type="button"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" />
            </button>

            <button
              type="button"
              aria-label="E-mail"
            >
              <Icon name="mail" />
            </button>
          </div>
        </div>

        <div>
          <span className="eyebrow">
            NAVEGAÇÃO
          </span>

          <ul className={styles.footerList}>
            <li>Início</li>
            <li>Produtos</li>
            <li>Metodologia</li>
            <li>Quem somos</li>
            <li>Recursos</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <span className="eyebrow">
            PRODUTOS
          </span>

          <ul className={styles.footerList}>
            <li>NexoAgenda</li>
            <li>NexoGestão</li>
            <li>NexoAnalytics</li>
          </ul>
        </div>

        <div>
          <span className="eyebrow">
            CONTATO
          </span>

          <ul className={styles.footerContact}>
            <li>
              <Icon
                name="phone"
                size={17}
              />

              <span>
                (11) 99999-9999
              </span>
            </li>

            <li>
              <Icon
                name="mail"
                size={17}
              />

              <span>
                contato@nexoceo.com.br
              </span>
            </li>

            <li>
              <Icon
                name="pin"
                size={17}
              />

              <span>
                São Gabriel da Palha - ES, Brasil
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <span>
          © 2026 NexoCEO. Todos os direitos
          reservados.
        </span>

        <div>
          <button type="button">
            Política de Privacidade
          </button>

          <button type="button">
            Termos de Uso
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer