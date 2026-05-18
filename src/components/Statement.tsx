export function Statement() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-6 pt-28 pb-8 md:px-10 md:pt-36">
      <div className="grid items-start gap-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            // POSITION
          </div>
          <ul className="mt-4 space-y-2 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.14em] text-(--color-ink-soft)">
            <li>· workspace-scoped</li>
            <li>· no public feed</li>
            <li>· no strangers</li>
            <li>· people you actually know</li>
          </ul>
        </aside>

        <div className="md:col-span-9">
          <p className="font-display text-[36px] font-medium leading-[1.08] tracking-[-0.03em] text-(--color-ink-soft) sm:text-[48px] md:text-[60px] lg:text-[68px]">
            <span className="text-(--color-ink)">Think of it as a private network</span>{' '}
            running <span className="text-(--color-ink)">inside your company</span> —
            not{' '}
            <s className="text-(--color-ink-mute) decoration-(--color-coral) decoration-[3px] underline-offset-4">
              a feed for the whole internet
            </s>
            ,{' '}
            <span className="text-(--color-ink)">just for the people you work with</span>.
          </p>

          <div className="mt-12 grid gap-6 border-t border-(--color-paper-line) pt-6 sm:grid-cols-3">
            {[
              ['NO STRANGERS', 'workspace-scoped — only invited teammates see anything.'],
              ['NO ALGORITHM', 'stories show up in time order. that’s it.'],
              ['NO AUDIENCE', 'nothing leaves the company. ever.'],
            ].map(([k, v]) => (
              <div key={k} className="border-l border-(--color-paper-line) pl-4 first:border-l-0 first:pl-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink)">
                  {k}
                </div>
                <div className="mt-2 max-w-[20rem] text-[13.5px] leading-[1.55] text-(--color-ink-soft)">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
