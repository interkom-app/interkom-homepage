export function Marquee() {
  const items = [
    'team chat',
    '//',
    'stories',
    '//',
    'channels',
    '//',
    'announcements',
    '//',
    'voice notes',
    '//',
    'reactions',
    '//',
    'presence',
    '//',
    'workspaces',
    '//',
    'invites',
    '//',
  ]
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-(--color-paper-line) bg-(--color-paper-shadow)/60 py-6">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((t, i) => (
          <span
            key={i}
            className={
              t === '//'
                ? 'font-mono text-[18px] text-(--color-ink-mute)'
                : 'font-display text-[28px] font-medium tracking-[-0.02em] text-(--color-ink) md:text-[36px]'
            }
          >
            {t}
          </span>
        ))}
      </div>
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-(--color-paper) to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-(--color-paper) to-transparent" />
    </div>
  )
}
