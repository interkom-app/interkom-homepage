import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Pillars } from './components/Pillars'
import { Stories } from './components/Stories'
import { Workspaces } from './components/Workspaces'
import { Identity } from './components/Identity'
import { Notes } from './components/Notes'
import { Apps } from './components/Apps'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'
import { BillingResult } from './components/BillingResult'

export default function App() {
  // Stripe Checkout returns to /billing?billing=success|cancelled.
  if (window.location.pathname.replace(/\/$/, '') === '/billing') {
    const status =
      new URLSearchParams(window.location.search).get('billing') === 'cancelled'
        ? 'cancelled'
        : 'success'
    return <BillingResult status={status} />
  }

  return (
    <div className="relative isolate min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Pillars />
      <Stories />
      <Workspaces />
      <Identity />
      <Notes />
      <Apps />
      <Pricing />
      <Footer />
    </div>
  )
}
