import type { IconName } from '../common/Icon'

export interface WhyFeature {
  icon: IconName
  text: string
}

export const whyFeatures: WhyFeature[] = [
  {
    icon: 'layers',
    text: 'Interface intuitiva e fácil de usar',
  },
  {
    icon: 'shield',
    text: 'Segurança e privacidade dos seus dados',
  },
  {
    icon: 'rocket',
    text: 'Tecnologia escalável e confiável',
  },
  {
    icon: 'headset',
    text: 'Suporte próximo e humanizado',
  },
]