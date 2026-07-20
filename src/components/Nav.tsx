import { useEffect, useState } from 'react'
import { links } from '../data'

const items = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-mark" aria-label="Ryoji Kondo — home">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="navMarkGrad" x1="2" y1="2" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2bb6f6" />
                <stop offset="0.5" stopColor="#7c5cff" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <rect width="38" height="38" rx="11" fill="url(#navMarkGrad)" />
            <path
              d="M15 13.5 L10.5 19 L15 24.5"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 13.5 L27.5 19 L23 24.5"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M20.8 11.8 L17.2 26.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </a>
        <nav className="nav-links">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <a href="#contact" className="nav-cta">
          Get in touch
        </a>
      </div>
    </header>
  )
}
