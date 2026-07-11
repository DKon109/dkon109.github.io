import type { MouseEvent } from 'react'
import Reveal from './Reveal'
import { projects } from '../data'

function onMove(e: MouseEvent<HTMLAnchorElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="asterisk gradient-text">✳</span> Selected Work
          </div>
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
                style={{ '--accent': project.accent } as React.CSSProperties}
              >
                <div className="project-top">
                  <span className="project-year">{project.year}</span>
                  <span className="project-arrow" aria-hidden>
                    →
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
