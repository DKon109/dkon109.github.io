import Reveal from './Reveal'

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
          <Reveal delay={0.1}>
            <div className="card edu-card">
              <span
                className="edu-badge"
                style={{ background: 'rgba(56, 189, 248, 0.12)', color: 'var(--sky)' }}
              >
                Current
              </span>
              <h3 className="edu-school">The University of Sydney</h3>
              <div className="edu-degree">Master of Computer Science</div>
              <div className="edu-period">2025 — Present · Sydney, Australia</div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="card edu-card">
              <span
                className="edu-badge"
                style={{ background: 'rgba(167, 139, 250, 0.12)', color: 'var(--purple)' }}
              >
                Completed
              </span>
              <h3 className="edu-school">Tsuru University</h3>
              <div className="edu-degree">Bachelor of Arts in School Education</div>
              <div className="edu-period">2012 — 2015 · Yamanashi, Japan</div>
            </div>
          </Reveal>
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
