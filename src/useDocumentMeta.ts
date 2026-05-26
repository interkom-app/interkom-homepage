import { useEffect } from 'react'

type Meta = {
  title: string
  description?: string
  canonical?: string
  robots?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useDocumentMeta(meta: Meta) {
  useEffect(() => {
    document.title = meta.title

    if (meta.description) {
      setMeta('meta[name="description"]', 'name', 'description', meta.description)
    }
    if (meta.canonical) setCanonical(meta.canonical)
    if (meta.robots) {
      setMeta('meta[name="robots"]', 'name', 'robots', meta.robots)
    }

    const ogTitle = meta.ogTitle ?? meta.title
    setMeta('meta[property="og:title"]', 'property', 'og:title', ogTitle)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle)

    const ogDesc = meta.ogDescription ?? meta.description
    if (ogDesc) {
      setMeta('meta[property="og:description"]', 'property', 'og:description', ogDesc)
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', ogDesc)
    }
    if (meta.ogUrl) {
      setMeta('meta[property="og:url"]', 'property', 'og:url', meta.ogUrl)
    }
  }, [meta.title, meta.description, meta.canonical, meta.robots, meta.ogTitle, meta.ogDescription, meta.ogUrl])
}
