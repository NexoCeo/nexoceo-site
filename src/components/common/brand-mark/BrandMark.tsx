import styles from './styles.module.css'

import { useTheme } from '@/context/ThemeContext'
import logo from '@/images/logo.png'

interface BrandMarkProps {
  compact?: boolean
  className?: string
}

function BrandMark({
  compact = false,
  className = '',
}: BrandMarkProps) {
  const { theme } = useTheme()

  return (
    <div
      className={`${styles.brand} ${
        compact ? styles.brandCompact : ''
      } ${className}`.trim()}
    >
      <img
        className={styles.brandSymbol}
        src={logo}
        alt="NexoCEO"
        style={{
          borderColor: theme.colors.primary,
        }}
      />

      <div className={styles.brandCopy}>
        <strong>NexoCEO</strong>

        {!compact && (
          <small>
            Conecte. Simplifique. Cresça.
          </small>
        )}
      </div>
    </div>
  )
}

export default BrandMark