import Icon from '../common/Icon'
import { products } from '../data/products'

function ProductsSection() {
  return (
    <section
      className="section products"
      id="produtos"
    >
      <div className="container">
        <div className="section-heading section-heading--split">
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

        <div className="product-grid">
          {products.map((product) => (
            <article
              className="product-card"
              key={product.title}
            >
              <span
                className={`product-icon ${product.tone}`}
              >
                <Icon
                  name={product.icon}
                  size={28}
                />
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

              <button>
                Saiba mais
                <Icon
                  name="arrow"
                  size={16}
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection