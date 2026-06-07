import { PhoneMock } from './PhoneMock'

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-[1240px] px-6 pt-10 pb-24 md:px-10 md:pt-16 md:pb-32">
      <div className="grid items-start gap-14 md:grid-cols-12 md:gap-10">
        {/* Headline column */}
        <div className="md:col-span-7">
          <div
            className="reveal-slow mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-(--color-ink-mute)"
            style={{ animationDelay: '60ms' }}
          >
            The private Slack alternative
          </div>
          <h1
            className="reveal-slow font-display text-[44px] font-medium leading-[0.96] tracking-[-0.035em] text-(--color-ink) sm:text-[58px] md:text-[76px] lg:text-[92px]"
            style={{ animationDelay: '120ms' }}
          >
            A private<br />
            social network<br />
            <span className="text-(--color-ink-mute)">for your</span>{' '}
            <span className="relative inline-block text-(--color-ink)">
              company
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full"
                style={{ background: 'linear-gradient(90deg, #7E76FF, #4677FE)' }}
              />
            </span>
            .
          </h1>

          <p
            className="reveal mt-10 max-w-[36rem] text-[16px] leading-[1.55] text-(--color-ink-soft) md:text-[17px]"
            style={{ animationDelay: '440ms' }}
          >
            Interkom is the private Slack alternative — a social network you run inside your
            company: chat, stories, channels, and the people behind them. It's quietly alive:
            presence, typing, reactions, voice notes. No public feed. No strangers.
            Workspace-scoped, end-to-end.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '560ms' }}>
            <a
              href="https://web.interkom.app/sign-in"
              className="group inline-flex items-center gap-3 border border-(--color-ink) bg-(--color-ink) px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-paper) transition-colors hover:bg-(--color-paper) hover:text-(--color-ink)"
            >
              Sign In
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#apps"
              className="group inline-flex items-center gap-2 border border-(--color-paper-edge) px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-ink-soft) transition-colors hover:border-(--color-ink) hover:text-(--color-ink)"
            >
              Download apps
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href="#product"
              className="group inline-flex items-center gap-2 border border-(--color-paper-edge) px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-ink-soft) transition-colors hover:border-(--color-ink) hover:text-(--color-ink)"
            >
              View product
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>

          {/* Stat strip */}
          <div
            className="reveal mt-14 grid max-w-[40rem] grid-cols-3 border-t border-(--color-paper-line) pt-6"
            style={{ animationDelay: '720ms' }}
          >
            <Stat value="Chat" caption="Channels · DMs · Rooms" />
            <Stat value="Stories" caption="24h · workspace-only" />
            <Stat value="Spaces" caption="One per company" />
          </div>
        </div>

        {/* Phone column */}
        <div className="reveal-fade md:col-span-5" style={{ animationDelay: '500ms' }}>
          <PhoneMock />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="border-l border-(--color-paper-line) pl-4 first:border-l-0 first:pl-0">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">{caption}</div>
      <div className="mt-2 font-display text-[24px] font-medium leading-none tracking-[-0.02em] text-(--color-ink)">
        {value}
      </div>
    </div>
  )
}
