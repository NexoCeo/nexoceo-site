import logo from '@/images/logo-nexoElo.png'
import styles from './NexoEloPage.module.css'

const benefits = [
  { title: 'Agendamento online', text: 'Organize os horários e permita que clientes solicitem agendamentos de forma simples.' },
  { title: 'Serviços e profissionais', text: 'Centralize seus serviços, a disponibilidade da equipe e os atendimentos em um único lugar.' },
  { title: 'Gestão da agenda', text: 'Acompanhe agendamentos, status e informações importantes do dia a dia.' },
  { title: 'Indicadores do negócio', text: 'Visualize informações sobre os atendimentos para apoiar suas decisões.' },
]

export default function NexoEloPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a className={styles.back} href="/">← Voltar para NexoCeo</a>
          <a className={styles.headerCta} href="https://nexoelo.nexoceo.com.br/global/login">Teste grátis →</a>
        </div>
      </header>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>CONHEÇA O NEXOELO</span>
              <h1>Seus agendamentos, seu negócio. Tudo conectado.</h1>
              <p>Uma plataforma de agendamento online para autônomos, empresas e profissionais organizarem serviços, horários e atendimentos com mais praticidade.</p>
              <div className={styles.actions}>
                <a className={styles.primary} href="https://nexoelo.nexoceo.com.br/global/login">Teste grátis <span aria-hidden="true">→</span></a>
                <a className={styles.secondary} href="#funcionalidades">Conhecer funcionalidades ↓</a>
              </div>
            </div>
            <div className={styles.visual}>
              <img src={logo} alt="Identidade visual do NexoElo" />
              <strong>NexoElo</strong>
              <span>Uma agenda mais inteligente para o seu negócio.</span>
            </div>
          </div>
        </div>
      </section>
      <section id="funcionalidades" className={styles.features}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>RECURSOS PARA SUA ROTINA</span>
          <h2>Mais organização, menos complicação</h2>
          <p className={styles.intro}>Tenha as principais informações dos seus atendimentos em um só lugar.</p>
          <div className={styles.grid}>
            {benefits.map((item, index) => (
              <article className={styles.card} key={item.title}>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.end}>
        <div className={styles.container}>
          <h2>Pronto para conhecer o NexoElo?</h2>
          <p>Acesse a plataforma e descubra como ela pode ajudar na organização dos seus agendamentos.</p>
          <a className={styles.primary} href="https://nexoelo.nexoceo.com.br/global/login">Teste grátis →</a>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.container}>NexoElo · Um produto NexoCeo</div></footer>
    </main>
  )
}
