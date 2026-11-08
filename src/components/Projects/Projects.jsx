import { useState, useRef, useCallback } from 'react'
import { projects } from '../../data/portfolioData'
import { useStaggerAnimation } from '../../hooks/useScrollAnimation'
import { FiArrowRight, FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectMockup from './ProjectMockup'
import './Projects.css'

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
]

function TiltCard({ children, className, style }) {
  const cardRef = useRef(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    const rotateX = ((y - 50) / 50) * -4
    const rotateY = ((x - 50) / 50) * 4

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    setGlowPos({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.transform = ''
    setGlowPos({ x: 50, y: 50 })
  }, [])

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-glow-effect"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, isVisible, getDelay] = useStaggerAnimation(projects.length, 100)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// Featured Works</span>
          <h2 className="section-title">
            Crafted <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Production-grade backends, real-time WebSocket systems, compiler tools, and web platforms
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {filterCategories.map(filter => {
            const count = filter.value === 'all'
              ? projects.length
              : projects.filter(p => p.category === filter.value).length

            return (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
              >
                {filter.label} <span className="filter-count">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div ref={ref} className="projects-grid">
          {filtered.map((project, index) => {
            const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl !== '#')
            const previewUrl = hasLiveDemo ? project.liveUrl : project.githubUrl

            return (
              <TiltCard
                key={project.id}
                className={`custom-project-card fade-in ${isVisible ? 'visible' : ''}`}
                style={getDelay(index)}
              >
                {/* Top Visual Preview Container */}
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-mockup-wrapper"
                  title={hasLiveDemo ? `Open ${project.title} Live Demo` : `View ${project.title} on GitHub`}
                >
                  <ProjectMockup project={project} />

                  {/* Top Right Subtle Circle Button */}
                  <div
                    className={`preview-circle-indicator ${hasLiveDemo ? 'has-live' : ''}`}
                    title={hasLiveDemo ? 'Live Demo' : 'GitHub Repository'}
                  >
                    {hasLiveDemo ? <FiExternalLink size={14} /> : <FiArrowUpRight size={14} />}
                  </div>
                </a>

                {/* Card Content Area */}
                <div className="card-inner-content">
                  {/* Row of Pill Badges */}
                  <div className="card-pills-row">
                    {project.pills.map((pill) => (
                      <span key={pill} className="pill-badge">
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="custom-card-title">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-title-link"
                      title={`View ${project.title} on GitHub`}
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="custom-card-desc">{project.description}</p>

                  {/* Bottom Action Row */}
                  <div className="card-bottom-row">
                    {/* Left: View Project -> GitHub Repository */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-link"
                      title={`View ${project.title} source code on GitHub`}
                    >
                      <FiGithub size={15} className="action-github-icon" />
                      <span>View Project</span>
                      <span className="arrow-sym">→</span>
                    </a>

                    {/* Right: Live Demo */}
                    {hasLiveDemo ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="circle-arrow-btn has-live"
                        title={`Open ${project.title} Live Demo`}
                        aria-label={`Open ${project.title} Live Demo`}
                      >
                        <FiExternalLink size={15} />
                      </a>
                    ) : (
                      <span
                        className="circle-arrow-btn is-disabled"
                        title="Backend API (Live Demo Not Deployed)"
                        aria-label="Live Demo not deployed"
                      >
                        <FiArrowRight size={15} />
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
