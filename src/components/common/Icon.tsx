import type { IconType } from 'react-icons'

import {
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaCheck,
  FaArrowRight,
  FaPlayCircle,
  FaLightbulb,
  FaBullseye,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaLock,
  FaLayerGroup,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
} from 'react-icons/fa'

export type IconName =
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

const icons: Record<IconName, IconType> = {
  calendar: FaCalendarAlt,
  chart: FaChartLine,
  users: FaUsers,
  check: FaCheck,
  arrow: FaArrowRight,
  play: FaPlayCircle,
  lightbulb: FaLightbulb,
  target: FaBullseye,
  code: FaCode,
  rocket: FaRocket,
  shield: FaShieldAlt,
  headset: FaHeadset,
  lock: FaLock,
  layers: FaLayerGroup,
  phone: FaPhone,
  mail: FaEnvelope,
  pin: FaMapMarkerAlt,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  send: FaPaperPlane,
}

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

function Icon({
  name,
  size = 20,
  className,
}: IconProps) {
  const IconComponent = icons[name]

  return (
    <IconComponent
      size={size}
      className={className}
      aria-hidden="true"
    />
  )
}

export default Icon