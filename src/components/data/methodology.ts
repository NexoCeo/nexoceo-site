import type { IconName } from '../common/Icon'

export interface MethodologyStep {
  number: string
  title: string
  description: string
  icon: IconName
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Entendimento',
    description:
      'Escutamos seu negócio para entender desafios e objetivos.',
    icon: 'lightbulb',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Definimos a melhor estratégia e soluções personalizadas.',
    icon: 'target',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Construímos com tecnologia, qualidade e agilidade.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'Entrega e Suporte',
    description:
      'Entregamos, treinamos e seguimos juntos para evoluir sempre.',
    icon: 'rocket',
  },
]