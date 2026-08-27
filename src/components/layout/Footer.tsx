export default function Footer() {
  return (
    <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <BrandMark />
            <p>Conectamos tecnologia, estratégia e pessoas para impulsionar negócios e criar o futuro.</p>
            <div className="socials">
              <button aria-label="Instagram"><Icon name="instagram"/></button>
              <button aria-label="LinkedIn"><Icon name="linkedin"/></button>
              <button aria-label="WhatsApp"><Icon name="whatsapp"/></button>
              <button aria-label="E-mail"><Icon name="mail"/></button>
            </div>
          </div>
          <div><span className="eyebrow">NAVEGAÇÃO</span><ul className="footer-list">{['Início','Produtos','Metodologia','Quem somos','Recursos','Contato'].map(i => <li key={i}>{i}</li>)}</ul></div>
          <div><span className="eyebrow">PRODUTOS</span><ul className="footer-list"><li>NexoAgenda</li><li>NexoGestão</li><li>NexoAnalytics</li></ul></div>
          <div><span className="eyebrow">CONTATO</span><ul className="footer-contact"><li><Icon name="phone" size={17}/>(11) 99999-9999</li><li><Icon name="mail" size={17}/>contato@nexoceo.com.br</li><li><Icon name="pin" size={17}/>São Paulo - SP, Brasil</li></ul></div>
        </div>
        <div className="container footer__bottom"><span>© 2026 NexoCEO. Todos os direitos reservados.</span><div><button>Política de Privacidade</button><button>Termos de Uso</button></div></div>
      </footer>
  );
}