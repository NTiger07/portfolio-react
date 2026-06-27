import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      setStatusMsg('Please fill in all required fields.')
      return
    }

    setStatus('submitting')
    setStatusMsg('')

    // Uses Web3Forms API. Get your free key at https://web3forms.com/
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Contact Form Submission',
          message: form.message,
          from_name: 'Portfolio Contact'
        })
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setStatusMsg('Thank you! Your message has been sent successfully.')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setStatusMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setStatusMsg('Failed to connect to the server. Please check your connection.')
    }
  }

  return (
    <section id="contact">
      <div className="container">
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
              <a href="https://x.com/codedbyfavour" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                Twitter
              </a>
              <a href="mailto:falaleru@gmail.com" className="contact-social-link">
                falaleru@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  disabled={status === 'submitting'}
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
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me more…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              {statusMsg && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  fontFamily: 'var(--f-mono)',
                  letterSpacing: '0.02em',
                  background: status === 'success' ? 'rgba(46, 204, 113, 0.1)' : 'rgba(231, 76, 60, 0.1)',
                  color: status === 'success' ? '#2ecc71' : '#e74c3c',
                  border: `1px solid ${status === 'success' ? 'rgba(46, 204, 113, 0.2)' : 'rgba(231, 76, 60, 0.2)'}`
                }}>
                  {statusMsg}
                </div>
              )}

              <button
                className="form-submit"
                type="submit"
                disabled={status === 'submitting'}
                style={{ opacity: status === 'submitting' ? 0.6 : 1 }}
              >
                {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
