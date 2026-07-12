import type { MouseEvent } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { projects } from '../data'

function onMove(e: MouseEvent<HTMLAnchorElement>) {
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

function onLeave(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.transform = ''
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
              <a
                className="card project-card"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ '--accent': project.accent } as React.CSSProperties}
              >
                <div className="project-top">
                  <span className="project-year">{project.year}</span>
                  <span className="project-arrow" aria-hidden>
                    ↗
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
