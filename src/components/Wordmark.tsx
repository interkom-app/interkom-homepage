export function Wordmark({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { glyph: 22, text: 'text-[14px]' },
    md: { glyph: 28, text: 'text-[15px]' },
    lg: { glyph: 44, text: 'text-[26px]' },
  }[size]

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <IconGlyph size={sizes.glyph} />
      <span className={`font-mono font-semibold uppercase tracking-[0.18em] ${sizes.text}`}>
        interkom
      </span>
    </span>
  )
}

// 38-dot ellipse lattice (5/7/7/7/7/5) — matches Frame 137.svg.
const DOT_R = 1.9
const ROWS: { y: number; xs: number[] }[] = [
  { y: 12.8713, xs: [21.2947, 27.6472, 33.9998, 40.3533, 46.7058] },
  { y: 18.9958, xs: [14.9412, 21.2947, 27.6472, 33.9998, 40.3533, 46.7058, 53.0584] },
  { y: 25.1198, xs: [14.9412, 21.2947, 27.6472, 33.9998, 40.3533, 46.7058, 53.0584] },
  { y: 31.2438, xs: [14.9412, 21.2947, 27.6472, 33.9998, 40.3533, 46.7058, 53.0584] },
  { y: 37.3678, xs: [14.9412, 21.2947, 27.6472, 33.9998, 40.3533, 46.7058, 53.0584] },
  { y: 43.4919, xs: [21.2947, 27.6472, 33.9998, 40.3533, 46.7058] },
]

export function IconGlyph({ size = 28 }: { size?: number }) {
  const height = Math.round(size * (56 / 69))
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 69 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block select-none"
    >
      <g fill="currentColor">
        {ROWS.flatMap((row) =>
          row.xs.map((x) => (
            <circle key={`${x}-${row.y}`} cx={x} cy={row.y} r={DOT_R} opacity={0.75} />
          )),
        )}
      </g>
    </svg>
  )
}
