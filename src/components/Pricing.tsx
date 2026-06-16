import { useState } from 'react'

type Plan = {
  name: string
  tagline: string
  blurb: string
  price: { annual: string; monthly: string } | { custom: true; label: string }
  cadence?: string
  cta: { label: string; href: string }
  features: string[]
  highlight?: boolean
  ribbon?: string
}

const plans: Plan[] = [
  {
    name: 'Solo',
    tagline: 'FREE FOREVER',
    blurb: 'For the first five people. Real product, not a 90-day teaser.',
    price: { annual: '$0', monthly: '$0' },
    cadence: 'forever',
    cta: { label: 'Start free', href: 'https://web.interkom.app/sign-up' },
    features: [
      'Up to 5 teammates',
      'Full message history — no 90-day wall',
      'Stories, channels & DMs',
      'One workspace · yourname.interkom.app',
      'iOS app, native from day one',
    ],
  },
  {
    name: 'Team',
    tagline: 'STANDARD',
    blurb: 'The plan most teams land on. Roughly the price of a coffee per person.',
    price: { annual: '$5', monthly: '$6' },
    cadence: 'per teammate / month',
    cta: { label: 'Start a team', href: 'https://web.interkom.app/sign-up' },
    highlight: true,
    ribbon: 'most teams pick this',
    features: [
      'Unlimited teammates & workspaces',
      'Full history, search, & exports',
      'Google / Apple SSO',
      'Admin roles · invite controls',
      'Priority support from a real person',
    ],
  },
  {
    name: 'Studio',
    tagline: 'ENTERPRISE',
    blurb: 'Studios, agencies, and companies past 100 people. We tailor the edges.',
    price: { custom: true, label: "Let's talk" },
    cta: { label: 'Contact sales', href: 'mailto:sales@interkom.app' },
    features: [
      'SAML SSO · SCIM provisioning',
      'Custom domain (chat.your-co.com)',
      'Audit log & data residency',
      'Onboarding from our team',
      'A direct line, not a ticket queue',
    ],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual')

  return (
    <section id="pricing" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
      <div className="grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
            // SEC.12 · pricing
          </div>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em] text-(--color-ink) md:text-[56px]">
            Fair, <span className="text-(--color-violet)">flat</span> prices.<br />
            <span className="text-(--color-ink-mute)">No </span>
            <span className="text-(--color-coral)">tiers within tiers.</span>
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-[14.5px] leading-[1.6] text-(--color-ink-soft)">
            Three plans, in plain words. The free one is real — the kind of free you can run a
            small team on for years. No seat minimums, no contact-us-for-pricing maze. Cancel
            with a tap.
          </p>
          {/* Toggle */}
          <div className="mt-6 inline-flex items-center gap-0 border border-(--color-paper-edge) bg-(--color-paper-shadow) p-1 font-mono text-[10px] uppercase tracking-[0.18em]">
            {(['annual', 'monthly'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setBilling(opt)}
                className={`px-4 py-2 transition-colors ${
                  billing === opt
                    ? 'bg-(--color-ink) text-(--color-paper)'
                    : 'text-(--color-ink-soft) hover:text-(--color-ink)'
                }`}
              >
                {opt}
                {opt === 'annual' && (
                  <span className={`ml-2 ${billing === 'annual' ? 'text-(--color-amber)' : 'text-(--color-coral)'}`}>
                    −17%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-px border border-(--color-paper-line) bg-(--color-paper-line) md:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} billing={billing} />
        ))}
      </div>

      {/* Slack comparison ribbon */}
      <div className="mt-12 overflow-hidden border border-(--color-paper-edge) bg-(--color-paper-shadow)">
        <div className="grid items-center gap-6 px-6 py-7 md:grid-cols-12 md:px-9">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
              // benchmark
            </div>
            <div className="mt-2 font-display text-[24px] font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              How does this look <span className="text-(--color-coral)">next to Slack?</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:col-span-7 md:gap-6">
            <Compare label="Per seat / month" us="$5" them="$8.75" themLabel="Slack Pro" />
            <Compare label="Message history (free)" us="Forever" them="90 days" themLabel="Slack Free" />
            <Compare label="Tier sprawl" us="3 plans" them="4 + add-ons" themLabel="Slack" />
          </div>
        </div>
        <div className="border-t border-(--color-paper-line) px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute) md:px-9">
          Slack list prices as published by Salesforce · checked Apr 2026 · we'll update if they move.
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, billing }: { plan: Plan; billing: 'annual' | 'monthly' }) {
  const dark = plan.highlight
  const priced = 'annual' in plan.price
  const priceStr = 'annual' in plan.price ? plan.price[billing] : plan.price.label

  return (
    <article
      className={`relative flex flex-col p-7 md:p-8 ${
        dark
          ? 'text-(--color-paper)'
          : 'bg-(--color-paper) text-(--color-ink)'
      }`}
      style={dark ? { background: 'linear-gradient(180deg, #F4F4F4 0%, #C8C8C8 100%)' } : undefined}
    >
      {plan.ribbon && (
        <div className={`absolute right-5 top-5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
          dark ? 'bg-(--color-paper) text-(--color-amber)' : 'bg-(--color-coral) text-(--color-paper)'
        }`}>
          {plan.ribbon}
        </div>
      )}

      <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${dark ? 'text-(--color-paper)/60' : 'text-(--color-ink-mute)'}`}>
        // {plan.tagline}
      </div>

      <div className="mt-3 flex items-baseline gap-3">
        <div className="font-display text-[28px] font-medium leading-none tracking-[-0.02em]">{plan.name}</div>
      </div>

      <p className={`mt-3 text-[13px] leading-[1.55] ${dark ? 'text-(--color-paper)/70' : 'text-(--color-ink-soft)'}`}>
        {plan.blurb}
      </p>

      <div className={`mt-6 flex items-baseline gap-2 border-t pt-6 ${dark ? 'border-(--color-paper)/15' : 'border-(--color-paper-line)'}`}>
        <div className="font-display text-[52px] font-medium leading-none tracking-[-0.04em]">
          {priceStr}
        </div>
        <div className={`flex flex-col font-mono text-[10px] uppercase tracking-[0.14em] ${
          dark ? 'text-(--color-paper)/60' : 'text-(--color-ink-mute)'
        }`}>
          {priced ? (
            <>
              <span>per teammate</span>
              <span>/ month{billing === 'annual' ? ', billed yearly' : ''}</span>
            </>
          ) : (
            <span className="max-w-[8rem]">{plan.cadence ?? 'custom contract'}</span>
          )}
        </div>
      </div>
      {plan.cadence && priced && (
        <div className={`mt-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
          dark ? 'text-(--color-paper)/55' : 'text-(--color-ink-mute)'
        }`}>
          {plan.cadence}
        </div>
      )}

      <ul className="mt-7 space-y-2.5 text-[13px]">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              aria-hidden
              className={`mt-[6px] inline-block h-[5px] w-[5px] shrink-0 ${
                dark ? 'bg-(--color-paper)' : 'bg-(--color-violet)'
              }`}
            />
            <span className={dark ? 'text-(--color-paper)/90' : 'text-(--color-ink-soft)'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex-1" />

      <a
        href={plan.cta.href}
        className={`mt-8 inline-flex items-center justify-between border px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
          dark
            ? 'border-(--color-paper) bg-(--color-paper) text-(--color-ink) hover:bg-transparent hover:text-(--color-paper)'
            : 'border-(--color-ink) text-(--color-ink) hover:bg-(--color-ink) hover:text-(--color-paper)'
        }`}
      >
        {plan.cta.label}
        <span aria-hidden>→</span>
      </a>
    </article>
  )
}

function Compare({ label, us, them, themLabel }: { label: string; us: string; them: string; themLabel: string }) {
  return (
    <div className="border-l border-(--color-paper-line) pl-4 first:border-l-0 first:pl-0">
      <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-(--color-ink-mute)">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="font-display text-[24px] font-medium leading-none tracking-[-0.02em] text-(--color-ink)">{us}</div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-(--color-violet)">Interkom</div>
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="font-display text-[15px] font-medium leading-none text-(--color-ink-mute) line-through decoration-(--color-coral)/70">
          {them}
        </div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-(--color-ink-mute)">{themLabel}</div>
      </div>
    </div>
  )
}
