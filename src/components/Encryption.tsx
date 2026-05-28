export function Encryption() {
  return (
    <section id="encryption" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div
        className="relative overflow-hidden border border-(--color-paper-edge) p-8 md:p-14"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, rgba(70,119,254,0.10), transparent 55%), radial-gradient(ellipse at top right, rgba(126,118,255,0.10), transparent 60%), #0E0E0E',
        }}
      >
        {/* corner crosshairs */}
        <span className="cross-corner left-3 top-3" />
        <span className="cross-corner right-3 top-3" />
        <span className="cross-corner bottom-3 left-3" />
        <span className="cross-corner bottom-3 right-3" />

        <div className="relative grid items-start gap-14 md:grid-cols-12">
          {/* Left: copy */}
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
              // SEC.06 · end-to-end encryption
            </div>
            <h2 className="mt-5 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] md:text-[60px]">
              Only the people in the room
              <br />
              <span className="text-(--color-violet)">can read it.</span>
            </h2>
            <p className="mt-7 max-w-[34rem] text-[15px] leading-[1.6] text-(--color-ink-soft)">
              Every message, every photo, every voice note is sealed on your
              device before it leaves it — and unsealed on the other side. Our
              servers carry the envelope. They never get the letter.
            </p>
            <p className="mt-5 max-w-[32rem] text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
              Keys are generated locally and rotated continuously. New device?
              You verify it. Lose a device? Revoke it. Curious admin, curious
              ISP, curious us — there's nothing legible to look at.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 md:max-w-md">
              {[
                ['KEYS ON DEVICE', 'never uploaded, never escrowed.'],
                ['FORWARD SECRECY', 'past chats stay safe if a key leaks.'],
                ['ZERO-KNOWLEDGE STORAGE', "we can't read it, even if asked."],
                ['VERIFIED DEVICES', 'add a phone, confirm a fingerprint.'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink)">
                    {k}
                  </div>
                  <div className="mt-1 text-[12.5px] text-(--color-ink-soft)">
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
              <span
                className="inline-block h-[6px] w-[6px] rounded-full"
                style={{
                  background: '#3CB876',
                  boxShadow: '0 0 8px #3CB87680',
                }}
              />
              <span>signal-grade · audited · default-on</span>
            </div>
          </div>

          {/* Right: 3-stage envelope diagram */}
          <div className="md:col-span-7">
            <div className="relative">
              {/* connector dashes between cards (desktop) */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                viewBox="0 0 600 380"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="wire" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7E76FF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#7E76FF" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#4677FE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line
                  x1="0"
                  y1="190"
                  x2="600"
                  y2="190"
                  stroke="url(#wire)"
                  strokeDasharray="4 6"
                  strokeWidth="1"
                />
              </svg>

              <div className="grid gap-5 md:grid-cols-3">
                <EndpointCard
                  role="SENDER"
                  who="maya"
                  device="iPhone · this device"
                  state="plaintext"
                  body={
                    <div className="font-display text-[14px] leading-[1.45] text-(--color-ink)">
                      meet at the lighthouse at 6? i'll bring the&nbsp;film.
                    </div>
                  }
                />

                <RelayCard />

                <EndpointCard
                  role="RECIPIENT"
                  who="jules"
                  device="Mac · verified"
                  state="plaintext"
                  body={
                    <div className="font-display text-[14px] leading-[1.45] text-(--color-ink)">
                      meet at the lighthouse at 6? i'll bring the&nbsp;film.
                    </div>
                  }
                />
              </div>

              {/* footer key-fingerprint strip */}
              <div className="mt-8 flex flex-col items-stretch justify-between gap-4 border border-(--color-paper-edge) bg-(--color-paper-shadow) p-4 md:flex-row md:items-center">
                <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
                  session_key · sha256 fingerprint
                </div>
                <div className="font-mono text-[12px] tracking-[0.08em] text-(--color-ink-soft)">
                  <span className="text-(--color-violet-soft)">7e</span>
                  <span> 76 </span>
                  <span className="text-(--color-violet-soft)">ff</span>
                  <span> · 4b 19 · </span>
                  <span className="text-(--color-violet-soft)">a0</span>
                  <span> e2 · 3c b8 · </span>
                  <span className="text-(--color-violet-soft)">76</span>
                  <span> 1d · 8f c2</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-(--color-green)">
                  <span
                    className="inline-block h-[6px] w-[6px] rounded-full"
                    style={{
                      background: '#3CB876',
                      boxShadow: '0 0 8px #3CB87680',
                    }}
                  />
                  verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EndpointCard({
  role,
  who,
  device,
  state,
  body,
}: {
  role: string
  who: string
  device: string
  state: 'plaintext' | 'ciphertext'
  body: React.ReactNode
}) {
  const stateTone =
    state === 'plaintext' ? 'text-(--color-green)' : 'text-(--color-violet-soft)'
  return (
    <article
      className="relative border border-(--color-paper-edge) p-5"
      style={{ background: '#161616' }}
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          {role}
        </div>
        <div
          className={`font-mono text-[9.5px] uppercase tracking-[0.16em] ${stateTone}`}
        >
          {state}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        <div
          className="grid h-8 w-8 place-items-center font-mono text-[12px] font-semibold text-(--color-paper)"
          style={{ background: role === 'SENDER' ? '#7E76FF' : '#FF6B7A' }}
        >
          {who[0].toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="truncate font-display text-[14px] font-medium leading-none tracking-[-0.02em]">
            @{who}
          </div>
          <div className="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-(--color-ink-mute)">
            {device}
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-(--color-paper-line) pt-4">
        {body}
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
        <span>local key</span>
        <span className="text-(--color-ink-soft)">·····</span>
        <span>ed25519</span>
      </div>
    </article>
  )
}

function RelayCard() {
  return (
    <article
      className="relative overflow-hidden border border-(--color-paper-edge) p-5"
      style={{ background: '#0F0F0F' }}
    >
      {/* scan line */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-(--color-violet)/60"
        style={{ animation: 'scan 5s linear infinite' }}
      />

      <div className="flex items-center justify-between">
        <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          INTERKOM RELAY
        </div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-(--color-violet-soft)">
          ciphertext
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        <div
          className="grid h-8 w-8 place-items-center font-mono text-[11px] font-semibold text-(--color-ink-soft)"
          style={{
            background: '#1A1A1A',
            border: '1px solid var(--color-paper-edge)',
          }}
        >
          ✺
        </div>
        <div className="min-w-0">
          <div className="truncate font-display text-[14px] font-medium leading-none tracking-[-0.02em] text-(--color-ink-soft)">
            in transit
          </div>
          <div className="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-(--color-ink-mute)">
            zero-knowledge passthrough
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-(--color-paper-line) pt-4">
        <div className="font-mono text-[11px] leading-[1.55] tracking-[0.04em] break-all text-(--color-ink-mute)">
          9f4a·c0e2·71bd·338f·ae09·54cc·12d7·8b41·6c2e·a8f0·5d99·17ba·e3c4·7782·0a6f·d514·9ba0·48e1·f3c6·2b97
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
        <span>no plaintext logged</span>
        <span className="text-(--color-coral)">unreadable</span>
      </div>
    </article>
  )
}
