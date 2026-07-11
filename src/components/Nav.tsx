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
        <a href="#top" className="nav-logo">
          <span className="gradient-text">RK</span>
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
