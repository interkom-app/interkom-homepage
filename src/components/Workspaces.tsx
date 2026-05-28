export function Workspaces() {
  return (
    <section id="workspaces" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div
        className="relative overflow-hidden border border-(--color-paper-edge) p-8 md:p-14"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(126,118,255,0.12), transparent 60%), #0F0F0F' }}
      >
        {/* corner crosshairs */}
        <span className="cross-corner left-3 top-3" />
        <span className="cross-corner right-3 top-3" />
        <span className="cross-corner bottom-3 left-3" />
        <span className="cross-corner bottom-3 right-3" />

        <div className="relative grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
              // SEC.07 · workspaces
            </div>
            <h2 className="mt-5 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] md:text-[56px]">
              Your team gets <span className="text-(--color-violet)">an address.</span>
            </h2>
            <p className="mt-6 max-w-[34rem] text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
              Every Interkom workspace lives at a clean little URL — your handle, your home.
              People join by invite, leave by choice, and you get a real boundary between
              "the team" and "the internet."
            </p>

            {/* URL field mock */}
            <div className="mt-9 inline-flex items-center gap-0 border border-(--color-paper-edge) bg-(--color-paper-shadow) p-1.5 pl-5 font-mono text-[13px] text-(--color-ink-soft)">
              <span className="text-(--color-ink-mute)">https://</span>
              <span className="text-(--color-violet-soft)">lighthouse</span>
              <span className="text-(--color-ink-soft)">.interkom.app</span>
              <span className="ml-3 inline-flex items-center gap-1 bg-(--color-ink) px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-(--color-paper)">
                claim →
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 md:max-w-md">
              {[
                ['PRIVATE BY DEFAULT', 'workspace-scoped — no public search.'],
                ['ADMIN + MEMBER', 'lightweight roles, not org charts.'],
                ['INVITE BY LINK', 'one-tap onboarding from iMessage.'],
                ['HANDLES, NOT EMAILS', '@maya, not maya@longcompany.com'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink)">{k}</div>
                  <div className="mt-1 text-[12.5px] text-(--color-ink-soft)">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stacked workspace cards */}
          <div className="md:col-span-5">
            <div className="relative h-[360px]">
              <WorkspaceCard
                slug="lighthouse"
                name="Lighthouse"
                role="ADMIN · 12 members"
                tint="#7E76FF"
                style={{ top: 0, left: 0, transform: 'rotate(-3.5deg)' }}
              />
              <WorkspaceCard
                slug="fieldnotes"
                name="Field Notes"
                role="MEMBER · 4 members"
                tint="#FF6B7A"
                style={{ top: 90, left: 60, transform: 'rotate(2.5deg)' }}
              />
              <WorkspaceCard
                slug="atlas-studio"
                name="Atlas Studio"
                role="MEMBER · 9 members"
                tint="#2BB3C7"
                style={{ top: 195, left: 20, transform: 'rotate(-1.5deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkspaceCard({
  slug,
  name,
  role,
  tint,
  style,
}: {
  slug: string
  name: string
  role: string
  tint: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className="absolute w-[300px] border border-(--color-paper-edge) p-4 shadow-[0_24px_50px_-25px_rgba(0,0,0,0.8)] transition-transform hover:-translate-y-1"
      style={{ background: '#161616', ...style }}
    >
      <div className="flex items-center gap-3">
        <div
          className="grid h-11 w-11 place-items-center font-mono text-[14px] font-semibold text-(--color-paper)"
          style={{ background: tint }}
        >
          {name[0]}
        </div>
        <div>
          <div className="font-display text-[17px] font-medium leading-none tracking-[-0.02em]">{name}</div>
          <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-(--color-ink-mute)">
            {slug}.interkom.app
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-(--color-paper-line) pt-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-soft)">{role}</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink)">open →</div>
      </div>
    </div>
  )
}
