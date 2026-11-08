import { useState } from 'react'
import { contactInfo, socialLinks, personalInfo } from '../../data/portfolioData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FiSend, FiCheck, FiCopy, FiMail, FiExternalLink } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open default mail client with encoded parameters
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Naimur,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    
    window.location.href = mailtoUrl
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// Let's build together</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-description">
            Looking for a backend engineer, full-stack collaborator, or want to discuss a project? Feel free to reach out!
          </p>
        </div>

        <div ref={ref} className={`contact-content fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Contact Info Side */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's discuss opportunities & systems</h3>
            <p className="contact-info-text">
              I am currently open to internships, entry-level backend software roles, open-source initiatives, and engineering discussions.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-item-icon">
                    <item.icon size={20} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">{item.label}</span>
                    {item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="contact-item-value-link"
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        {item.value}
                        {item.href.startsWith('http') && <FiExternalLink size={12} />}
                      </a>
                    ) : (
                      <span className="contact-item-value">{item.value}</span>
                    )}
                  </div>

                  {item.copyable && (
                    <button
                      onClick={handleCopyEmail}
                      className="contact-copy-btn"
                      title="Copy Email"
                      type="button"
                    >
                      {copiedEmail ? <FiCheck className="text-green" size={16} /> : <FiCopy size={16} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <span className="contact-socials-label">Connect with me:</span>
              <div className="contact-social-links">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Backend Role Inquiry / Project Collaboration"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your team, tech stack, or project..."
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${isSubmitted ? 'submitted' : ''}`}
            >
              {isSubmitted ? (
                <>
                  <FiCheck /> Opening Email Client...
                </>
              ) : (
                <>
                  <FiSend /> Send Message Direct
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
