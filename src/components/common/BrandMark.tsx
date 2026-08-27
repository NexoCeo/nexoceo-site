import { useTheme } from '@/context/ThemeContext';
import imgLogin from '@/images/logo.png';

interface BrandMarkProps {
  compact?: boolean
  className?: string
}

function BrandMark({
  compact = false,
  className = '',
}: BrandMarkProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`brand ${
        compact ? 'brand--compact' : ''
      } ${className}`.trim()}
    >
      <img 
        src={imgLogin}
        style={{
          width: '50px',
          height: '50px',
          color: theme.colors.error,
          borderColor: theme.colors.primary,
        }}
      />

      <div className="brand__copy">
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