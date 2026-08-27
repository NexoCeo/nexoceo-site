import type { IconName } from '../common/Icon'

export interface Product {
  icon: IconName
  title: string
  description: string
  items: string[]
  tone: string
}

export const products: Product[] = [
  {
    icon: 'calendar',
    title: 'NexoAgenda',
    description:
      'Sistema completo de agendamento online para profissionais, empresas e seus clientes.',
    items: [
      'Agenda inteligente',
      'Gestão de serviços e profissionais',
      'Lembretes automáticos',
      'Relatórios e indicadores',
    ],
    tone: 'blue',
  },

  {
    icon: 'users',
    title: 'NexoGestão',
    description:
      'Plataforma de gestão empresarial para otimizar processos e aumentar a produtividade.',
    items: [
      'Gestão financeira',
      'Controle de equipes',
      'Relatórios personalizados',
      'Integrações',
    ],
    tone: 'green',
  },

  {
    icon: 'chart',
    title: 'NexoAnalytics',
    description:
      'Inteligência de dados para decisões mais assertivas e crescimento sustentável.',
    items: [
      'Dashboards inteligentes',
      'Análise de desempenho',
      'Indicadores em tempo real',
      'Exportação de relatórios',
    ],
    tone: 'violet',
  },
]