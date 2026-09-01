import { useEffect } from 'react'
import { notifySectionView, notifyClick } from '../lib/telegram'

const SECTIONS = ['hero', 'about', 'experience', 'projects', 'stack', 'photos', 'contact']

/**
 * Sets up:
 *  1. IntersectionObserver to track which sections the visitor scrolls into view
 *  2. A delegated click listener on document to catch all link/button clicks
 */
export function useTelegramTracking() {
  // 1) Section view tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) notifySectionView(id)
        },
        { threshold: 0.25 }
      )
      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach(io => io.disconnect())
  }, [])

  // 2) Global click tracking (delegated — catches every link and button)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const el = target.closest('a, button') as HTMLElement | null
      if (!el) return

      const label =
        el.getAttribute('aria-label') ||
        el.textContent?.trim().slice(0, 60) ||
        el.tagName.toLowerCase()

      const href =
        el.tagName === 'A' ? (el as HTMLAnchorElement).href : undefined

      notifyClick(label, href)
    }

    document.addEventListener('click', handler, { capture: true })
    return () => document.removeEventListener('click', handler, { capture: true })
  }, [])
}
