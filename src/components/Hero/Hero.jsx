import { useState, useEffect, useRef } from 'react'
import { personalInfo } from '../../data/portfolioData'
import { FiArrowRight, FiChevronDown, FiDownload, FiTerminal } from 'react-icons/fi'
import ParticleField from '../ParticleField/ParticleField'
import './Hero.css'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const visualRef = useRef(null)

  // Scroll listener for sticky active status in main body
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!visualRef.current || window.innerWidth < 768) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 12
      visualRef.current.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 65)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2400)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 30)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="hero" className="hero">
      {/* Particle Network Background */}
      <div className="hero-atmosphere">
        <div className="ambient-glow" />
        <div className="technical-grid" />
        <ParticleField />
        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
          <div className="shape shape-4" />
        </div>
      </div>

      <div className={`hero-content container ${isLoaded ? 'hero-loaded' : ''}`}>
        <div className="hero-text">
          <div className="status-pill-wrapper">
            <a
              href="#contact"
              className={`status-pill hero-stagger-1 ${isSticky ? 'sticky-active' : ''}`}
              title="Open for Internships & Backend Roles — Let's Connect!"
            >
              <span className="live-dot" />
              <span className="status-text">{personalInfo.status}</span>
              <span className="status-short">Open to Work</span>
            </a>
          </div>

          <h1 className="hero-title hero-stagger-2">
            Hi, I'm <span className="gradient-text animated-gradient">{personalInfo.name}</span>
          </h1>

          <div className="hero-role hero-stagger-3">
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description hero-stagger-4">{personalInfo.tagline}</p>

          <div className="hero-cta hero-stagger-5">
            <a href="#contact" className="btn btn-primary magnetic-btn">
              Let's Connect <FiArrowRight />
            </a>
            <a href="#projects" className="btn btn-secondary magnetic-btn">
              Explore Projects
            </a>
            <a
              href="/resume.pdf"
              download="Md_Naimur_Rahman_Resume.pdf"
              className="btn btn-tertiary magnetic-btn"
              title="Download Resume (PDF)"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Realistic IDE Window with 3D Parallax */}
        <div className="hero-visual hero-stagger-6" ref={visualRef}>
          <div className="editor-window">
            <div className="editor-header">
              <div className="editor-dots">
                <span className="mac-dot close" />
                <span className="mac-dot minimize" />
                <span className="mac-dot expand" />
              </div>
              <div className="editor-tab">
                <FiTerminal size={12} className="tab-icon" />
                <span className="tab-title">engineer.py</span>
              </div>
              <span className="editor-lang">Python 3.12</span>
            </div>

            <div className="editor-body">
              <div className="line-numbers">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="code-content">
                <code>
<span className="syn-comment"># Production-grade backend architecture</span>{'\n'}
<span className="syn-keyword">class</span> <span className="syn-class">BackendEngineer</span>:{'\n'}
{'    '}<span className="syn-property">name</span> = <span className="syn-string">"{personalInfo.name}"</span>{'\n'}
{'    '}<span className="syn-property">education</span> = <span className="syn-string">"DIU • B.Sc in CSE"</span>{'\n'}
{'    '}<span className="syn-property">primary_stack</span> = [{'\n'}
{'        '}<span className="syn-string">"Django"</span>, <span className="syn-string">"DRF"</span>, <span className="syn-string">"FastAPI"</span>,{'\n'}
{'        '}<span className="syn-string">"PostgreSQL"</span>, <span className="syn-string">"Celery"</span>, <span className="syn-string">"Docker"</span>{'\n'}
{'    '}]{'\n'}
{'    '}<span className="syn-property">problems_solved</span> = <span className="syn-number">600</span>{'\n'}
{'\n'}
{'    '}<span className="syn-keyword">def</span> <span className="syn-func">get_capabilities</span>(<span className="syn-self">self</span>):{'\n'}
{'        '}<span className="syn-keyword">return</span> <span className="syn-string">"Scalable APIs &amp; Microservices"</span>{'\n'}
{'\n'}
<span className="syn-func">print</span>(<span className="syn-class">BackendEngineer</span>().<span className="syn-func">get_capabilities</span>())
                </code>
              </pre>
            </div>
            
            <div className="editor-status-bar">
              <div className="status-item">
                <span className="git-branch">main</span>
              </div>
              <div className="status-item">UTF-8</div>
              <div className="status-item status-ready">🟢 Django Service Active</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
        <span>Engineering Journey</span>
        <FiChevronDown className="scroll-arrow" />
      </a>
    </section>
  )
}
