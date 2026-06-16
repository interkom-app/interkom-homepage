import { Wordmark } from './Wordmark'

// Footer site map — every entry resolves to something that actually
// exists: an on-page section anchor, the /privacy route, the web app,
// the public GitHub org, or the sales mailbox. No dead `#` links.
type Link = { label: string; href: string }

const columns: { heading: string; links: Link[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Overview', href: '#product' },
      { label: 'Stories', href: '#stories' },
      { label: 'Workspaces', href: '#workspaces' },
      { label: 'Identity', href: '#identity' },
      { label: 'Calls', href: '#calls' },
      { label: 'Encryption', href: '#encryption' },
    ],
  },
  {
    heading: 'Get Interkom',
    links: [
      { label: 'Download apps', href: '#apps' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Open web app', href: 'https://web.interkom.app' },
      { label: 'Sign in', href: 'https://web.interkom.app/sign-in' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Notes', href: '#notes' },
      { label: 'GitHub', href: 'https://github.com/interkom-app' },
      { label: 'Support', href: 'mailto:support@interkom.app' },
      { label: 'Contact sales', href: 'mailto:sales@interkom.app' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1240px] px-6 pb-12 md:px-10">
      <div className="hairline mb-10" />
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <Wordmark size="lg" />
          <p className="mt-5 max-w-[24rem] font-mono text-[12px] uppercase leading-relaxed tracking-[0.16em] text-(--color-ink-soft)">
            // a private social network for your company.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 text-[13px] md:col-span-6">
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">// {heading}</div>
              <ul className="mt-3 space-y-2 font-mono text-[12px]">
                {links.map(({ label, href }) => {
                  const external = href.startsWith('http')
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="text-(--color-ink-soft) hover:text-(--color-ink)"
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-(--color-paper-line) pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-ink-mute)">
        <div>© {new Date().getFullYear()} Interkom Labs</div>
        <div className="flex items-center gap-5">
          <a href="/privacy" className="hover:text-(--color-ink)">Privacy</a>
          <a href="mailto:sales@interkom.app" className="hover:text-(--color-ink)">Contact</a>
        </div>
      </div>
    </footer>
  )
}
