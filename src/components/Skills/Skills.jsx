import { useState } from 'react'
import { skillCategories } from '../../data/portfolioData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Skills.css'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// Technical Stack & Tooling</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-description">
            Specialized in high-performance Python/Django backend systems, relational databases, asynchronous task queues, and containerization
          </p>
        </div>

        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Category Tabs */}
          <div className="skills-tabs">
            {skillCategories.map((cat, index) => (
              <button
                key={cat.name}
                className={`skill-tab ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Skills Grid with key to re-animate bars smoothly on category switch */}
          <div key={activeCategory} className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card fade-in visible"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon size={28} />
                </div>
                <div className="skill-info">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        background: skill.color,
                        transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
