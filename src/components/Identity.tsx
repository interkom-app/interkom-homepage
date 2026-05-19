export function Identity() {
  return (
    <section id="identity" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="relative h-[440px]">
            <IdentityCard
              workspace="Lighthouse"
              slug="lighthouse.interkom.app"
              name="Maya Reyes"
              role="Engineering · she/her"
              handle="@maya"
              monogram="MR"
              tint="#7E76FF"
              presence="online"
              style={{ top: 0, left: 0, transform: 'rotate(-3deg)' }}
            />
            <IdentityCard
              workspace="Field Notes"
              slug="fieldnotes.interkom.app"
              name="m."
              role="just here for the photos"
              handle="@mreyes"
              monogram="m"
              tint="#FF6B7A"
              presence="quiet"
              style={{ top: 180, left: 80, transform: 'rotate(2.5deg)' }}
            />
            <IdentityCard
              workspace="Atlas Studio"
              slug="atlas-studio.interkom.app"
              name="Maya R."
              role="Contract · weekends only"
              handle="@maya.r"
              monogram="M"
              tint="#2BB3C7"
              presence="away"
              style={{ top: 320, left: 20, transform: 'rotate(-1.5deg)' }}
            />
          </div>
        </div>

        <div className="md:col-span-6 order-1 md:order-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            // SEC.07 · per-workspace profiles
          </div>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] md:text-[60px]">
            A different <span className="text-(--color-violet)">you</span><br />
            at every workspace.
          </h2>
          <p className="mt-7 max-w-[34rem] text-[15px] leading-[1.6] text-(--color-ink-soft)">
            You aren't the same person at your day job, your weekend studio, and the
            group chat that's somehow still going from college. Interkom knows that. Pick a
            different name, photo, and handle at each workspace — no more
            corporate-headshot-meets-friend-group energy.
          </p>
          <p className="mt-5 max-w-[32rem] text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
            Switch between them like rooms in a house. Your status, your inbox, even
            your pronouns travel with the door — never with the rest of you.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
            <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: '#3CB876', boxShadow: '0 0 8px #3CB87680' }} />
            <span>one login · every workspace · different faces</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function IdentityCard({
  workspace,
  slug,
  name,
  role,
  handle,
  monogram,
  tint,
  presence,
  style,
}: {
  workspace: string
  slug: string
  name: string
  role: string
  handle: string
  monogram: string
  tint: string
  presence: 'online' | 'quiet' | 'away'
  style?: React.CSSProperties
}) {
  const dot = { online: '#3CB876', quiet: '#F5B544', away: '#6A6A6A' }[presence]

  return (
    <article
      className="absolute w-[320px] border border-(--color-paper-edge) p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-1"
      style={{ background: '#0F0F0F', ...style }}
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          {slug}
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-soft)">
          <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: dot }} />
          <span>{presence}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div
          className="grid h-12 w-12 place-items-center font-mono text-[16px] font-semibold text-(--color-paper)"
          style={{ background: tint }}
        >
          {monogram}
        </div>
        <div className="min-w-0">
          <div className="truncate font-display text-[17px] font-medium leading-tight tracking-[-0.02em]">{name}</div>
          <div className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-(--color-ink-mute)">
            {handle} · {workspace}
          </div>
        </div>
      </div>

      <div className="mt-3 border-t border-(--color-paper-line) pt-3 text-[12.5px] text-(--color-ink-soft)">
        {role}
      </div>
    </article>
  )
}
