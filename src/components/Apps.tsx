type IconKind = 'ios' | 'mac' | 'web' | 'windows' | 'android' | 'linux'

type Platform = {
  label: string
  name: string
  pitch: string
  spec: string
  icon: IconKind
  cta: { label: string; href: string; glyph: 'apple' | 'globe' }
}

// macOS points at GitHub Releases' "latest" redirect — Sparkle handles
// in-app updates after first install. iOS is the live App Store listing.
const MAC_DOWNLOAD_URL =
  'https://github.com/interkom-app/interkom-releases/releases/latest/download/Interkom.dmg'
const IOS_APP_STORE_URL =
  'https://apps.apple.com/us/app/interkom/id6771735965'

const platforms: Platform[] = [
  {
    label: 'iOS',
    name: 'iPhone & iPad',
    pitch: 'Built in Swift, not a web view in a costume. 60fps lists, real haptics, widgets, and the share sheet.',
    spec: 'SwiftUI · iOS 17+',
    icon: 'ios',
    cta: { label: 'Download on the App Store', href: IOS_APP_STORE_URL, glyph: 'apple' },
  },
  {
    label: 'macOS',
    name: 'A real Mac app',
    pitch: 'Menu-bar presence, multiple windows, every ⌘ shortcut you reach for. Universal binary, tuned for Apple silicon.',
    spec: 'SwiftUI · Apple silicon',
    icon: 'mac',
    cta: { label: 'Download for Mac', href: MAC_DOWNLOAD_URL, glyph: 'apple' },
  },
  {
    label: 'Web',
    name: 'Any browser',
    pitch: 'Nothing to install, nothing to update. Cold-starts in under a second and keeps every keyboard shortcut.',
    spec: 'Instant · no download',
    icon: 'web',
    cta: { label: 'Open in your browser', href: 'https://web.interkom.app', glyph: 'globe' },
  },
]

const upcoming: { label: string; icon: IconKind }[] = [
  { label: 'Windows', icon: 'windows' },
  { label: 'Android', icon: 'android' },
  { label: 'Linux', icon: 'linux' },
]

