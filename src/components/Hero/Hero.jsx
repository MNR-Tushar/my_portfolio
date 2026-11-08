import { useState, useEffect } from 'react'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import { FiDownload, FiArrowRight, FiChevronDown, FiCheck } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 70)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 35)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section id="hero" className="hero">
      {/* Background decoration */}
      <div className="hero-bg">
        <div className="hero-gradient-orb orb-1" />
        <div className="hero-gradient-orb orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            {personalInfo.status}
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">$ </span>
            <span className="role-text">{displayText}</span>
            <span className="cursor">█</span>
          </div>

          <p className="hero-description">{personalInfo.tagline}</p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get In Touch <FiArrowRight />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
            <button
              onClick={copyEmail}
              className="btn btn-outline"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <>
                  <FiCheck className="text-green" /> Email Copied!
                </>
              ) : (
                'Copy Email'
              )}
            </button>
          </div>

          <div className="hero-socials">
            <a
              href={personalInfo.githubUrl}
              className="social-badge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
              <span>github/MNR-Tushar</span>
            </a>
            <a
              href={personalInfo.linkedinUrl}
              className="social-badge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={18} />
              <span>linkedin/mdnaimurrahman36</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="code-filename">backend_service.py</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
{`class BackendEngineer:
    name = "${personalInfo.name} (${personalInfo.nickname})"
    education = "DIU • B.Sc in CSE"
    stack = ["Django", "DRF", "PostgreSQL",
             "Celery", "Redis", "Docker"]
    solved_problems = 600

    def build_system(self):
        return {
            "status": "production_ready",
            "db_opt": "indexed & pooled",
            "async_queue": "celery_active",
            "websockets": "asgi_connected"
        }

engineer = BackendEngineer()
print(engineer.build_system())`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Explore Journey</span>
        <FiChevronDown className="scroll-arrow" />
      </a>
    </section>
  )
}
