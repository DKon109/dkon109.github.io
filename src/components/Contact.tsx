import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { links } from '../data'

type Status = 'idle' | 'sending' | 'ok' | 'err'

// FormSubmit.co delivers submissions straight to this inbox — no API key or
// backend needed. The first submission triggers a one-time activation email;
// once confirmed, every message is forwarded automatically.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${links.email}`
const FORM_ACTION = `https://formsubmit.co/${links.email}`

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

    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: body,
          _subject: `Portfolio enquiry from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const result = await res.json().catch(() => null)
      // FormSubmit returns HTTP 200 even when delivery didn't happen (e.g. the
      // form still needs activation), so trust the `success` flag, not the status.
      if (res.ok && result && String(result.success) === 'true') {
        setStatus('ok')
        setMessage("Thanks — your message has been sent. I'll get back to you soon.")
        form.reset()
      } else {
        throw new Error(result?.message || 'Request failed')
      }
    } catch {
      // Delivery not confirmed — fall back to the visitor's mail client so the
      // message is never silently lost.
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
      const mailBody = encodeURIComponent(`${body}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${mailBody}`
      setStatus('err')
      setMessage('Could not send directly — opening your email app instead.')
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
            <form
              className="card form"
              method="POST"
              action={FORM_ACTION}
              onSubmit={handleSubmit}
            >
              {/* Honeypot: bots fill this hidden field; humans never see it. */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
                aria-hidden="true"
              />
              <input type="hidden" name="_subject" value="Portfolio enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

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
