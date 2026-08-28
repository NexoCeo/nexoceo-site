import styles from './styles.module.css'

import BrandMark from '@/components/common/brand-mark/BrandMark'
import Icon from '@/components/common/Icon'

import { navigation } from '@/components/data/navigation'
import { scrollToSection } from '@/utils/scrollToSection'

function Footer() {
  const navigateTo = (id: string) => {
    scrollToSection(id)
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <BrandMark />

          <p>
            Conectamos tecnologia, estratégia e pessoas
            para impulsionar negócios e criar o futuro.
          </p>

          <div className={styles.socials}>
            <button
              type="button"
              className={`${styles.socialButton} ${styles.instagram}`}
              aria-label="Instagram"
            >
              <Icon name="instagram" />
            </button>

            <button
              type="button"
              className={`${styles.socialButton} ${styles.linkedin}`}
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </button>

            <button
              type="button"
              className={`${styles.socialButton} ${styles.whatsapp}`}
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" />
            </button>

            <button
              type="button"
              className={`${styles.socialButton} ${styles.email}`}
              aria-label="E-mail"
              onClick={() => {
                window.location.href =
                  'mailto:contato@nexoceo.com.br'
              }}
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
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => navigateTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="eyebrow">
            PRODUTOS
          </span>

          <ul className={styles.footerList}>
            <li>
              <button
                type="button"
                onClick={() => navigateTo('produtos')}
              >
                NexoAgenda
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => navigateTo('produtos')}
              >
                NexoGestão
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => navigateTo('produtos')}
              >
                NexoAnalytics
              </button>
            </li>
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

              <a href="tel:+5511999999999">
                (11) 99999-9999
              </a>
            </li>

            <li>
              <Icon
                name="mail"
                size={17}
              />

              <a href="mailto:contato@nexoceo.com.br">
                contato@nexoceo.com.br
              </a>
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
          © 2026 NexoCEO. Todos os direitos reservados.
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