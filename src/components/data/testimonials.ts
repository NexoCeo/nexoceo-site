export interface Testimonial {
  text: string
  name: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    text:
      'A NexoCEO revolucionou a forma como gerenciamos nossos atendimentos. Mais organização, mais clientes e muito mais resultados.',
    name: 'Mariana Santos',
    company: 'Espaço Serena',
  },
  {
    text:
      'Finalmente conseguimos centralizar agenda, atendimento e indicadores em um só lugar, sem perder simplicidade.',
    name: 'Ricardo Lima',
    company: 'Studio Fusion',
  },
  {
    text:
      'A equipe ganhou tempo e previsibilidade. Hoje sabemos exatamente onde agir para crescer.',
    name: 'Camila Torres',
    company: 'BellaForma',
  },
  {
    text:
      'O sistema é simples para o time e poderoso para a gestão. Foi uma mudança muito positiva no dia a dia.',
    name: 'Paulo Mendes',
    company: 'Barbearia Premium',
  },
]