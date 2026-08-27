import type { IconType } from 'react-icons'

import {
  FaArrowRight,
  FaBullseye,
  FaCalendarAlt,
  FaChartLine,
  FaCheck,
  FaCode,
  FaEnvelope,
  FaHeadset,
  FaInstagram,
  FaLayerGroup,
  FaLightbulb,
  FaLinkedinIn,
  FaLock,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaPlayCircle,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaWhatsapp,
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