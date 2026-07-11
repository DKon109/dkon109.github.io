import Reveal from './Reveal'
import { links } from '../data'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="asterisk gradient-text">✳</span> Contact
          </div>
          <h2 className="contact-title">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </h2>
          <p className="contact-sub">
            I&apos;m looking for software engineering roles and internships in Sydney
            and beyond. If my work resonates with you, let&apos;s talk.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${links.email}`} className="btn btn-primary">
              Say Hello
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn ↗
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub ↗
            </a>
          </div>
        </Reveal>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Ryoji Kondo. Built with React + Vite.</span>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${links.email}`}>Email</a>
          </div>
        </footer>
      </div>
    </section>
  )
}
