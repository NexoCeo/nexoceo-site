import { useMemo, useState, type ReactNode } from 'react'

type IconName =
  | 'calendar'
  | 'chart'
  | 'users'
  | 'check'
  | 'arrow'
  | 'play'
  | 'lightbulb'
  | 'target'
  | 'code'
  | 'rocket'
  | 'shield'
  | 'headset'
  | 'lock'
  | 'layers'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'instagram'
  | 'linkedin'
  | 'whatsapp'
  | 'send'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  const paths: Record<IconName, ReactNode> = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/><path d="m4 10 6-5 6 7 5-4"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m15 8 4 4-4 4"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/></>,
    lightbulb: <><path d="M9 18h6M10 22h4"/><path d="M8.4 14.6A6 6 0 1 1 15.6 14.6c-.8.6-1.2 1.2-1.3 1.9h-4.6c-.1-.7-.5-1.3-1.3-1.9Z"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M22 12h-2"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    rocket: <><path d="M14 4c2-1 4-1 6-1 0 2 0 4-1 6l-7 7-4-4 6-8Z"/><path d="M8 12 4 13l-2 4 5-1M12 16l-1 4-4 2 1-5"/></>,
    shield: <><path d="M12 3 4 6v6c0 5 3.4 8.6 8 9 4.6-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.2 19.2 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></>,
    whatsapp: <><path d="M20 11.8A8 8 0 1 1 6.3 6.2 8 8 0 0 1 20 11.8Z"/><path d="m5 20 1.2-3.5"/><path d="M8.8 9.2c.3 2.8 2.2 4.7 5 5"/></>,
    send: <><path d="m3 3 18 9-18 9 4-9-4-9Z"/><path d="M7 12h14"/></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`}>
      <svg className="brand__symbol" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="markGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#15d9c2" />
            <stop offset="1" stopColor="#2171ff" />
          </linearGradient>
        </defs>
        <circle cx="18" cy="10" r="8" fill="url(#markGradient)"/>
        <circle cx="50" cy="12" r="8" fill="url(#markGradient)"/>
        <circle cx="16" cy="50" r="8" fill="url(#markGradient)"/>
        <circle cx="48" cy="50" r="8" fill="url(#markGradient)"/>
        <path d="M18 18v24M24 45l17-20M47 20v22" stroke="url(#markGradient)" strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <div className="brand__copy">
        <strong>NexoCEO</strong>
        {!compact && <small>Atenda. Agende. Cresça.</small>}
      </div>
    </div>
  )
}

function Metric({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <div><strong>{value}</strong><em>{change}</em></div>
    </div>
  )
}

function DashboardMock({ compact = false }: { compact?: boolean }) {
  const chart = useMemo(() => [26, 36, 31, 42, 34, 49, 39, 58, 48, 44, 62, 68], [])
  return (
    <div className={`dashboard ${compact ? 'dashboard--compact' : ''}`}>
      <aside className="dashboard__sidebar">
        <BrandMark compact />
        <div className="side-nav">
          {['Resumo','Atendimentos','Agendamentos','Clientes','Mensagens','Relatórios','Configurações'].map((item, i) => (
            <div className={`side-nav__item ${i === 0 ? 'active' : ''}`} key={item}>
              <span className="side-nav__dot" /> {item}
            </div>
          ))}
        </div>
      </aside>
      <div className="dashboard__content">
        <div className="dashboard__top"><span>Resumo geral</span><span>Olá, Produtor <b>●</b></span></div>
        <div className="dashboard__metrics">
          <Metric label="Atendimentos" value="128" change="+12%" />
          <Metric label="Agendamentos" value="72" change="+8%" />
          <Metric label="Clientes" value="96" change="+15%" />
        </div>
        <div className="chart-card">
          <div className="chart-card__head"><span>Evolução de atendimentos</span><b>Últimos 6 meses</b></div>
          <div className="chart-grid">
            <svg viewBox="0 0 440 170" preserveAspectRatio="none">
              {[24,58,92,126,160].map(y => <line key={y} x1="0" y1={y} x2="440" y2={y} stroke="#e8edf3" strokeWidth="1" />)}
              <polyline
                fill="none"
                stroke="#2d72ff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={chart.map((v, i) => `${i * 40},${165 - v * 2.1}`).join(' ')}
              />
              {chart.map((v, i) => <circle key={i} cx={i * 40} cy={165 - v * 2.1} r="3.5" fill="#2d72ff" />)}
            </svg>
            <div className="chart-labels"><span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneMock() {
  return (
    <div className="phone-mock">
      <div className="phone-mock__notch" />
      <div className="phone-mock__screen">
        <BrandMark compact />
        <h4>Bem-vindo!</h4>
        <p>Tudo conectado.<br/>Seu negócio crescendo.</p>
        {[
          ['Atendimentos','128','+12%'],
          ['Agendamentos','72','+8%'],
          ['Clientes','96','+15%'],
        ].map(([a,b,c]) => <div className="phone-stat" key={a}><span>{a}<b>{b}</b></span><em>{c}</em></div>)}
        <div className="mini-chart"><svg viewBox="0 0 140 60"><polyline points="4,48 22,38 36,44 52,26 70,35 90,14 108,24 136,7" fill="none" stroke="#1dd7c1" strokeWidth="3"/></svg></div>
      </div>
    </div>
  )
}

const products = [
  {
    icon: 'calendar' as IconName,
    title: 'NexoAgenda',
    description: 'Sistema completo de agendamento online para profissionais, empresas e seus clientes.',
    items: ['Agenda inteligente','Gestão de serviços e profissionais','Lembretes automáticos','Relatórios e indicadores'],
    tone: 'blue',
  },
  {
    icon: 'users' as IconName,
    title: 'NexoGestão',
    description: 'Plataforma de gestão empresarial para otimizar processos e aumentar a produtividade.',
    items: ['Gestão financeira','Controle de equipes','Relatórios personalizados','Integrações'],
    tone: 'green',
  },
  {
    icon: 'chart' as IconName,
    title: 'NexoAnalytics',
    description: 'Inteligência de dados para decisões mais assertivas e crescimento sustentável.',
    items: ['Dashboards inteligentes','Análise de desempenho','Indicadores em tempo real','Exportação de relatórios'],
    tone: 'violet',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [testimonial, setTestimonial] = useState(0)

  const testimonials = [
    ['A NexoCEO revolucionou a forma como gerenciamos nossos atendimentos. Mais organização, mais clientes e muito mais resultados.', 'Mariana Santos', 'Espaço Serena'],
    ['Finalmente conseguimos centralizar agenda, atendimento e indicadores em um só lugar, sem perder simplicidade.', 'Ricardo Lima', 'Studio Fusion'],
    ['A equipe ganhou tempo e previsibilidade. Hoje sabemos exatamente onde agir para crescer.', 'Camila Torres', 'BellaForma'],
    ['O sistema é simples para o time e poderoso para a gestão. Foi uma mudança muito positiva no dia a dia.', 'Paulo Mendes', 'Barbearia Premium'],
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <header className="site-header container">
          <button className="brand-button" onClick={() => scrollTo('inicio')} aria-label="Ir para o início"><BrandMark /></button>
          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            {[
              ['Início','inicio'],['Produtos','produtos'],['Metodologia','metodologia'],['Quem somos','quem-somos'],['Recursos','recursos'],['Contato','contato']
            ].map(([label,id]) => <button key={id} className={id === 'inicio' ? 'active' : ''} onClick={() => scrollTo(id)}>{label}</button>)}
          </nav>
          <button className="header-cta" onClick={() => scrollTo('contato')}>Fale com um especialista</button>
          <button className="mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(v => !v)}>
            <span/><span/><span/>
          </button>
        </header>

        <div className="container hero__grid">
          <div className="hero__copy">
            <h1>Tecnologia que<br/>conecta, automatiza e<br/><span>impulsiona</span> seu negócio.</h1>
            <p>A NexoCEO oferece soluções inteligentes para gestão de atendimentos e processos, ajudando empresas e profissionais a crescerem com eficiência, organização e previsibilidade.</p>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => scrollTo('produtos')}>Conheça nossos produtos</button>
              <button className="btn btn--ghost" onClick={() => scrollTo('contato')}>Agendar demonstração <Icon name="play" size={19}/></button>
            </div>
            <div className="hero__roles">
              <div><span className="role-icon"><Icon name="users"/></span><b>Cliente</b><small>Conexão que inicia<br/>o atendimento</small></div>
              <div><span className="role-icon"><Icon name="calendar"/></span><b>NexoCEO</b><small>Automação que<br/>organiza e agenda</small></div>
              <div><span className="role-icon"><Icon name="chart"/></span><b>Produtor</b><small>Seu negócio cresce<br/>com mais resultados</small></div>
            </div>
          </div>
          <div className="hero__visual" aria-label="Painel da plataforma NexoCEO">
            <div className="laptop-shell"><div className="laptop-camera"/><DashboardMock/></div>
            <div className="laptop-base"/>
            <PhoneMock/>
          </div>
        </div>
      </section>

      <section className="section products" id="produtos">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><span className="eyebrow">SOLUÇÕES COMPLETAS</span><h2>Produtos que se adaptam<br/>ao seu negócio</h2></div>
            <p>Plataformas intuitivas e poderosas para transformar a forma como você gerencia atendimentos, clientes e processos.</p>
          </div>
          <div className="product-grid">
            {products.map(product => (
              <article className="product-card" key={product.title}>
                <span className={`product-icon ${product.tone}`}><Icon name={product.icon} size={28}/></span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul>{product.items.map(item => <li key={item}><span><Icon name="check" size={14}/></span>{item}</li>)}</ul>
                <button>Saiba mais <Icon name="arrow" size={16}/></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-panel-wrap" id="quem-somos">
        <div className="container">
          <div className="brand-panel">
            <div className="brand-panel__text">
              <span className="eyebrow">SÍMBOLO E CONCEITO</span>
              <p>Três pontos conectados que representam o elo entre cliente, NexoCEO e produtor. Tecnologia que conecta, automatiza e impulsiona o crescimento do seu negócio.</p>
              <span className="eyebrow">O SÍMBOLO</span>
              <p><b>Conexão · Automação · Crescimento</b><br/>Três pontos. Um objetivo: fazer seu negócio avançar.</p>
            </div>
            <div className="brand-panel__mark"><BrandMark compact/></div>
            <div className="brand-panel__apps">
              <span className="eyebrow">APLICAÇÕES DO ÍCONE</span>
              <div className="app-icons">
                <div className="app-icon app-icon--dark"><BrandMark compact/></div>
                <div className="app-icon app-icon--light"><BrandMark compact/></div>
                <div className="app-icon app-icon--blue"><BrandMark compact/></div>
              </div>
              <div className="brand-signature"><BrandMark /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section methodology" id="metodologia">
        <div className="container">
          <div className="section-heading section-heading--split method-head">
            <div><span className="eyebrow">NOSSA METODOLOGIA</span><h2>Do planejamento<br/>à entrega de valor</h2></div>
            <p>Seguimos um processo ágil e colaborativo para garantir que cada solução entregue resultados reais para o seu negócio.</p>
            <button className="outline-link" onClick={() => scrollTo('contato')}>Conheça nosso processo</button>
          </div>
          <div className="timeline">
            {[
              ['01','Entendimento','Escutamos seu negócio para entender desafios e objetivos.','lightbulb'],
              ['02','Planejamento','Definimos a melhor estratégia e soluções personalizadas.','target'],
              ['03','Desenvolvimento','Construímos com tecnologia, qualidade e agilidade.','code'],
              ['04','Entrega e Suporte','Entregamos, treinamos e seguimos juntos para evoluir sempre.','rocket'],
            ].map(([n,t,d,i], index) => (
              <div className="timeline__item" key={n}>
                <div className="timeline__top"><span className={`timeline__icon timeline__icon--${index}`}><Icon name={i as IconName}/></span><div className="timeline__line"/></div>
                <b>{n}</b><h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why" id="recursos">
        <div className="container why__grid">
          <div className="why__copy">
            <span className="eyebrow">POR QUE NEXOCEO?</span>
            <h2>Tudo o que você precisa<br/>para crescer, em um só lugar.</h2>
            <ul>
              <li><Icon name="layers"/> Interface intuitiva e fácil de usar</li>
              <li><Icon name="shield"/> Segurança e privacidade dos seus dados</li>
              <li><Icon name="rocket"/> Tecnologia escalável e confiável</li>
              <li><Icon name="headset"/> Suporte próximo e humanizado</li>
            </ul>
          </div>
          <div className="why__visual">
            <DashboardMock compact/>
            <div className="appointment-popover">
              <b>Próximos agendamentos</b>
              {[
                ['09:00','Corte de cabelo','Julia Silva'],
                ['10:30','Barba','Lucas Oliveira'],
                ['14:00','Coloração','Mariana Santos'],
              ].map(([h,s,n]) => <div key={h}><strong>{h}</strong><span>{s}<small>{n}</small></span></div>)}
              <button>Ver todos <Icon name="arrow" size={14}/></button>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container social-proof__grid">
          <div className="clients">
            <span className="eyebrow">QUEM CONFIA NA NEXOCEO</span>
            <div className="client-logos">
              <strong>◉ STUDIO<br/>FUSION</strong>
              <strong className="serif">BellaForma</strong>
              <strong className="script">Barbearia <small>PREMIUM</small></strong>
              <strong>✤ Clínica Vitalle <small>SAÚDE INTEGRADA</small></strong>
            </div>
            <div className="dots">
              {testimonials.map((_,i) => <button aria-label={`Depoimento ${i+1}`} key={i} onClick={() => setTestimonial(i)} className={testimonial === i ? 'active' : ''}/>) }
            </div>
          </div>
          <div className="testimonial">
            <span className="quote">“</span>
            <p>{testimonials[testimonial][0]}</p>
            <div className="testimonial__person">
              <div><b>{testimonials[testimonial][1]}</b><small>{testimonials[testimonial][2]}</small></div>
              <div className="avatar">{testimonials[testimonial][1].split(' ').map(s => s[0]).slice(0,2).join('')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-bar" id="contato">
        <div className="container cta-bar__grid">
          <h2>Pronto para transformar<br/>seu negócio?</h2>
          <p>Fale com nosso time e descubra como podemos gerar mais resultados para você.</p>
          <button className="cta-bar__button" onClick={() => window.location.href='mailto:contato@nexoceo.com.br'}>Fale com um especialista <Icon name="arrow" size={18}/></button>
        </div>
      </section>

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
    </main>
  )
}

export default App
