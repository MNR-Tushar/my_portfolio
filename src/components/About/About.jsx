import { useState, useEffect, useRef } from 'react'
import { personalInfo, stats, education, problemSolving, achievements } from '../../data/portfolioData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FaGraduationCap, FaCode, FaCheckCircle, FaLaptopCode, FaTrophy } from 'react-icons/fa'
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

const dynamicBadges = [
  { number: '600+', line1: 'DSA Problems', line2: 'Solved' },
  { number: '7+', line1: 'Core Projects', line2: 'Built' },
  { number: '27+', line1: 'GitHub', line2: 'Repositories' },
  { number: '100%', line1: 'Backend', line2: 'Focused' },
]

export default function About() {
  const [ref, isVisible] = useScrollAnimation()
  const [imgError, setImgError] = useState(false)
  const [badgeIndex, setBadgeIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex(prev => (prev + 1) % dynamicBadges.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

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
              <div className="about-image-inner">
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
            </div>
            <div className="about-experience-badge">
              <div key={badgeIndex} className="badge-content-animated">
                <span className="experience-number">{dynamicBadges[badgeIndex].number}</span>
                <span className="experience-text">
                  {dynamicBadges[badgeIndex].line1}
                  <br />
                  {dynamicBadges[badgeIndex].line2}
                </span>
              </div>
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

        {/* Highlight Cards: Education, Problem Solving & Contest Achievements */}
        <div className="about-cards-grid">
          {/* 1. Education Card */}
          <div className="about-card education-card">
            <div className="about-card-icon">
              <FaGraduationCap size={20} />
            </div>
            <div className="about-card-body">
              <div className="card-top-content">
                <span className="card-tag">Education</span>
                <h4 className="card-title">Academic Journey</h4>
              </div>

              <div className="edu-compact-list">
                {/* B.Sc. in CSE */}
                <div className="edu-compact-item">
                  <div className="edu-compact-header">
                    <span className="edu-compact-degree">B.Sc. in CSE</span>
                    <span className="edu-compact-date">2023 – 2026</span>
                  </div>
                  <span className="edu-compact-inst">Daffodil International University (DIU), Savar</span>
                  <div className="edu-course-chips">
                    <span className="edu-chip">DSA</span>
                    <span className="edu-chip">Algorithms</span>
                    <span className="edu-chip">OOP</span>
                    <span className="edu-chip">DBMS</span>
                    <span className="edu-chip">Compilers</span>
                    <span className="edu-chip">Networks</span>
                    <span className="edu-chip">Systems Design &amp; Analysis</span>
                    <span className="edu-chip">Software Engineering</span>
                  </div>
                </div>

                {/* Diploma in Engineering */}
                <div className="edu-compact-item">
                  <div className="edu-compact-header">
                    <span className="edu-compact-degree">Diploma in Engineering</span>
                    <span className="edu-compact-date">2017 – 2021</span>
                  </div>
                  <span className="edu-compact-inst">Magura Polytechnic Institute, Magura</span>
                  <div className="edu-course-chips">
                    <span className="edu-chip">Programming Languages</span>
                    <span className="edu-chip">DSA</span>
                    <span className="edu-chip">DBMS</span>
                    <span className="edu-chip">OOP</span>
                    <span className="edu-chip">Networks</span>
                    <span className="edu-chip">Systems</span>
                    <span className="edu-chip">CS Fundamentals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Problem Solving / CP Card */}
          <div className="about-card cp-card">
            <div className="about-card-icon cp-icon">
              <FaCode size={20} />
            </div>
            <div className="about-card-body">
              <div className="card-top-content">
                <span className="card-tag">Problem Solving</span>
                <h4 className="card-title">600+ Problems Solved</h4>
                <p className="card-subtitle-compact">Active on global algorithmic judges</p>
              </div>

              <div className="cp-card-middle">
                <div className="cp-platforms-compact">
                  {problemSolving.platforms.map((p) => (
                    <span key={p.name} className="cp-platform-pill" title={p.name}>
                      <p.icon size={12} style={{ color: p.color }} />
                      <span>{p.name}</span>
                    </span>
                  ))}
                </div>

                <div className="cp-topics-compact">
                  {problemSolving.topics.map((t) => (
                    <span key={t} className="cp-topic-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Contest Achievements Card */}
          <div className="about-card achievements-card">
            <div className="about-card-icon trophy-icon">
              <FaTrophy size={18} />
            </div>
            <div className="about-card-body">
              <div className="card-top-content">
                <span className="card-tag gold">Contest Achievements</span>
                <h4 className="card-title">Podium &amp; Contest Finishes</h4>
                <p className="card-subtitle-compact">Verified performances in CP competitions</p>
              </div>

              <div className="achievements-compact-list">
                {achievements.map((item, idx) => (
                  <div key={idx} className="achievement-compact-row">
                    <span className={`achievement-rank-badge ${idx === 0 ? 'podium' : ''}`}>
                      {item.rank}
                    </span>
                    <span className="achievement-contest-name-compact" title={item.contest}>
                      {item.contest}
                    </span>
                    <span className="achievement-note-tag">{item.note}</span>
                  </div>
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
