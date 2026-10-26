import styles from './LegalPage.module.css'

type LegalPageProps = { type: 'privacidade' | 'termos' }

export default function LegalPage({ type }: LegalPageProps) {
  const privacy = type === 'privacidade'
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a className={styles.brand} href="/">NexoCeo</a>
          <a className={styles.back} href="/">← Voltar ao site</a>
        </div>
      </header>
      <article className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>TRANSPARÊNCIA E RESPONSABILIDADE</span>
          <h1>{privacy ? 'Política de Privacidade' : 'Termos de Uso'}</h1>
          <p>Última atualização: 26 de outubro de 2026</p>
        </div>
        {privacy ? (
          <div className={styles.content}>
            <section><h2>1. Sobre esta política</h2><p>Esta política apresenta, em linguagem clara, como os dados pessoais podem ser tratados no site institucional da NexoCeo e em interações de contato relacionadas aos seus produtos, incluindo o NexoElo. O uso do aplicativo NexoElo pode envolver tratamentos adicionais, que devem ser descritos nos avisos específicos da própria plataforma.</p></section>
            <section><h2>2. Quais dados podem ser tratados</h2><p>Podem ser tratados dados fornecidos voluntariamente em contatos, como nome, endereço de e-mail, telefone, mensagem e informações necessárias para responder à solicitação. Também podem existir dados técnicos de navegação, como endereço IP, informações de dispositivo e registros de acesso, conforme a configuração efetiva da hospedagem e dos serviços utilizados. Não afirmamos utilizar ferramentas de rastreamento ou cookies de publicidade sem confirmação da sua implantação.</p></section>
            <section><h2>3. Para quais finalidades</h2><p>Os dados podem ser necessários para responder a solicitações, prestar suporte, manter a segurança, cumprir obrigações legais e, quando houver contratação, viabilizar a relação contratual. Cada operação deve ter uma base legal adequada, conforme a Lei nº 13.709/2018 (LGPD); nem todo tratamento depende de consentimento.</p></section>
            <section><h2>4. Fornecedores e compartilhamento</h2><p>A operação de um serviço digital pode envolver fornecedores de hospedagem, comunicação e processamento de pagamentos, quando aplicáveis. O compartilhamento deve ficar limitado às finalidades legítimas e às necessidades de prestação do serviço. As empresas efetivamente contratadas, eventuais transferências internacionais e as responsabilidades de cada agente devem ser verificadas e documentadas antes de apresentar uma lista definitiva.</p></section>
            <section><h2>5. Armazenamento e segurança</h2><p>Os dados devem ser mantidos apenas pelo tempo necessário às finalidades informadas ou ao cumprimento de obrigações legais, observadas as hipóteses legais de conservação. Devem ser adotadas medidas técnicas e administrativas de proteção adequadas ao risco. Nenhum serviço conectado à internet pode prometer segurança absoluta.</p></section>
            <section><h2>6. Seus direitos na LGPD</h2><p>O titular pode solicitar, quando aplicável, confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados tratados em desconformidade com a lei, portabilidade, informação sobre compartilhamentos e revogação de consentimento. Algumas solicitações dependem de verificação de identidade e estão sujeitas às hipóteses legais de conservação.</p></section>
            <section><h2>7. Cookies e tecnologias similares</h2><p>O funcionamento do site pode envolver tecnologias essenciais à navegação. Caso sejam implantados recursos opcionais de medição ou publicidade que exijam consentimento, os visitantes deverão receber informação e controles apropriados. Esta política não equivale a uma auditoria da configuração atual de cookies.</p></section>
            <section><h2>8. Solicitações e contato</h2><p>Para dúvidas ou exercício de direitos relacionados aos dados tratados pela NexoCeo, entre em contato por <a href="mailto:contato@nexoceo.com.br">contato@nexoceo.com.br</a>. A identificação formal do controlador, do responsável legal e do encarregado, quando aplicável, deverá ser complementada conforme os dados cadastrais e a estrutura real da operação.</p></section>
            <section><h2>9. Atualizações</h2><p>Esta política poderá ser atualizada para refletir mudanças de produtos, fornecedores, tratamentos de dados ou exigências legais. Mudanças relevantes devem ser comunicadas de maneira adequada.</p></section>
          </div>
        ) : (
          <div className={styles.content}>
            <section><h2>1. Apresentação</h2><p>Estes termos descrevem condições gerais de utilização do site institucional da NexoCeo e informações comerciais sobre o NexoElo. Condições específicas de planos, funcionalidades, preços e assinaturas devem ser apresentadas ao usuário antes da contratação, inclusive dentro da plataforma quando aplicável.</p></section>
            <section><h2>2. Demonstração e teste grátis</h2><p>A NexoCeo disponibiliza uma forma de conhecer o NexoElo antes de decidir pela contratação, quando o teste estiver oferecido na plataforma. Sua finalidade é permitir que o interessado avalie a adequação do serviço às suas necessidades. Prazo, funcionalidades disponíveis, necessidade de cadastro e eventual transição para um plano pago devem ser claramente informados na oferta efetiva. O simples acesso ao teste não representa concordância com cobranças que não tenham sido informadas e autorizadas.</p></section>
            <section><h2>3. Planos, cobrança e renovação</h2><p>Os valores, a periodicidade, os impostos aplicáveis, as funcionalidades e as condições de renovação devem ser exibidos no fluxo de contratação. Uma assinatura paga deve depender da autorização do contratante. Alterações de preço ou condições observarão as regras legais e a comunicação adequada.</p></section>
            <section><h2>4. Cancelamento e devolução de pagamentos</h2><p>O teste grátis existe para reduzir o risco de uma compra inadequada; ele não substitui nem elimina direitos assegurados por lei. O cliente poderá solicitar o cancelamento da assinatura pelos canais disponibilizados na plataforma ou pelo contato abaixo.</p><p>Não há promessa comercial genérica de reembolso por mera insatisfação fora das hipóteses previstas na legislação ou na oferta contratada. Entretanto, quando aplicável à contratação, será respeitado o direito de arrependimento do artigo 49 do Código de Defesa do Consumidor, inclusive o prazo legal de sete dias e a devolução dos valores pagos. Pedidos por cobrança indevida, falhas na prestação do serviço ou outros direitos legalmente assegurados serão analisados conforme a legislação, mesmo após o período de teste.</p><p>Para solicitar análise de cancelamento ou reembolso, escreva para <a href="mailto:contato@nexoceo.com.br">contato@nexoceo.com.br</a>, informando os dados necessários para localizar a contratação, sem enviar senhas ou dados completos de cartão.</p></section>
            <section><h2>5. Responsabilidades do usuário</h2><p>O usuário deve fornecer informações corretas, proteger suas credenciais, utilizar o serviço de forma lícita e respeitar os direitos de terceiros. O uso do sistema para atividades ilegais, fraudes ou violação de dados pessoais não é permitido.</p></section>
            <section><h2>6. Disponibilidade e suporte</h2><p>Serviços digitais podem passar por manutenções, atualizações e interrupções. A NexoCeo buscará tratar falhas comunicadas pelos usuários, sem estabelecer neste documento uma garantia de disponibilidade integral ou prazo de resposta não formalmente contratado.</p></section>
            <section><h2>7. Privacidade e dados dos clientes</h2><p>O tratamento de dados pessoais observará a LGPD. Em serviços utilizados por empresas e profissionais, os papéis de controlador e operador dependem da operação concreta e das finalidades de tratamento. Consulte também a <a href="/politica-de-privacidade">Política de Privacidade</a>.</p></section>
            <section><h2>8. Propriedade intelectual</h2><p>Marcas, textos e elementos originais da plataforma pertencem a seus respectivos titulares. A contratação de acesso ao sistema não representa transferência da propriedade do software.</p></section>
            <section><h2>9. Legislação e contato</h2><p>Estes termos devem ser interpretados de acordo com a legislação brasileira, sem prejuízo das garantias legais dos consumidores e titulares de dados. Para dúvidas, entre em contato por <a href="mailto:contato@nexoceo.com.br">contato@nexoceo.com.br</a>.</p></section>
          </div>
        )}
        <nav className={styles.bottomNav} aria-label="Documentos legais">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/">Página inicial</a>
        </nav>
      </article>
    </main>
  )
}
