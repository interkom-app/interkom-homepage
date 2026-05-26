import { Wordmark } from './Wordmark'

export function Nav() {
  return (
    <header className="relative z-20 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 md:px-10 md:py-7">
      <a
        href="#top"
        aria-label="Interkom — back to top"
        className="reveal text-(--color-ink)"
        style={{ animationDelay: '40ms' }}
      >
        <Wordmark size="md" />
      </a>

      <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
        {[
          ['Product', '#product'],
          ['Stories', '#stories'],
          ['Workspaces', '#workspaces'],
          ['Pricing', '#pricing'],
        ].map(([label, href], i) => (
          <a
            key={label}
            href={href}
            className="reveal font-mono text-[11px] uppercase tracking-[0.16em] text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
            style={{ animationDelay: `${120 + i * 60}ms` }}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <span
          className="reveal hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute) md:inline-flex"
          style={{ animationDelay: '320ms' }}
        >
          <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: '#3CB876', boxShadow: '0 0 8px #3CB87680' }} />
          <span>beta · open</span>
        </span>
        <a
          href="#apps"
          className="reveal group inline-flex items-center gap-2 border border-(--color-ink) bg-(--color-ink) px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-(--color-paper) transition-colors hover:bg-(--color-paper) hover:text-(--color-ink)"
          style={{ animationDelay: '380ms' }}
        >
          Download
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  )
}
