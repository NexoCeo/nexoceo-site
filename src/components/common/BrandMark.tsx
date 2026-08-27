interface BrandMarkProps {
  compact?: boolean
  className?: string
}

function BrandMark({
  compact = false,
  className = '',
}: BrandMarkProps) {
  return (
    <div
      className={`brand ${compact ? 'brand--compact' : ''} ${className}`.trim()}
    >
      <svg
        className="brand__symbol"
        viewBox="0 0 64 64"
        role="img"
        aria-label="NexoCEO"
      >
        <defs>
          <linearGradient
            id="brandGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0"
              stopColor="#15d9c2"
            />

            <stop
              offset="1"
              stopColor="#2171ff"
            />
          </linearGradient>
        </defs>

        <circle
          cx="18"
          cy="10"
          r="8"
          fill="url(#brandGradient)"
        />

        <circle
          cx="50"
          cy="12"
          r="8"
          fill="url(#brandGradient)"
        />

        <circle
          cx="16"
          cy="50"
          r="8"
          fill="url(#brandGradient)"
        />

        <circle
          cx="48"
          cy="50"
          r="8"
          fill="url(#brandGradient)"
        />

        <path
          d="M18 18v24M24 45l17-20M47 20v22"
          stroke="url(#brandGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="brand__copy">
        <strong>NexoCEO</strong>

        {!compact && (
          <small>
            Atenda. Agende. Cresça.
          </small>
        )}
      </div>
    </div>
  )
}

export default BrandMark