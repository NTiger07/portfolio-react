import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const mailto = `mailto:falaleru@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="sec-label">06 — Contact</div>
        <div className="contact-card">
          <div className="contact-left">
            <h2 className="contact-title">Let's<br />work<br />together.</h2>
            <p className="contact-sub">
              I'm open to new opportunities — whether you have a project in mind or just want
              to say hello, I'll get back to you.
            </p>
            <div className="contact-socials">
              <a href="https://linkedin.com/in/favolaleru" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                LinkedIn
              </a>
              <a href="https://github.com/ntiger07" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                GitHub
              </a>
              <a href="mailto:falaleru@gmail.com" className="contact-social-link">
                falaleru@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me more…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button className="form-submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
