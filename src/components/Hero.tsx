import { useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const blobsRef = useRef<HTMLDivElement>(null)

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = blobsRef.current
    if (!el) return
    const dx = (e.clientX / window.innerWidth - 0.5) * 2
    const dy = (e.clientY / window.innerHeight - 0.5) * 2
    el.style.transform = `translate3d(${dx * 22}px, ${dy * 22}px, 0)`
  }

  return (
    <section className="hero" id="top" onMouseMove={onMouseMove}>
      <div className="blobs" ref={blobsRef} style={{ transition: 'transform 0.4s ease-out' }}>
        <div className="blob blob-sky" />
        <div className="blob blob-purple" />
        <div className="blob blob-pink" />
        <div className="blob blob-lime" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="dot" />
          Open to software engineering opportunities · Sydney
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Ryoji Kondo
        </motion.h1>

        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
        >
          <span className="gradient-text">Full-Stack Software Developer</span>
        </motion.h2>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
        >
          Master of Computer Science student at the University of Sydney, building
          reliable, well-tested business applications — from customer-facing web apps
          to distributed backend systems.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46, ease }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">Scroll</div>
    </section>
  )
}
