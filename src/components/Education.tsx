import { useState } from 'react'
import Reveal from './Reveal'
import { education } from '../data'

function Logo({ src, school }: { src: string; school: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) {
    return (
      <div className="edu-logo edu-logo-fallback" aria-hidden>
        {school
          .replace(/^The /, '')
          .split(' ')
          .slice(0, 2)
          .map((w) => w[0])
          .join('')}
      </div>
    )
  }
  return (
    <div className="edu-logo">
      <img src={src} alt={`${school} logo`} loading="lazy" onError={() => setOk(false)} />
    </div>
  )
}

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="asterisk gradient-text">✳</span> Education
          </div>
          <h2 className="section-title">
            Always <span className="gradient-text">learning.</span>
          </h2>
        </Reveal>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={0.1 + i * 0.08}>
              <div className="card edu-card">
                <div className="edu-top">
                  <Logo src={edu.logo} school={edu.school} />
                  <span
                    className="edu-badge"
                    style={{ background: edu.badgeBg, color: edu.badgeColor }}
                  >
                    {edu.badge}
                  </span>
                </div>
                <h3 className="edu-school">{edu.school}</h3>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-period">
                  {edu.period} · {edu.location}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="edu-note">
            Certified teacher in Japan (elementary through high school, English) — the
            foundation of my communication and mentoring skills.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
