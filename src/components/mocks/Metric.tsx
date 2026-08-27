interface MetricProps {
  label: string
  value: string
  change: string
}

function Metric({
  label,
  value,
  change,
}: MetricProps) {
  return (
    <div className="metric">
      <span>{label}</span>

      <div>
        <strong>{value}</strong>
        <em>{change}</em>
      </div>
    </div>
  )
}

export default Metric