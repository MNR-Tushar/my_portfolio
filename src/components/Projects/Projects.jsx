import { useState } from 'react'
import { projects } from '../../data/portfolioData'
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation'
import { FiGithub, FiExternalLink, FiTerminal, FiLayers } from 'react-icons/fi'
import './Projects.css'

const filterCategories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Backend & APIs', value: 'backend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
]

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
          <span className="section-subtitle">// Engineering Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Production-grade backends, real-time WebSocket systems, compiler tools, and microservices
          </p>
        </div>

        {/* Filter Buttons */}
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
              >
                {filter.label} <span className="filter-count">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="projects-grid">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`project-card fade-in ${isVisible ? 'visible' : ''}`}
              style={getDelay(index)}
            >
              {/* Custom Technical Banner */}
              <div
                className="project-banner"
                style={{ background: project.gradient || 'var(--bg-secondary)' }}
              >
                <div className="banner-top">
                  <div className="code-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="project-badge-pill">{project.badge}</span>
                </div>

                <div className="banner-content">
                  <div className="banner-endpoint">
                    <FiTerminal className="terminal-icon" />
                    <span className="endpoint-text">{project.endpoint}</span>
                  </div>
                  <div className="banner-status">
                    <span className="status-indicator" />
                    <span className="status-label">{project.statusText}</span>
                  </div>
                </div>

                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>

              {/* Project Body */}
              <div className="project-info">
                <div className="project-header-meta">
                  <h3 className="project-title">{project.title}</h3>
                  {project.tagline && (
                    <span className="project-tagline">{project.tagline}</span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Bottom Action Footer */}
                <div className="project-footer">
                  <a
                    href={project.githubUrl}
                    className="project-action-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={16} />
                    <span>View Repository</span>
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      className="project-action-btn secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
