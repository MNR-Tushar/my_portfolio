import { useState, useEffect, useRef } from 'react'
import { skillCategories } from '../../data/portfolioData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Skills.css'

function AnimatedSkillBar({ level, color, isActive }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setWidth(0)
      return
    }

    let timeoutId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setWidth(level), 50)
        }
      },
      { threshold: 0.1 }
    )

    if (barRef.current) observer.observe(barRef.current)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isActive, level])

  return (
    <div ref={barRef} className="skill-meter-track">
      <div
        className="skill-meter-fill"
        style={{
          width: `${width}%`,
          background: color,
        }}
      />
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [ref, isVisible] = useScrollAnimation()

  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Core Specialist'
    if (level >= 82) return 'Production Ready'
    return 'Proficient'
  }

  const handleCategoryChange = (index) => {
    if (index === activeCategory) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveCategory(index)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// Engineering Stack</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-description">
            Hands-on technologies, relational data models, queue architectures, and containerization tooling
          </p>
        </div>

        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Segmented Control Tabs */}
          <div className="skills-tabs-wrapper">
            <div className="skills-tabs">
              {skillCategories.map((cat, index) => (
                <button
                  key={cat.name}
                  className={`skill-tab ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(index)}
                  type="button"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`skills-grid ${isTransitioning ? 'transitioning' : ''}`}>
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card skill-card-animate"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-box" style={{ color: skill.color }}>
                    <skill.icon size={26} />
                  </div>
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-proficiency">
                      {getProficiencyLabel(skill.level)}
                    </span>
                  </div>
                  <span className="skill-score">{skill.level}%</span>
                </div>

                <AnimatedSkillBar
                  level={skill.level}
                  color={skill.color}
                  isActive={!isTransitioning}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
