import { useState } from 'react'
import { IconGlyph } from './Wordmark'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="beta" className="relative mx-auto max-w-[1240px] px-6 pb-24 md:px-10">
      <div
        className="relative overflow-hidden border border-(--color-paper-edge) p-10 md:p-16"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(126,118,255,0.15), transparent 55%), radial-gradient(ellipse at bottom left, rgba(70,119,254,0.10), transparent 55%), #0F0F0F',
        }}
      >
        {/* corner crosshairs */}
        <span className="cross-corner left-3 top-3" />
        <span className="cross-corner right-3 top-3" />
        <span className="cross-corner bottom-3 left-3" />
        <span className="cross-corner bottom-3 right-3" />

        <div className="relative grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
              <span className="text-(--color-ink)"><IconGlyph size={14} /></span>
              // SEC.10 · the beta
            </div>
            <h2 className="mt-4 font-display text-[40px] font-medium leading-[0.98] tracking-[-0.03em] md:text-[60px]">
              We're opening Span up,<br />
              <span className="text-(--color-coral)">slowly</span>.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
              A handful of teams a week, on iOS first. Drop your email and we'll send a
              TestFlight invite when your number comes up — no waitlist theatrics.
            </p>
          </div>

          <form
            className="md:col-span-5"
            onSubmit={(e) => {
              e.preventDefault()
              if (email.includes('@')) setSubmitted(true)
            }}
          >
            {submitted ? (
              <div className="border border-(--color-paper-edge) bg-(--color-paper-shadow) p-6">
                <div className="font-display text-[24px] font-medium leading-tight tracking-[-0.02em]">
                  We've got you, <span className="text-(--color-violet)">{email.split('@')[0]}</span>.
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
                  expect a note within ~2 weeks ◆
                </div>
              </div>
            ) : (
              <>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)"
                >
                  // your email
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@your-team.co"
                    className="w-full flex-1 border border-(--color-paper-edge) bg-(--color-paper-shadow) px-5 py-3.5 font-mono text-[13px] text-(--color-ink) placeholder:text-(--color-ink-mute) focus:border-(--color-ink) focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 border border-(--color-ink) bg-(--color-ink) px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-paper) transition-colors hover:bg-transparent hover:text-(--color-ink)"
                  >
                    Send invite
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
                  · we'll only email you about the beta. honest.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
