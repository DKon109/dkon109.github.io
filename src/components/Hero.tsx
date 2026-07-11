import { motion } from 'framer-motion'
import { links } from '../data'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blob blob-sky" />
      <div className="blob blob-purple" />
      <div className="blob blob-pink" />
      <div className="blob blob-lime" />

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
          <a href={links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            GitHub ↗
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">Scroll</div>
    </section>
  )
}
