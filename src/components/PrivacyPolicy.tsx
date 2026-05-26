import { useDocumentMeta } from '../useDocumentMeta'

type Section = {
  title: string
  paragraphs?: string[]
  bullets?: { label: string; text: string }[]
}

const EFFECTIVE = '21 May 2026'

const intro =
  'Interkom is a private messaging network for teams, built by Interkom Labs ("Interkom", "we", "us"). This policy explains what we collect when you use the Interkom apps and website, why we collect it, and the choices you have. We keep it in plain words.'

const sections: Section[] = [
  {
    title: 'Information we collect',
    paragraphs: [
      'We collect only what we need to run a chat product for your team:',
    ],
    bullets: [
      {
        label: 'Account & profile',
        text: 'Your email address, display name, handle, optional avatar, job title, pronouns and timezone — the details you choose to share with your workspace.',
      },
      {
        label: 'Workspace content',
        text: 'The messages, files, images, voice notes, stories and reactions you send, plus the workspaces and chats you belong to. This content is yours; we process it to deliver it to the people you send it to.',
      },
      {
        label: 'Usage & device data',
        text: 'Basic technical data needed to operate and secure the service — IP address, device and OS type, app version, log and diagnostic data, and (if you enable notifications) a push token.',
      },
      {
        label: 'Payment data',
        text: 'If your workspace subscribes to a paid plan, billing is handled by Stripe. We receive the subscription status and plan — never your full card number, which Stripe stores on our behalf.',
      },
    ],
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use the information above to provide and maintain the service: to deliver your messages, sync your account across devices, send notifications you ask for, process subscriptions, prevent abuse and fraud, provide support, and meet our legal obligations.',
      'We do not use your messages or files to train advertising or third-party AI models, and we do not sell your personal data.',
    ],
  },
  {
    title: 'How we share information',
    paragraphs: ['We share information only in these limited cases:'],
    bullets: [
      {
        label: 'Within your workspace',
        text: 'Other members of a workspace or chat can see the messages, profile and content you share there. That is the point of the product.',
      },
      {
        label: 'Service providers',
        text: 'We rely on a small set of processors to run Interkom: Supabase (database, file storage and realtime infrastructure), Stripe (payment processing), and Apple Push Notification service (delivering notifications). They may process data only on our instructions.',
      },
      {
        label: 'Legal & safety',
        text: 'We may disclose information if required by law, or where necessary to protect the rights, safety and security of our users or the public.',
      },
      {
        label: 'Business transfers',
        text: 'If Interkom is involved in a merger, acquisition or sale of assets, information may transfer as part of that deal; we will notify you of any change in control.',
      },
    ],
  },
  {
    title: 'Data retention',
    paragraphs: [
      'We keep your content for as long as your account and workspace are active. Messages you delete are removed; a workspace scheduled for deletion is held for a 30-day grace period and then permanently purged, along with its chats, messages and files.',
      'When you delete your account, we delete or anonymise your personal data within a reasonable period, except where we must retain it to comply with a legal obligation or resolve disputes.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'Data is encrypted in transit (TLS) and at rest. Access is gated by row-level security so workspaces and chats are only readable by their members. We follow least-privilege practices internally. No system is perfectly secure, but we work to protect your data and to notify you promptly if a breach affects you.',
    ],
  },
  {
    title: 'Your rights & choices',
    paragraphs: [
      'You can access and update your profile at any time in the app. Depending on where you live, you may also have the right to request a copy of your data, correct it, export it, restrict or object to its processing, or ask us to delete it.',
      'You control notifications from your device and in-app settings. To exercise any data right, contact us using the details below — we will respond within the timeframe required by applicable law.',
    ],
  },
  {
    title: 'Cookies & local storage',
    paragraphs: [
      'The Interkom website uses only the storage strictly necessary to run it — for example, keeping you signed in. We do not use advertising or cross-site tracking cookies.',
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      'Interkom is a workplace tool and is not directed to children. We do not knowingly collect personal data from anyone under 16. If you believe a child has provided us data, contact us and we will delete it.',
    ],
  },
  {
    title: 'International transfers',
    paragraphs: [
      'Interkom may process and store data in countries other than your own. Where we transfer personal data across borders, we use appropriate safeguards consistent with applicable data-protection law.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this policy as the product evolves. When we make material changes we will update the date above and, where appropriate, notify you in the app. Continued use of Interkom after a change means you accept the updated policy.',
    ],
  },
  {
    title: 'Contact us',
    paragraphs: [
      'Questions about this policy or your data? Reach us at privacy@interkom.app and we will get back to you.',
    ],
  },
]

export function PrivacyPolicy() {
  useDocumentMeta({
    title: 'Privacy Policy — Interkom',
    description:
      'How Interkom collects, uses, and protects your data. Plain words, effective ' + EFFECTIVE + '.',
    canonical: 'https://interkom.app/privacy',
    ogUrl: 'https://interkom.app/privacy',
  })

  return (
    <div className="relative isolate min-h-screen">
      <header className="mx-auto max-w-[1240px] px-6 pt-8 md:px-10">
        <a
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
        >
          <span
            aria-hidden
            className="transition-transform group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Interkom
        </a>
      </header>

      <main className="mx-auto max-w-[760px] px-6 py-16 md:px-10 md:py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--color-ink-mute)">
          // legal · privacy
        </div>
        <h1 className="mt-4 font-display text-[40px] font-medium leading-[1.02] tracking-[-0.03em] text-(--color-ink) md:text-[56px]">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          Effective {EFFECTIVE}
        </p>

        <p className="mt-8 text-[15px] leading-[1.7] text-(--color-ink-soft)">
          {intro}
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2 className="flex items-baseline gap-3 font-display text-[22px] font-medium tracking-[-0.02em] text-(--color-ink) md:text-[26px]">
                <span className="font-mono text-[11px] tracking-normal text-(--color-violet)">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>

              {section.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  className="mt-4 text-[14.5px] leading-[1.7] text-(--color-ink-soft)"
                >
                  {p}
                </p>
              ))}

              {section.bullets ? (
                <dl className="mt-5 space-y-4 border-l border-(--color-paper-line) pl-5">
                  {section.bullets.map((b) => (
                    <div key={b.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-ink)">
                        {b.label}
                      </dt>
                      <dd className="mt-1.5 text-[14px] leading-[1.65] text-(--color-ink-soft)">
                        {b.text}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-(--color-paper-line) pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
          © {new Date().getFullYear()} Interkom Labs
        </div>
      </main>
    </div>
  )
}
