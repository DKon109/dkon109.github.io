import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { projects, links } from '../data'

function onMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  el.style.setProperty('--mx', `${px * 100}%`)
  el.style.setProperty('--my', `${py * 100}%`)
  const rx = (0.5 - py) * 6
  const ry = (px - 0.5) * 6
  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
}

function onLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = ''
}

/**
 * Live iframe preview kept entirely off the initial load: the iframe is
 * injected only once its card approaches the viewport. Opening the site
 * therefore loads zero external apps — they boot on demand as you scroll,
 * which keeps mobile load fast without giving up real live previews.
 * The styled shell holds the layout, so nothing shifts when one appears.
 */
function LivePreview({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let done = false

    const activate = () => {
      if (done) return
      done = true
      setActive(true)
      cleanup()
    }

    // Position check used as a backup for environments where
    // IntersectionObserver callbacks are throttled.
    const check = () => {
      if (done) return
      const vh = window.innerHeight || document.documentElement.clientHeight || 800
      const rect = el.getBoundingClientRect()
      if (rect.top < vh + 300 && rect.bottom > -300) activate()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activate()
      },
      { rootMargin: '300px' },
    )
    io.observe(el)

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    function cleanup() {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      io.disconnect()
    }

    return cleanup
  }, [])

  return (
    <div className="project-preview" ref={ref} aria-hidden="true">
      {active && <iframe src={src} title={title} loading="lazy" tabIndex={-1} />}
      <span>Live preview</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <SectionLabel n="03">Selected Work</SectionLabel>
          <h2 className="section-title">
            Projects that <span className="gradient-text">ship.</span>
          </h2>
          <p className="section-sub">
            University and personal projects covering full-stack apps, distributed
            systems, and software quality engineering. Source code on GitHub.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <article
                className="card project-card"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ '--accent': project.accent } as React.CSSProperties}
              >
                {project.preview && project.liveUrl && (
                  <LivePreview src={project.liveUrl} title={`${project.title} preview`} />
                )}
                <div className="project-top">
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                {project.availabilityNote && (
                  <p className="project-availability">
                    <span aria-hidden="true" /> {project.availabilityNote}
                  </p>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.liveUrl && (
                    <a className="project-button project-button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a className="project-button project-button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="projects-more">
            See all of my repositories on{' '}
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
