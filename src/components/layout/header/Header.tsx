import { useState } from 'react'

import styles from './styles.module.css'

import BrandMark from '@/components/common/brand-mark/BrandMark'
import { navigation } from '@/components/data/navigation'
import { scrollToSection } from '@/utils/scrollToSection'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigateTo = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header className={`container ${styles.siteHeader}`}>
      <button
        type="button"
        className={styles.brandButton}
        onClick={() => navigateTo('inicio')}
        aria-label="Ir para o início"
      >
        <BrandMark />
      </button>

      <nav
        className={`${styles.nav} ${
          menuOpen ? styles.navOpen : ''
        }`}
      >
        {navigation.map((item) => (
          <button
            type="button"
            key={item.id}
            className={
              item.id === 'inicio'
                ? styles.active
                : ''
            }
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={styles.headerCta}
        onClick={() => navigateTo('contato')}
      >
        Fale com um especialista
      </button>

      <button
        type="button"
        className={styles.mobileMenu}
        aria-label={
          menuOpen
            ? 'Fechar menu'
            : 'Abrir menu'
        }
        aria-expanded={menuOpen}
        onClick={() =>
          setMenuOpen((current) => !current)
        }
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header