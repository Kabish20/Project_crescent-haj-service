export default function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16" style={{ background: 'var(--gold)' }} />
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="var(--gold)" aria-hidden="true">
        <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
      </svg>
      <div className="h-px w-16" style={{ background: 'var(--gold)' }} />
    </div>
  )
}
