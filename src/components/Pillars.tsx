type Pillar = {
  num: string
  title: string
  accent: string
  body: string
  visual: 'chat' | 'stories' | 'spaces'
}

const pillars: Pillar[] = [
  {
    num: '02',
    title: 'Threads that don’t',
    accent: 'drown.',
    body: 'Rooms for the work, DMs for the people, a quiet inbox that respects the fact that not every message needs you right now.',
    visual: 'chat',
  },
  {
    num: '03',
    title: 'Stories from',
    accent: 'the people you work with.',
    body: 'A 24-hour line for the small stuff — a sketch, a view from the desk, a "we shipped it" — without making it a meeting or a thread.',
    visual: 'stories',
  },
  {
    num: '04',
    title: 'A space that feels',
    accent: 'like a building.',
    body: 'Each workspace gets its own home at slug.span.io — your people, your channels, your stories. Invite the team. Lock the door.',
    visual: 'spaces',
  },
]

export function Pillars() {
  return (
    <section id="product" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="mb-16 grid items-end gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            // SEC.02 — SEC.04 · what's inside
          </div>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] text-(--color-ink) md:text-[56px]">
            Three things,<br />
            <span className="text-(--color-ink-mute)">sitting very close</span> together.
          </h2>
        </div>
        <p className="text-[14.5px] leading-[1.6] text-(--color-ink-soft) md:col-span-5">
          We didn't try to rebuild every tool you use. Span does the parts of work that
          live between meetings — the messages, the moments, the people — and tries to
          do them with a little more grace.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-(--color-paper-line) bg-(--color-paper-line) md:grid-cols-3">
        {pillars.map((p) => (
          <article
            key={p.num}
            className="group relative bg-(--color-paper) p-7 transition-colors hover:bg-(--color-paper-shadow) md:p-9"
          >
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
                [SEC.{p.num}]
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute) opacity-50 transition-opacity group-hover:opacity-100">
                ↗
              </div>
            </div>

            <h3 className="mt-7 font-display text-[26px] font-medium leading-[1.1] tracking-[-0.02em] text-(--color-ink) md:text-[30px]">
              {p.title}{' '}
              <span className="text-(--color-violet)">{p.accent}</span>
            </h3>

            <p className="mt-4 text-[14px] leading-[1.6] text-(--color-ink-soft)">{p.body}</p>

            <div className="mt-8">
              <PillarVisual kind={p.visual} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PillarVisual({ kind }: { kind: Pillar['visual'] }) {
  if (kind === 'chat') {
    return (
      <div className="space-y-2">
        <Bubble side="left" tint="#1F1F1F">a quick one — can you push the staging build?</Bubble>
        <Bubble side="right" tint="#2A2742">on it 🍞 — ETA 6 minutes</Bubble>
        <Bubble side="left" tint="#1F1F1F">legend</Bubble>
      </div>
    )
  }
  if (kind === 'stories') {
    return (
      <div className="flex items-center gap-3">
        {['LH', 'MR', 'JN', 'PV', 'TO'].map((m, i) => (
          <div key={m} className={`grid h-12 w-12 place-items-center rounded-full p-[2px] ${i === 0 ? 'ring-company' : 'ring-story'}`}>
            <div className="grid h-full w-full place-items-center rounded-full" style={{ background: '#0A0A0A' }}>
              <span className="font-mono text-[11px] font-semibold text-(--color-ink)">{m}</span>
            </div>
          </div>
        ))}
        <div className="ml-1 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute)">+ 3</div>
      </div>
    )
  }
  return (
    <div className="overflow-hidden rounded border border-(--color-paper-edge) bg-(--color-paper-shadow)">
      <div className="flex items-center gap-1.5 border-b border-(--color-paper-edge) px-3 py-2">
        <span className="h-2 w-2 rounded-full" style={{ background: '#FF6B7A' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: '#F5B544' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: '#3CB876' }} />
        <div className="ml-2 flex-1 truncate font-mono text-[10.5px] text-(--color-ink-soft)">
          lighthouse<span className="text-(--color-ink-mute)">.span.io</span>
        </div>
      </div>
      <div className="p-4">
        <div className="font-display text-[19px] font-medium tracking-[-0.02em]">Lighthouse</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute)">12 people · 6 rooms</div>
      </div>
    </div>
  )
}

function Bubble({ side, tint, children }: { side: 'left' | 'right'; tint: string; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === 'right' ? 'justify-end' : 'justify-start'}`}>
      <div
        className="max-w-[80%] rounded-lg px-3.5 py-2 text-[12.5px] text-(--color-ink)"
        style={{
          background: tint,
          borderTopLeftRadius: side === 'left' ? 4 : 10,
          borderTopRightRadius: side === 'right' ? 4 : 10,
        }}
      >
        {children}
      </div>
    </div>
  )
}
