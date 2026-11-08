import { useState, useEffect, useRef } from 'react'
import { personalInfo, stats, education, problemSolving } from '../../data/portfolioData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FaGraduationCap, FaCode, FaCheckCircle, FaLaptopCode } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import './About.css'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [started, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const [ref, isVisible] = useScrollAnimation()
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">// Background & Identity</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-description">
            Passionate backend developer with strong algorithmic roots and production system design experience
          </p>
        </div>

        <div ref={ref} className={`about-content fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="about-image-wrapper">
            <div className="about-image-container">
              {!imgError ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="about-image"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="about-image-fallback">
                  <span className="fallback-text">&lt;MNR/&gt;</span>
                </div>
              )}
              <div className="about-image-border" />
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">600+</span>
              <span className="experience-text">DSA Problems<br />Solved</span>
            </div>
          </div>

          <div className="about-info">
            <div className="about-greeting">
              <h3>Md Naimur Rahman <span className="nickname">({personalInfo.nickname})</span></h3>
              <p className="about-headline">Backend Engineer & CSE Undergrad @ DIU</p>
            </div>

            <p className="about-text">{personalInfo.bio}</p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Institution:</span>
                <span className="detail-value">Daffodil International University</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Primary Stack:</span>
                <span className="detail-value">Python, Django, DRF, PostgreSQL, Docker</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value available">Open to Work / Internships</span>
              </div>
            </div>

            <div className="about-action-group">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <FiArrowRight />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Highlight Cards: Education & Problem Solving */}
        <div className="about-cards-grid">
          {/* Education Card */}
          <div className="about-card">
            <div className="about-card-icon">
              <FaGraduationCap size={24} />
            </div>
            <div className="about-card-body">
              <span className="card-tag">Education</span>
              <h4 className="card-title">{education.degree}</h4>
              <p className="card-subtitle">{education.institution}</p>
              <ul className="card-points">
                {education.highlights.map((h, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Problem Solving / CP Card */}
          <div className="about-card">
            <div className="about-card-icon cp-icon">
              <FaCode size={24} />
            </div>
            <div className="about-card-body">
              <span className="card-tag">Algorithmic Problem Solving</span>
              <h4 className="card-title">{problemSolving.totalSolved} Problems Solved</h4>
              <p className="card-subtitle">Active on leading competitive programming judges</p>
              
              <div className="cp-platforms">
                {problemSolving.platforms.map(p => (
                  <span key={p.name} className="cp-platform-pill">
                    <p.icon size={13} style={{ color: p.color }} />
                    {p.name}
                  </span>
                ))}
              </div>

              <div className="cp-topics">
                {problemSolving.topics.map(t => (
                  <span key={t} className="cp-topic-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon && <stat.icon size={20} />}
              </div>
              <div className="stat-number">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
