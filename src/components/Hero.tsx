export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-badge hero-anim">
          <span className="dot" />
          Open to software engineering opportunities · All Australia
        </div>

        <h1 className="hero-title hero-anim" style={{ ['--anim-delay' as string]: '0.08s' }}>
          Ryoji Kondo
        </h1>

        <h2 className="hero-role hero-anim" style={{ ['--anim-delay' as string]: '0.18s' }}>
          <span className="gradient-text">Full-Stack Software Developer</span>
        </h2>

        <p className="hero-sub hero-anim" style={{ ['--anim-delay' as string]: '0.28s' }}>
          Master of Computer Science student at the University of Sydney, building
          reliable, well-tested business applications — from customer-facing web apps
          to distributed backend systems.
        </p>

        <div
          className="hero-actions hero-anim"
          style={{ ['--anim-delay' as string]: '0.38s' }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">Scroll</div>
    </section>
  )
}
