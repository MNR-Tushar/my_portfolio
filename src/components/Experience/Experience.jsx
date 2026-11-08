import { experiences } from '../../data/portfolioData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FiBriefcase, FiExternalLink, FiCalendar } from 'react-icons/fi'
import './Experience.css'

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// Engineering Journey</span>
          <h2 className="section-title">
            Journey & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            From self-taught roots on a smartphone to building production-grade backend architectures and solving 600+ algorithmic problems
          </p>
        </div>

        <div ref={ref} className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${index * 140}ms` : '0ms' }}
            >
              <div className="timeline-dot">
                <FiBriefcase size={14} />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <a
                      href={exp.companyUrl}
                      className="timeline-company"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company} <FiExternalLink size={12} />
                    </a>
                  </div>
                  <span className="timeline-duration">
                    <FiCalendar size={12} className="calendar-icon" />
                    {exp.duration}
                  </span>
                </div>

                <ul className="timeline-duties">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
