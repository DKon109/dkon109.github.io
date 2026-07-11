import Reveal from './Reveal'

const stats = [
  { value: '1+', label: 'Years of hands-on development', color: 'var(--sky)' },
  { value: '5+', label: 'Full-stack projects shipped', color: 'var(--purple)' },
  { value: '2', label: 'Languages — EN & JA', color: 'var(--pink)' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="asterisk gradient-text">✳</span> About Me
          </div>
          <h2 className="section-title">
            From the classroom
            <br />
            to <span className="gradient-text">production code.</span>
          </h2>
        </Reveal>

        <div className="about-grid" style={{ marginTop: 40 }}>
          <Reveal delay={0.1}>
            <div className="about-text">
              <p>
                I design, develop, test, deploy, and maintain{' '}
                <strong>full-stack business applications</strong> using JavaScript,
                TypeScript, React, Node.js, Python, SQL, and MongoDB — with a focus on
                REST API design, authentication, and production-ready maintenance.
              </p>
              <p>
                Alongside my Master&apos;s at the University of Sydney, I build and
                maintain the web systems of <strong>Albion Place Hotel</strong> in
                Sydney: reservations, customer enquiries, online ordering, and the
                integration between online orders and bar ticket printing.
              </p>
              <p>
                Before software, I spent six years as a high-school teacher — an
                experience that taught me how to{' '}
                <strong>communicate complex ideas simply</strong> and collaborate with
                every kind of stakeholder. I enjoy translating business requirements
                into reliable, well-tested software.
              </p>
            </div>
          </Reveal>

          <div className="about-stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div className="card stat-card">
                  <div className="stat-value" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