export function Apps() {
  return (
    <section id="apps" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            // SEC.11 · apps
          </div>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] md:text-[56px]">
            Native apps for<br />
            <span className="text-(--color-violet)">every platform.</span>
          </h2>
        </div>
        <p className="text-[14.5px] leading-[1.6] text-(--color-ink-soft) md:col-span-5">
          One Interkom account, three first-class apps. No Electron, no compromise app —
          each one is built for the platform it runs on, and all of them stay in sync to
          the keystroke.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
        {platforms.map((p) => (
          <article
            key={p.label}
            className="group flex flex-col border border-(--color-paper-edge) bg-(--color-paper-shadow) p-6 transition-colors hover:border-(--color-ink-mute)"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded border border-(--color-paper-edge) text-(--color-ink)">
                <PlatformIcon kind={p.icon} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-ink-mute)">
                {p.label}
              </div>
            </div>
            <div className="mt-6 font-display text-[22px] font-medium leading-tight tracking-[-0.02em] text-(--color-ink)">
              {p.name}
            </div>
            <p className="mt-3 flex-1 text-[13.5px] leading-[1.6] text-(--color-ink-soft)">
              {p.pitch}
            </p>
            <div className="mt-6 border-t border-(--color-paper-line) pt-5">
              <a
                href={p.cta.href}
                className="group/cta flex items-center gap-3 bg-(--color-ink) px-4 py-3 text-(--color-paper) transition-colors hover:bg-(--color-violet)"
              >
                <BrandGlyph kind={p.cta.glyph} />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  {p.cta.label}
                </span>
                <span
                  aria-hidden
                  className="ml-auto transition-transform group-hover/cta:translate-x-1"
                >
                  →
                </span>
              </a>
              <div className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
                {p.spec}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Coming soon */}
      <div className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-3">
        {upcoming.map((p) => (
          <article
            key={p.label}
            className="flex items-center gap-4 border border-dashed border-(--color-paper-edge) bg-(--color-paper-shadow)/40 px-5 py-4"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded border border-(--color-paper-edge) text-(--color-ink-mute)">
              <PlatformIcon kind={p.icon} />
            </div>
            <div className="flex-1">
              <div className="font-display text-[16px] font-medium tracking-[-0.02em] text-(--color-ink-soft)">
                {p.label}
              </div>
              <div className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
                native client
              </div>
            </div>
            <span className="shrink-0 border border-(--color-paper-edge) px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
              Coming soon
            </span>
          </article>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 border-t border-(--color-paper-line) pt-6 sm:grid-cols-3">
        {[
          ['NATIVE', 'Real platform UI — gestures, menus and shortcuts you already know.'],
          ['FAST', 'Cold-starts in under a second; lists and search never block.'],
          ['IN SYNC', 'Switch from desk to phone mid-sentence — the draft follows you.'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-start gap-4">
            <span className="mt-[2px] inline-block w-[64px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink)">
              {k}
            </span>
            <span className="text-[13px] leading-[1.6] text-(--color-ink-soft)">{v}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function BrandGlyph({ kind }: { kind: 'apple' | 'globe' }) {
  if (kind === 'apple') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.82 0-2.07-.92-3.41-.9-1.75.03-3.37 1.02-4.27 2.59-1.83 3.17-.47 7.86 1.31 10.43.87 1.26 1.91 2.67 3.27 2.62 1.31-.05 1.81-.85 3.39-.85 1.58 0 2.03.85 3.41.82 1.41-.02 2.3-1.28 3.16-2.55.99-1.46 1.4-2.87 1.42-2.94-.03-.01-2.73-1.05-2.76-4.16zM14.46 4.46c.72-.88 1.21-2.1 1.08-3.32-1.04.04-2.31.69-3.06 1.56-.66.77-1.24 2.01-1.09 3.19 1.16.09 2.35-.59 3.07-1.43z" />
      </svg>
    )
  }
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </svg>
  )
}

function PlatformIcon({ kind }: { kind: IconKind }) {
  const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  if (kind === 'ios') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" {...stroke} />
        <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" {...stroke} />
      </svg>
    )
  }
  if (kind === 'mac') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <rect x="3.5" y="4.5" width="17" height="11" rx="1.5" {...stroke} />
        <line x1="2" y1="19" x2="22" y2="19" {...stroke} />
      </svg>
    )
  }
  if (kind === 'web') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <rect x="3" y="4.5" width="18" height="15" rx="1.5" {...stroke} />
        <line x1="3" y1="9" x2="21" y2="9" {...stroke} />
        <circle cx="6" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.4" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (kind === 'windows') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <rect x="3.5" y="3.5" width="7.5" height="7.5" {...stroke} />
        <rect x="13" y="3.5" width="7.5" height="7.5" {...stroke} />
        <rect x="3.5" y="13" width="7.5" height="7.5" {...stroke} />
        <rect x="13" y="13" width="7.5" height="7.5" {...stroke} />
      </svg>
    )
  }
  if (kind === 'android') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <path d="M5 14.5a7 7 0 0 1 14 0Z" {...stroke} />
        <line x1="7" y1="6" x2="9" y2="9" {...stroke} />
        <line x1="17" y1="6" x2="15" y2="9" {...stroke} />
        <circle cx="9.5" cy="11.5" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="11.5" r="0.7" fill="currentColor" stroke="none" />
        <line x1="5" y1="14.5" x2="19" y2="14.5" {...stroke} />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" {...stroke} />
      <polyline points="7,9.5 10,12 7,14.5" {...stroke} />
      <line x1="12.5" y1="14.5" x2="16.5" y2="14.5" {...stroke} />
    </svg>
  )
}
