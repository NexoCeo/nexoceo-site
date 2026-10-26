import styles from './styles.module.css'

import Icon from '@/components/common/Icon'
import { products } from '@/components/data/products'
import nexoEloLogo from '@/images/logo-nexoElo.png'

function ProductsSection() {
  return (
    <section
      className={`section ${styles.products}`}
      id="produtos"
    >
      <div className="container">
        <div
          className={`section-heading section-heading--split ${styles.sectionHeading}`}
        >
          <div>
            <span className="eyebrow">
              SOLUÇÕES COMPLETAS
            </span>

            <h2>
              Produtos que se adaptam
              <br />
              ao seu negócio
            </h2>
          </div>

          <p>
            Plataformas intuitivas e poderosas para transformar
            a forma como você gerencia atendimentos, clientes e
            processos.
          </p>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <article
              className={styles.productCard}
              key={product.title}
            >
              <span
                className={`${styles.productIcon} ${
                  product.title === 'NexoElo' ? styles.productLogoWrapper : styles[product.tone]
                }`}
              >
                {product.title === 'NexoElo' ? (
                  <img
                    src={nexoEloLogo}
                    alt="Logo NexoElo"
                    className={styles.productLogo}
                  />
                ) : (
                  <Icon
                    name={product.icon}
                    size={28}
                  />
                )}
              </span>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <ul>
                {product.items.map((item) => (
                  <li key={item}>
                    <span>
                      <Icon
                        name="check"
                        size={14}
                      />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>

              <a className={styles.learnMore} href={product.title === 'NexoElo' ? '/nexoelo' : '#contato'}>
                Saiba mais

                <Icon
                  name="arrow"
                  size={16}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection