import { useEffect, useRef, useState, type MouseEvent } from 'react'

export default function Hero() {
  const blobsRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [showBlobs, setShowBlobs] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Mount the blurred blobs only after the page has painted and loaded, then
  // fade them in. The expensive blur rasterisation happens off the critical
  // path, so mobile first paint stays instant while the look is unchanged.
  useEffect(() => {
    const start = () => setShowBlobs(true)
    if (document.readyState === 'complete') {
      const id = requestAnimationFrame(start)
      return () => cancelAnimationFrame(id)
    }
    window.addEventListener('load', start, { once: true })
    const fallback = window.setTimeout(start, 1500)
    return () => {
      window.removeEventListener('load', start)
      clearTimeout(fallback)
    }
  }, [])

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = blobsRef.current
    if (!el) return
    const dx = (e.clientX / window.innerWidth - 0.5) * 2
    const dy = (e.clientY / window.innerHeight - 0.5) * 2
    el.style.transform = `translate3d(${dx * 22}px, ${dy * 22}px, 0)`
  }

  return (
    <section
      className={`hero ${ready ? 'ready' : ''}`}
      id="top"
      onMouseMove={onMouseMove}
    >
      <div className={`blobs ${showBlobs ? 'blobs-in' : ''}`} ref={blobsRef}>
        {showBlobs && (
          <>
            <div className="blob blob-sky" />
            <div className="blob blob-purple" />
            <div className="blob blob-pink" />
            <div className="blob blob-lime" />
          </>
        )}
      </div>

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
