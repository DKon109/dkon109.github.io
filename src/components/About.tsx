import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const stats = [
  { target: 1, suffix: '+', label: 'Years of hands-on development', color: 'var(--sky)' },
  { target: 5, suffix: '+', label: 'Full-stack projects shipped', color: 'var(--purple)' },
  { target: 2, suffix: '', label: 'Languages — English & Japanese', color: 'var(--pink)' },
]

function Stat({ target, suffix, label, color }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null)
  // Start at the final value so the real number is always shown — the count-up
  // only runs as an animation once the card scrolls into view.
  const [value, setValue] = useState(target)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1100
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(eased * target))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { rootMargin: '-40px' },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
      // If unmounted mid-animation, nothing to restore — remount re-inits to target.
    }
  }, [target])

  return (
    <div className="card stat-card" ref={ref}>
      <div className="stat-value" style={{ color }}>
        {value}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function About() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <SectionLabel n="01">About Me</SectionLabel>
          <h2 className="section-title">
            From the classroom
            <br />
            to <span className="gradient-text">production code.</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="portrait-wrap">
              <div className="portrait-inner">
                {imgOk ? (
                  <img
                    src="/portrait.jpg"
                    alt="Ryoji Kondo"
                    loading="lazy"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="portrait-fallback">RK</div>
                )}
                <div className="portrait-tag">
                  <span className="pin">◉</span> Sydney, Australia
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.16}>
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
                  every kind of stakeholder.
                </p>
              </div>
            </Reveal>

            <div className="about-stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.2 + i * 0.08}>
                  <Stat {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
