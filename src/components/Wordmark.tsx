export function Wordmark({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { glyph: 14, text: 'text-[14px]' },
    md: { glyph: 18, text: 'text-[15px]' },
    lg: { glyph: 28, text: 'text-[26px]' },
  }[size]

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <IconGlyph size={sizes.glyph} />
      <span className={`font-mono font-semibold uppercase tracking-[0.18em] ${sizes.text}`}>
        span
      </span>
    </span>
  )
}

export function IconGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="currentColor">
        {[6, 12, 18].map((y) =>
          [6, 12, 18].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={1.4} />
          )),
        )}
      </g>
    </svg>
  )
}
