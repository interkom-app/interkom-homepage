import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Pillars } from './components/Pillars'
import { Stories } from './components/Stories'
import { Workspaces } from './components/Workspaces'
import { Identity } from './components/Identity'
import { Encryption } from './components/Encryption'
import { Notes } from './components/Notes'
import { Apps } from './components/Apps'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'
import { BillingResult } from './components/BillingResult'
import { PrivacyPolicy } from './components/PrivacyPolicy'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')

  // Stripe Checkout returns to /billing?billing=success|cancelled.
  // Only an explicit `success` shows the success page — anything else
  // (cancelled, an unexpected value, or none) is treated as not-paid.
  if (path === '/billing') {
    const status =
      new URLSearchParams(window.location.search).get('billing') === 'success'
        ? 'success'
        : 'cancelled'
    return <BillingResult status={status} />
  }

  if (path === '/privacy') {
    return <PrivacyPolicy />
  }

  return (
    <div className="relative isolate min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <Stories />
        <Encryption />
        <Workspaces />
        <Identity />
        <Notes />
        <Apps />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
