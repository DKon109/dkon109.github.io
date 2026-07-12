import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { links, WEB3FORMS_ACCESS_KEY } from '../data'

type Status = 'idle' | 'sending' | 'ok' | 'err'

const hasKey =
  WEB3FORMS_ACCESS_KEY.length > 0 && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const body = String(data.get('message') ?? '')

    // Fallback when no Web3Forms key is set: open the visitor's mail client.
    if (!hasKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
      const mailBody = encodeURIComponent(`${body}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${mailBody}`
      setStatus('ok')
      setMessage('Opening your email app…')
      return
    }

    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio enquiry from ${name}`,
          from_name: name,
          name,
          email,
          message: body,
        }),
      })
      if (res.ok) {
        setStatus('ok')
        setMessage("Thanks — your message is on its way. I'll reply soon.")
        form.reset()
      } else {
        throw new Error('Request failed')
      }
    } catch {
      setStatus('err')
      setMessage('Something went wrong. Please email me directly instead.')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="blob blob-purple" style={{ opacity: 0.16 }} />
      <div className="container">
        <div className="contact-grid">
          <Reveal>
            <div>
              <SectionLabel n="06">Contact</SectionLabel>
              <h2 className="contact-title">
                Let&apos;s build
                <br />
                <span className="gradient-text">something great.</span>
              </h2>
              <p className="contact-sub">
                I&apos;m looking for software engineering roles and internships in
                Sydney and beyond. Send a message, or reach me directly.
              </p>
              <div className="contact-direct">
                <a href={`mailto:${links.email}`}>
                  <span className="ic" aria-hidden>
                    ✉
                  </span>
                  {links.email}
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  <span className="ic" aria-hidden>
                    in
                  </span>
                  LinkedIn
                </a>
                <a href={links.github} target="_blank" rel="noreferrer">
                  <span className="ic" aria-hidden>
                    ⌥
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="card form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <div
                className={`form-status ${
                  status === 'ok' ? 'ok' : status === 'err' ? 'err' : ''
                }`}
                role="status"
              >
                {message}
              </div>
            </form>
          </Reveal>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Ryoji Kondo</span>
          <span>Built with React &amp; TypeScript</span>
        </footer>
      </div>
    </section>
  )
}
