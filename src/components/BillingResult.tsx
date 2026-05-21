type Props = {
  status: 'success' | 'cancelled'
}

/**
 * Full-page result screen Stripe Checkout returns to. Rendered by App
 * when `?billing=success|cancelled` is present, so it works on the bare
 * homepage origin with no routing or host rewrites.
 */
export function BillingResult({ status }: Props) {
  const success = status === 'success'

  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
        // {success ? 'subscription' : 'checkout'}
      </div>

      <div
        className={`mt-7 flex h-16 w-16 items-center justify-center rounded-full ${
          success
            ? 'bg-(--color-violet) text-(--color-paper)'
            : 'border border-(--color-paper-edge) text-(--color-ink-mute)'
        }`}
      >
        {success ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <h1 className="mt-7 font-display text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-(--color-ink) md:text-[56px]">
        {success ? (
          <>
            You&apos;re on{' '}
            <span className="text-(--color-violet)">Team</span>.
          </>
        ) : (
          <>Checkout&nbsp;cancelled.</>
        )}
      </h1>

      <p className="mt-5 max-w-md text-[15px] leading-[1.6] text-(--color-ink-soft)">
        {success
          ? 'Your workspace just unlocked unlimited teammates and workspaces. The plan is active right away — head back to Interkom and invite the team.'
          : 'No charge was made. You can pick the upgrade back up any time from your workspace settings.'}
      </p>

      <a
        href="/"
        className="mt-9 inline-flex items-center gap-2 border border-(--color-ink) px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-ink) transition-colors hover:bg-(--color-ink) hover:text-(--color-paper)"
      >
        {success ? 'Back to Interkom' : 'Back to home'}
        <span aria-hidden>→</span>
      </a>

      {success ? (
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink-mute)">
          A receipt is on its way to your email.
        </p>
      ) : null}
    </main>
  )
}
