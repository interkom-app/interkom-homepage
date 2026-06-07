import { StrictMode } from 'react'
import './index.css'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'

// Single-page SSG: the homepage is pre-rendered to static HTML at build
// time (so crawlers — including non-JS AI bots — get the real body), then
// hydrated in the browser. Secondary routes (/privacy, /billing) stay
// client-rendered; see App.tsx for the SSR-safe routing.
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
