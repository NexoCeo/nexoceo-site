import { useState } from 'react'

import BrandMark from '../common/BrandMark'

import { navigation } from '../../data/navigation'
import { scrollToSection } from '../../utils/scrollToSection'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigateTo = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header className="site-header container">
      <button
        className="brand-button"
        onClick={() => navigateTo('inicio')}
        aria-label="Ir para o início"
      >
        <BrandMark />
      </button>

      <nav
        className={`nav ${
          menuOpen ? 'nav--open' : ''
        }`}
      >
        {navigation.map((item) => (
          <button
            key={item.id}
            className={
              item.id === 'inicio'
                ? 'active'
                : ''
            }
            onClick={() =>
              navigateTo(item.id)
            }
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        className="header-cta"
        onClick={() =>
          navigateTo('contato')
        }
      >
        Fale com um especialista
      </button>

      <button
        className="mobile-menu"
        aria-label={
          menuOpen
            ? 'Fechar menu'
            : 'Abrir menu'
        }
        aria-expanded={menuOpen}
        onClick={() =>
          setMenuOpen(
            (current) => !current,
          )
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