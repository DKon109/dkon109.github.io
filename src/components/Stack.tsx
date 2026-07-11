import Reveal from './Reveal'
import { stack, type Tech } from '../data'

function TechChip({ tech }: { tech: Tech }) {
  return (
    <span className="tech-chip" style={{ '--chip-color': tech.color } as React.CSSProperties}>
      <svg viewBox="0 0 24 24" role="img" aria-label={tech.name}>
        <path d={tech.path} fill={tech.color} />
      </svg>
      {tech.name}
    </span>
  )
}

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="asterisk gradient-text">✳</span> My Stack
          </div>
          <h2 className="section-title">
            Tools I <span className="gradient-text">build with.</span>
          </h2>
        </Reveal>

        <div className="stack-rows" style={{ marginTop: 24 }}>
          {stack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="stack-row">
                <div className="stack-category">{group.category}</div>
                <div className="stack-items">
                  {group.items.map((tech) => (
                    <TechChip key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
