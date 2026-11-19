import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { siGithub } from 'simple-icons'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { stack, type Tech } from '../data'
import { techUsage } from '../techUsage'

function TechIcon({ tech }: { tech: Tech }) {
  if (tech.image && tech.imageViewBox) {
    return (
      <svg viewBox={tech.imageViewBox} aria-hidden="true">
        <image href={tech.image} width={266} height={204} />
      </svg>
    )
  }
  if (tech.image) return <img src={tech.image} alt="" width={22} height={22} />
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={tech.path} fill={tech.color} />
    </svg>
  )
}

function TechDetails({ tech, onClose }: { tech: Tech; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const usage = techUsage[tech.name]

  useEffect(() => {
    const dialog = ref.current!
    const previousOverflow = document.body.style.overflow
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return createPortal(
    <dialog
      ref={ref}
      className="tech-details"
      style={{ '--chip-color': tech.color } as React.CSSProperties}
      aria-labelledby="tech-details-title"
      aria-describedby="tech-details-description"
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]')
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) ref.current?.close()
      }}
    >
      <div className="tech-details-inner">
        <button
          type="button"
          className="tech-details-close"
          aria-label="Close technology details"
          onClick={() => ref.current?.close()}
          autoFocus
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m6 6 12 12M6 18 18 6" />
          </svg>
        </button>
        <span className="tech-details-eyebrow">Behind the icon</span>
        <div className="tech-details-heading">
          <span className="tech-details-logo"><TechIcon tech={tech} /></span>
          <h3 id="tech-details-title">{tech.name}</h3>
        </div>
        <p className="tech-details-context">{usage.context}</p>
        <p className="tech-details-description" id="tech-details-description">{usage.description}</p>
        <div className="tech-details-sources">
          <span className="tech-details-source-label">Explore on GitHub</span>
          {usage.links.map((link) => (
            <a
              key={link.url}
              className="tech-source-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} — ${link.kind === 'project' ? 'project' : 'official tool'} source on GitHub (opens in a new tab)`}
            >
              <span className="tech-source-github">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siGithub.path} fill="currentColor" /></svg>
              </span>
              <span className="tech-source-text">
                <strong>{link.label}</strong>
                <span>{link.kind === 'project' ? 'Project source' : 'Official tool source'}</span>
              </span>
              <svg className="tech-source-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 18 18 6M6 6h12v12" />
              </svg>
            </a>
          ))}
        </div>
        {usage.note && <p className="tech-details-note">{usage.note}</p>}
      </div>
    </dialog>,
    document.body,
  )
}

export default function Stack() {
  const [selected, setSelected] = useState<Tech | null>(null)
  return (
    <section className="section" id="stack">
      <div className="container">
        <Reveal>
          <SectionLabel n="02">My Stack</SectionLabel>
          <h2 className="section-title">
            What I <span className="gradient-text">build with.</span>
          </h2>
          <p className="section-sub">
            Technologies and engineering practices used across my university assignments,
            team projects, and independent work. Select an icon to explore the work behind it.
          </p>
        </Reveal>

        <div className="stack-rows" style={{ marginTop: 24 }}>
          {stack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="stack-row">
                <div className="stack-category">{group.category}</div>
                <div className="stack-items">
                  {group.items.map((tech) => (
                    <button
                      key={tech.name}
                      type="button"
                      className="tech-chip"
                      style={{ '--chip-color': tech.color } as React.CSSProperties}
                      aria-haspopup="dialog"
                      onClick={() => setSelected(tech)}
                    >
                      <TechIcon tech={tech} />
                      {tech.name}
                      <svg className="tech-chip-more" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {selected && <TechDetails key={selected.name} tech={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
